'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mail, Phone, MapPin } from 'lucide-react';
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
      <div className="hidden border-b bg-muted/30 md:block">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <Logo className="w-48" />
          </Link>
          <div className="flex items-center space-x-8">
            <a 
              href="mailto:vviokindustry2021@gmail.com" 
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">E-mail Address</p>
                <p className="text-sm font-semibold">vviokindustry2021@gmail.com</p>
              </div>
            </a>
            <a 
              href="tel:+919106472588" 
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Contact Us</p>
                <p className="text-sm font-semibold">+91 91064 72588</p>
              </div>
            </a>
            <div className="h-10 w-px bg-border mx-2" />
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Make_In_India.png/400px-Make_In_India.png" 
                alt="Make in India" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header / Mobile Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Mobile Logo Visibility */}
          <div className="mr-4 flex md:hidden">
            <Link href="/" className="flex items-center">
              <Logo className="w-36" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-0">
                <div className="border-b p-6">
                  <Logo className="w-40" />
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-bold uppercase tracking-wider transition-colors hover:text-primary',
                          pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="border-t bg-muted/20 p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">+91 91064 72588</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold truncate">vviokindustry2021@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">45- puskar cottage, Ahmedabad- 382415</span>
                  </div>
                  <div className="mt-4 flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Make_In_India.png/400px-Make_In_India.png" 
                      alt="Make in India" 
                      className="h-16 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
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
