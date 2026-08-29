
import Link from 'next/link';
import { Logo, WhatsappIcon } from '@/components/icons';
import { Mail, MapPin, Phone, Twitter, Facebook, Linkedin, Instagram, ArrowRight, Settings } from 'lucide-react';

const companyLinks = [
  { href: '/manufacturing-quality', label: 'Quality Standards' },
  { href: '/industries', label: 'Industries Served' },
  { href: '/products', label: 'Product Catalog' },
  { href: '/export', label: 'Export Global' },
  { href: '/about', label: 'About VVIOK' },
];

const categoryLinks = [
  { href: '/products/filter-housing-manufacturer', label: 'Filter Housing' },
  { href: '/products/filter-cartridge-manufacturer', label: 'Filter Cartridge' },
  { href: '/products/industrial-vessels-manufacturer', label: 'Industrial Vessels' },
  { href: '/products/industrial-strainer-filters', label: 'Industrial Strainer' },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="bg-white p-3 rounded-md inline-block">
              <Logo className="w-56" />
            </div>
            <p className="text-base leading-relaxed text-slate-400 font-medium">
              VVIOK Industry is a premier global hub for high-precision industrial filtration and SS equipment, delivering engineering excellence for critical manufacturing sectors.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/p/VVIOK-Industry" className="h-11 w-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/vviok.industry" className="h-11 w-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Instagram className="h-5 w-5" /></a>
              <a href="https://x.com/VviokIndustry" className="h-11 w-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/vviok-industry" className="h-11 w-11 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Navigation Column Shuffled */}
          <div>
            <h3 className="text-white font-headline font-bold uppercase tracking-[0.2em] text-xs mb-8 border-l-4 border-primary pl-4">
              Resources
            </h3>
            <ul className="space-y-5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center text-sm font-bold hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column Shuffled */}
          <div>
            <h3 className="text-white font-headline font-bold uppercase tracking-[0.2em] text-xs mb-8 border-l-4 border-primary pl-4">
              Solutions
            </h3>
            <ul className="space-y-5">
              {categoryLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center text-sm font-bold hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 mr-2 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-headline font-bold uppercase tracking-[0.2em] text-xs mb-8 border-l-4 border-primary pl-4">
              Global Support
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-sm font-medium">45, Pushkar Cottage, Near Ramol Toll Plaza, Ahmedabad - 382415, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:sales.vviok@gmail.com" className="text-sm font-bold hover:text-white">sales.vviok@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919106472588" className="text-sm font-black hover:text-white">+91 91064 72588</a>
              </li>
              <li className="flex items-center gap-4">
                <WhatsappIcon className="h-5 w-5 text-primary shrink-0 fill-current" />
                <a href="https://wa.me/919106472588" className="text-sm font-black hover:text-white">WhatsApp 24/7</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits with dofollow link */}
        <div className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} VVIOK Industry. Engineering Purity.</p>
            <p>SEO & Strategy by <a href="https://www.vibratseo.in/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors font-black">Vibrat SEO</a></p>
          </div>
          <div className="flex gap-10">
            <Link href="/admin/media" className="hover:text-white transition-colors flex items-center gap-2"><Settings className="h-3 w-3" /> System Admin</Link>
            <Link href="#" className="hover:text-white transition-colors">Compliance Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
