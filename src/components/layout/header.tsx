'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail, Phone } from 'lucide-react';
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
            <div className="w-[120px] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAA/Pz/8/Pz5+fn09PSfn5+np6fIyMjx8fGTk5N6enq3t7cWFhbf39+EhISioqKpqamwsLCgoKCMjIyOjo44ODhVVVXBwcEpKSk+Pj5BQUFEREQUFBQyMjJcXFwuLi4sLCxISEgYGBhubm5dXV1ISEgLCwtubm6AgIBmZmaZmZkAAAC23oYSAAACXklEQVR4nO3d63KqQBCFYRSChhQQp0xERERNKW3//4+a6gqBC7hDE+zMvWc+A0/Yw8pCTwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgXw3hB3nS+5zIu0s70/sY9p1bL7qA254vG6FvJ17bxf2zhX7H/S+E/e+F99/Hj+1n2H7zPZ33/f3D+x12fR/2/T7u+32k/Q77v/e5T/wKyzx/w+p9fP/H7t/h+78P+/4P+z7fX8v7/o93uU943/e5v3z/p/jY/U/1s/s/6/s9hP0Hfa//8v0f+wn/xR/7xT/zWf9f3ef/8v2f4bP9n+Rj+78p7/d/iv3D/+aP/t//wf+xP/KP/mP/oP/1//a/+c/8d/6n/5L/xH/if/Kf+k/9h/6j/1L/pv/E/8j/6n/t//G/8//xv/d/+f/7//wH//v9p//8//W//1/+p/8L/4X/wn/hf/F/+v/w//P/5D/1X/r/8p/7z/zX/h/9R/5f/pv/g/+X/7f/7P/p/5f/h/8/xT/yn/t/y//5H/2/hP/s/xn//t/f/P9v+Rj+3+J9/s/yv7h+/N73Odx3++p/y/f/yH//R3uUx7wff/H7v9v+f4Pez6+P+e9/u+/y/c9hP0HfZ/vb/H9H4b7fV/r/R72H3u313/x/d/hff/H93+Hff+X33/f7xMe9v1e/q/9/x+ef/+nP/s/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+V38B4tM4w5Q0wz0AAAAASUVORK5CYII=" alt="Make in India" className="object-contain h-10" />
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
