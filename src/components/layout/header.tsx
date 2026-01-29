'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';
import Image from 'next/image';

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
      <div className="hidden bg-card md:block border-b">
        <div className="container flex items-center justify-between py-2">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-48" />
          </Link>
          <div className="flex items-center space-x-4">
            <a href="mailto:vviokindustry2021@gmail.com" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm text-foreground">E-mail Address</p>
                <p className="text-xs">vviokindustry2021@gmail.com</p>
              </div>
            </a>
            <div className="h-10 w-px bg-border" />
            <a href="tel:+919106472588" className="flex items-center gap-3 text-muted-foreground transition hover:text-primary">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-sm text-foreground">Contact Us</p>
                <p className="text-xs">+91 91064 72588</p>
              </div>
            </a>
            <div className="h-10 w-px bg-border" />
            <div className="w-[120px]">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Make_in_India_Logo.svg/320px-Make_in_India_Logo.svg.png" alt="Make in India" width={100} height={40} className="object-contain w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex md:hidden">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo className="w-40" />
            </Link>
          </div>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end space-x-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Logo className="w-32" />
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'text-lg transition-colors hover:text-primary',
                          pathname === link.href
                            ? 'text-primary font-semibold'
                            : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
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
