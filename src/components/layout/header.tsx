'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mail, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
                    'flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary outline-none focus:ring-0 px-4 h-16 data-[state=open]:bg-slate-100',
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-muted-foreground'
                  )}>
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    sideOffset={0}
                    className="w-[300px] p-0 shadow-2xl border-t-[3px] border-[#c41e3a] rounded-none overflow-visible"
                  >
                    <div className="flex flex-col py-2 bg-white">
                      {link.categories.map((cat) => (
                        <DropdownMenuSub key={cat.slug}>
                          <DropdownMenuSubTrigger 
                            className="flex items-center justify-between py-3 px-6 hover:bg-transparent data-[state=open]:text-[#c41e3a] text-slate-600 font-semibold text-base cursor-pointer group outline-none"
                          >
                            <span>{cat.name}</span>
                            <ChevronRight className="h-4 w-4 text-slate-300 group-data-[state=open]:text-[#c41e3a]" />
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent 
                              sideOffset={0}
                              className="w-[320px] p-0 border-none shadow-none bg-[#f4f4f4] rounded-none min-h-full py-4 px-6"
                            >
                              <div className="flex flex-col space-y-3">
                                {cat.subcategories?.map((sub) => (
                                  <DropdownMenuItem key={sub.slug} asChild className="p-0 focus:bg-transparent">
                                    <Link 
                                      href={`/products/${cat.slug}/${sub.slug}`} 
                                      className="text-[#1a2b3c] hover:text-[#c41e3a] font-medium text-sm transition-colors cursor-pointer flex items-start gap-1"
                                    >
                                      <span className="shrink-0">–</span>
                                      <span>{sub.name}</span>
                                    </Link>
                                  </DropdownMenuItem>
                                ))}
                              </div>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary h-16 flex items-center px-4',
                    pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex flex-1 items-center justify-end gap-4">
            <Button asChild className="hidden md:flex bg-[#c41e3a] hover:bg-[#a01830] text-white rounded-full font-bold uppercase tracking-wide px-8 h-12">
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
                                            <Link href={`/products/${cat.slug}`} onClick={() => setMobileMenuOpen(false)} className="flex flex-col text-left">
                                              <span>{cat.name}</span>
                                            </Link>
                                          </AccordionTrigger>
                                          <AccordionContent className="flex flex-col space-y-2 pt-2 pl-4 pb-0 border-l-2 border-slate-100 ml-1">
                                            {cat.subcategories.map(sub => (
                                              <Link
                                                key={sub.slug}
                                                href={`/products/${cat.slug}/${sub.slug}`}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="text-sm font-semibold text-muted-foreground hover:text-primary"
                                              >
                                                – {sub.name}
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
                  <Button asChild className="w-full bg-[#c41e3a] font-bold">
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
