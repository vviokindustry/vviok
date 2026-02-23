import Link from 'next/link';
import { Logo, WhatsappIcon } from '@/components/icons';
import { Mail, MapPin, Phone, Twitter, Facebook, Linkedin, Instagram, ArrowRight, Settings } from 'lucide-react';

const companyLinks = [
  { href: '/about', label: 'About VVIOK' },
  { href: '/products', label: 'Product Catalog' },
  { href: '/industries', label: 'Industries Served' },
  { href: '/manufacturing-quality', label: 'Quality Standards' },
  { href: '/export', label: 'Export Global' },
];

const resourceLinks = [
  { href: '/contact', label: 'Get a Quote' },
  { href: '/admin/media', label: 'Media Manager' },
  { href: '/contact', label: 'Contact Us' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded-sm inline-block">
              <Logo className="w-52" />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-slate-200">
              VVIOK Industry is a global leader in high-precision industrial filtration and storage solutions, committed to engineering excellence and reliable performance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#ffc107] hover:text-slate-950 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#ffc107] hover:text-slate-950 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#ffc107] hover:text-slate-950 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#ffc107] hover:text-slate-950 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-headline font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-[#ffc107] pl-3">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-sm hover:text-white transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2 text-[#ffc107] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Support Column */}
          <div>
            <h3 className="text-white font-headline font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-[#ffc107] pl-3">
              Resources
            </h3>
            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center text-sm hover:text-white transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2 text-[#ffc107] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-headline font-bold uppercase tracking-widest text-sm mb-6 border-l-4 border-[#ffc107] pl-3">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 h-8 w-8 rounded bg-slate-900 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-[#ffc107]" />
                </div>
                <span className="text-sm">
                  45, Pushkar Cottage, Near Ramol Toll Plaza, Ahmedabad - 382415, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-8 w-8 rounded bg-slate-900 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-[#ffc107]" />
                </div>
                <a href="mailto:vviokindustry2021@gmail.com" className="text-sm hover:text-white transition-colors">
                  vviokindustry2021@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-8 w-8 rounded bg-slate-900 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-[#ffc107]" />
                </div>
                <a href="tel:+919106472588" className="text-sm hover:text-white transition-colors font-bold">
                  +91 91064 72588
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-8 w-8 rounded bg-slate-900 flex items-center justify-center shrink-0">
                  <WhatsappIcon className="h-4 w-4 text-[#ffc107] fill-current" />
                </div>
                <a href="https://wa.me/919106472588" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors font-bold">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
          <p>&copy; {new Date().getFullYear()} VVIOK Industry. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/admin/media" className="hover:text-white transition-colors flex items-center gap-1">
              <Settings className="h-3 w-3" /> Admin
            </Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}