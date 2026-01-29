import Link from 'next/link';
import { Logo, WhatsappIcon } from '@/components/icons';
import { Mail, MapPin, Phone, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="w-48" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Leading manufacturer and exporter of high-quality industrial filtration products.
            </p>
          </div>

          <div>
            <p className="font-headline font-semibold text-foreground">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground transition hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
               <li>
                <Link href="/contact" className="text-muted-foreground transition hover:text-primary">
                    Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-headline font-semibold text-foreground">Contact Us</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Plot 123, Industrial Area, Ahmedabad, Gujarat, India - 380001
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:sales@vviokindustry.com" className="text-muted-foreground transition hover:text-primary">
                    sales@vviokindustry.com
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-muted-foreground transition hover:text-primary">
                    +91 987 654 3210
                  </a>
                </div>
              </li>
              <li>
                 <div className="flex items-center gap-3">
                  <WhatsappIcon className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition hover:text-primary">
                    +91 987 654 3210
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-headline font-semibold text-foreground">Follow Us</p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-muted-foreground transition hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Facebook" className="text-muted-foreground transition hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground transition hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VVIOK Industry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
