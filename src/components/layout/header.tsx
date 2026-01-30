'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mail, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import { productCategories } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  {
    label: 'Products',
    href: '/products',
    categories: productCategories,
  },
  { href: '/industries', label: 'Industries' },
  { href: '/manufacturing-quality', label: 'Quality' },
  { href: '/export', label: 'Export' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="hidden border-b bg-muted/30 md:block">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center">
              <Logo className="w-48" />
            </Link>
          </div>
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
              link.categories ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className={cn(
                    'flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary outline-none',
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
                  )}>
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[350px] p-0 overflow-hidden shadow-2xl border-slate-200">
                    <div className="bg-slate-50 px-4 py-3 border-b">
                      <h3 className="font-bold text-slate-900 text-base uppercase tracking-tight">Our Products</h3>
                    </div>
                    <ScrollArea className="h-[500px]">
                      <div className="flex flex-col">
                        {link.categories.map((cat) => (
                          cat.subcategories ? (
                            <DropdownMenuSub key={cat.slug}>
                              <DropdownMenuSubTrigger className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer outline-none data-[state=open]:bg-slate-50 group">
                                <div className="flex flex-col text-left">
                                  <span className="font-bold text-slate-900 text-[15px] group-hover:text-primary transition-colors">{cat.name}</span>
                                  <span className="text-xs text-muted-foreground mt-0.5">{cat.subcategories.length} {cat.subcategories.length === 1 ? 'product' : 'products'} available</span>
                                </div>
                                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary transition-colors" />
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent className="w-72 max-h-[70vh] overflow-y-auto">
                                  {cat.subcategories.map((sub) => (
                                    <DropdownMenuItem key={sub.slug} asChild>
                                      <Link href={`/products/${cat.slug}/${sub.slug}`} className="w-full cursor-pointer py-2.5 px-3">
                                        {sub.name}
                                      </Link>
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                          ) : (
                            <DropdownMenuItem key={cat.slug} asChild className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer outline-none group">
                              <Link href={`/products/${cat.slug}`} className="w-full">
                                <div className="flex flex-col text-left">
                                  <span className="font-bold text-slate-900 text-[15px] group-hover:text-primary transition-colors">{cat.name}</span>
                                  <span className="text-xs text-muted-foreground mt-0.5">1 product available</span>
                                </div>
                              </Link>
                            </DropdownMenuItem>
                          )
                        ))}
                      </div>
                    </ScrollArea>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
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
              )
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 rounded-full font-bold uppercase tracking-wide px-6">
              <Link href="/contact">Get a Quote</Link>
            </Button>

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
                      link.categories ? (
                        <Accordion type="single" collapsible key={link.label} className="w-full">
                          <AccordionItem value="products" className="border-none">
                            <AccordionTrigger className={cn(
                              'py-0 text-lg font-bold uppercase tracking-wider transition-colors hover:no-underline hover:text-primary',
                              pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
                            )}>
                              {link.label}
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col space-y-4 pt-4 pb-0">
                              {link.categories.map((cat) => (
                                <div key={cat.slug} className="flex flex-col space-y-2">
                                  {cat.subcategories ? (
                                     <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value={cat.slug} className="border-none">
                                          <AccordionTrigger className="py-0 text-base font-bold text-foreground hover:no-underline">
                                            <div className="flex flex-col text-left">
                                              <span>{cat.name}</span>
                                              <span className="text-[10px] text-muted-foreground lowercase mt-0.5">{cat.subcategories.length} products available</span>
                                            </div>
                                          </AccordionTrigger>
                                          <AccordionContent className="flex flex-col space-y-2 pt-2 pl-4 pb-0 border-l-2 border-slate-100 ml-1">
                                            {cat.subcategories.map(sub => (
                                              <Link
                                                key={sub.slug}
                                                href={`/products/${cat.slug}/${sub.slug}`}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="text-sm font-semibold text-muted-foreground hover:text-primary"
                                              >
                                                {sub.name}
                                              </Link>
                                            ))}
                                          </AccordionContent>
                                        </AccordionItem>
                                     </Accordion>
                                  ) : (
                                    <Link
                                      href={`/products/${cat.slug}`}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="text-base font-bold text-foreground hover:text-primary"
                                    >
                                      {cat.name}
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : (
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
                      )
                    ))}
                  </nav>
                </div>
                <div className="border-t bg-muted/20 p-6 space-y-4">
                  <Button asChild className="w-full bg-primary font-bold">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">+91 91064 72588</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold truncate">vviokindustry2021@gmail.com</span>
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
