'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="hidden bg-card md:block border-b">
        <div className="container flex items-center justify-between py-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-48" />
          </Link>
          <div className="flex items-center space-x-4">
            <a href="mailto:vviokindustry2021@gmail.com" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm text-foreground uppercase tracking-wider">E-mail Address</p>
                <p className="text-xs">vviokindustry2021@gmail.com</p>
              </div>
            </a>
            <div className="h-10 w-px bg-border mx-2" />
            <a href="tel:+919106472588" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm text-foreground uppercase tracking-wider">Contact Us</p>
                <p className="text-xs">+91 91064 72588</p>
              </div>
            </a>
            <div className="h-10 w-px bg-border mx-2" />
            <div className="flex items-center justify-center h-14 w-[140px]">
              {/* Using standard img tag with no-referrer for maximum compatibility */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Make_In_India.png/640px-Make_In_India.png" 
                alt="Make in India" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Logo for mobile only (shown when top bar is hidden) */}
          <div className="mr-4 flex md:hidden">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo className="w-40" />
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden items-center space-x-8 text-sm font-bold md:flex uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary tracking-wide',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2">
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 flex flex-col">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Logo className="w-36" />
                </Link>
                <div className="my-10 flex-1 px-6">
                  <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'text-xl font-bold uppercase transition-colors hover:text-primary',
                          pathname === link.href
                            ? 'text-primary'
                            : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Mobile Branding at bottom */}
                <div className="p-8 border-t mt-auto bg-muted/20">
                   <div className="flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">+91 91064 72588</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium truncate">vviokindustry2021@gmail.com</span>
                      </div>
                      <div className="mt-6 flex justify-center">
                         {/* eslint-disable-next-line @next/next/no-img-element */}
                         <img 
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Make_In_India.png/640px-Make_In_India.png" 
                            alt="Make in India" 
                            className="h-16 w-auto object-contain"
                            referrerPolicy="no-referrer"
                          />
                      </div>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
