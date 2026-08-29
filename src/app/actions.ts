
'use server';

import { z } from 'zod';
import { analyzeAndSuggestSEO, type SEOInput } from '@/ai/flows/seo-content-enhancement';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  try {
    const { name, email, phone, company, subject, message } = values;
    const recipientEmail = 'sales.vviok@gmail.com';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const emailSubject = `🚨 New Lead: ${subject || 'Product Inquiry'} - ${name} ${company ? `(${company})` : ''}`;

    const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : '';
    const whatsappLink = cleanPhone ? `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(`Hello ${name}, thank you for contacting VVIOK Industry regarding your inquiry.`)}` : '';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
          .container { max-width: 620px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background-color: #0f172a; padding: 28px 24px; text-align: center; border-bottom: 4px solid #a5be1d; }
          .header h1 { color: #ffffff; margin: 0 0 6px 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; }
          .header p { color: #a5be1d; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
          .body { padding: 28px 24px; }
          .badge { display: inline-block; background-color: #f0fdf4; color: #166534; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; border: 1px solid #bbf7d0; margin-bottom: 20px; text-transform: uppercase; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .table td { padding: 12px 14px; font-size: 14px; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
          .table .label { font-weight: 700; color: #64748b; width: 32%; text-transform: uppercase; font-size: 11px; letter-spacing: 0.5px; }
          .table .value { color: #0f172a; font-weight: 600; }
          .message-box { background-color: #f8fafc; border-left: 4px solid #a5be1d; padding: 16px 20px; border-radius: 0 12px 12px 0; margin-bottom: 24px; }
          .message-box h4 { margin: 0 0 8px 0; color: #475569; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
          .message-box p { margin: 0; color: #1e293b; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
          .actions { text-align: center; margin: 24px 0 10px 0; }
          .button { display: inline-block; background-color: #0f172a; color: #ffffff !important; font-size: 13px; font-weight: 700; text-decoration: none; padding: 12px 24px; border-radius: 10px; margin: 0 6px 8px 6px; }
          .button-whatsapp { background-color: #25D366; color: #ffffff !important; }
          .footer { background-color: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>VVIOK Industry</h1>
            <p>New Website Lead / Quotation Request</p>
          </div>
          <div class="body">
            <span class="badge">Received on ${timestamp} (IST)</span>
            
            <table class="table">
              <tr>
                <td class="label">Customer Name</td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="value"><a href="tel:${cleanPhone}" style="color: #0284c7; text-decoration: none;">${phone}</a></td>
              </tr>` : ''}
              <tr>
                <td class="label">Company Name</td>
                <td class="value">${company || 'Not Specified (Individual Lead)'}</td>
              </tr>
              ${subject ? `
              <tr>
                <td class="label">Subject / Product</td>
                <td class="value">${subject}</td>
              </tr>` : ''}
            </table>

            <div class="message-box">
              <h4>Requirement / Message</h4>
              <p>${message}</p>
            </div>

            <div class="actions">
              <a href="mailto:${email}?subject=Re: Inquiry with VVIOK Industry - Quotation Details" class="button">Reply via Email</a>
              ${whatsappLink ? `<a href="${whatsappLink}" target="_blank" class="button button-whatsapp">Chat on WhatsApp</a>` : ''}
            </div>
          </div>
          <div class="footer">
            This lead was automatically captured and forwarded from www.vviokindustry.in to ${recipientEmail}
          </div>
        </div>
      </body>
      </html>
    `;

    let emailDelivered = false;
    let deliveryMethod = '';
    let deliveryErrorDetails = '';

    // Method 1: Check SMTP credentials (Gmail, cPanel, Hostinger, Zoho, Amazon SES, etc.)
    const smtpUser = (process.env.SMTP_USER || process.env.EMAIL_USER || process.env.GMAIL_USER || 'sales.vviok@gmail.com')?.trim();
    // In case Gmail app password has spaces like 'kbjq njfm zaet lkcv' or is formatted directly
    const rawPass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.GMAIL_PASS || process.env.GMAIL_APP_PASSWORD || 'kbjq njfm zaet lkcv';
    const smtpPass = rawPass ? rawPass.replace(/\s+/g, '').trim() : undefined;
    const smtpHost = (process.env.SMTP_HOST || 'smtp.gmail.com')?.trim();
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT.trim(), 10) : 465;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const smtpFrom = process.env.SMTP_FROM?.trim() || `"VVIOK Industry Leads" <${smtpUser}>`;

    if (smtpUser && smtpPass && smtpHost) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        const info = await transporter.sendMail({
          from: smtpFrom,
          to: recipientEmail,
          replyTo: `"${name}" <${email}>`,
          subject: emailSubject,
          html: htmlContent,
        });

        console.log('Lead sent via SMTP successfully:', info.messageId);
        emailDelivered = true;
        deliveryMethod = 'SMTP';
      } catch (smtpErr: any) {
        console.error('SMTP Delivery error:', smtpErr);
        deliveryErrorDetails += `SMTP error: ${smtpErr?.message || smtpErr}. `;
      }
    }

    // Method 2: Resend API (if SMTP was not configured or failed, and RESEND_API_KEY is available)
    if (!emailDelivered) {
      const resendApiKey = process.env.RESEND_API_KEY || 're_KWw5KbaL_8z68wvuHTR93LMyBExwU5iyh';
      if (resendApiKey) {
        try {
          const resend = new Resend(resendApiKey);
          const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM || 'VVIOK Website <onboarding@resend.dev>',
            to: [recipientEmail],
            replyTo: email,
            subject: emailSubject,
            html: htmlContent,
          });

          if (error) {
            console.error('Resend delivery error:', error);
            deliveryErrorDetails += `Resend error: ${error.message || JSON.stringify(error)}. `;
          } else {
            console.log('Lead sent via Resend successfully:', data);
            emailDelivered = true;
            deliveryMethod = 'Resend';
          }
        } catch (resendErr: any) {
          console.error('Resend catch error:', resendErr);
          deliveryErrorDetails += `Resend exception: ${resendErr?.message || resendErr}. `;
        }
      }
    }

    if (emailDelivered) {
      return { 
        success: true, 
        message: 'Thank you! Your inquiry has been sent directly to our sales department at sales.vviok@gmail.com. We will contact you shortly.',
        deliveryMethod
      };
    }

    // If neither method succeeded because credentials are not yet configured in environment
    console.warn('Lead could not be dispatched because SMTP/Email service is not configured or credentials failed.', deliveryErrorDetails);
    
    // If credentials are not set, inform the user clearly
    if (!smtpUser && !smtpPass && !process.env.RESEND_API_KEY) {
      return {
        success: true,
        warning: true,
        message: 'Inquiry received! To enable direct Gmail inbox delivery to sales.vviok@gmail.com, please configure your SMTP App Password in Settings.',
      };
    }

    return {
      success: false,
      message: `Unable to deliver email directly: ${deliveryErrorDetails || 'Please verify SMTP / Gmail App Password settings in environment variables.'}`,
    };
  } catch (err: any) {
    console.error('Server Action Error:', err);
    return { success: false, message: 'A system error occurred. Please try again later.' };
  }
}

export async function getSeoSuggestions(input: SEOInput) {
  try {
    const result = await analyzeAndSuggestSEO(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error getting SEO suggestions:', error);
    return { success: false, message: 'Failed to get SEO suggestions from AI.' };
  }
}

