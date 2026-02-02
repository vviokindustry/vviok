'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Mail, Phone, ChevronDown, ChevronRight, Search, ArrowRight, X } from 'lucide-react';
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
  { href: '/about', label: 'About Us' },
  {
    label: 'Products',
    href: '/products',
    categories: productCategories,
  },
  { href: '/industries', label: 'Services' },
  { href: '/manufacturing-quality', label: 'Quality' },
  { href: '/export', label: 'Export' },
  { href: '/contact', label: 'Contacts' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#4a2e82] text-white py-2 text-xs font-bold hidden md:block">
        <div className="container flex justify-between items-center px-4">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">Office: <a href="tel:+919106472588" className="hover:underline">+91 91064 72588</a></span>
            <span className="flex items-center gap-2">Factory: <a href="tel:+919106472588" className="hover:underline">+91 91064 72588</a></span>
          </div>
          <div className="flex items-center gap-4">
            <Search className="h-4 w-4 cursor-pointer hover:text-white/80" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Logo className="w-48" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              link.categories ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className={cn(
                    'flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-primary outline-none focus:ring-0 px-4 h-20 data-[state=open]:bg-slate-50',
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-slate-700'
                  )}>
                    {link.label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    align="start" 
                    sideOffset={0}
                    className="w-[280px] p-0 shadow-2xl border-t-[3px] border-primary rounded-none"
                  >
                    <div className="flex flex-col py-2 bg-white">
                      {link.categories.map((cat) => (
                        <DropdownMenuSub key={cat.slug}>
                          <DropdownMenuSubTrigger 
                            className="flex items-center justify-between py-3 px-6 hover:bg-slate-50 data-[state=open]:text-primary text-slate-700 font-bold text-[14px] cursor-pointer group outline-none uppercase tracking-wide"
                          >
                            <span>{cat.name}</span>
                            <ChevronRight className="h-4 w-4 text-slate-300 group-data-[state=open]:text-primary" />
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent 
                              sideOffset={0}
                              className="w-[340px] p-0 border-none shadow-none bg-slate-50 rounded-none min-h-full py-4 px-8 border-l"
                            >
                              <div className="flex flex-col space-y-4">
                                {cat.subcategories?.map((sub) => (
                                  <DropdownMenuItem key={sub.slug} asChild className="p-0 focus:bg-transparent">
                                    <Link 
                                      href={`/products/${cat.slug}/${sub.slug}`} 
                                      className="text-slate-800 hover:text-primary font-semibold text-[13px] transition-colors cursor-pointer flex items-start gap-1"
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
                    'text-[13px] font-bold uppercase tracking-wider transition-colors hover:text-primary h-20 flex items-center px-4',
                    pathname === link.href ? 'text-primary' : 'text-slate-700'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden lg:flex bg-primary hover:bg-primary/90 text-white rounded-full font-bold uppercase tracking-wide px-8 h-12">
              <Link href="/contact">Get a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-0 w-80">
                <div className="border-b p-6 flex justify-between items-center">
                  <Logo className="w-40" />
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link) => (
                      link.categories ? (
                        <AccordionItem key={link.label} value={link.label} className="border-none">
                          <AccordionTrigger className="text-sm font-bold uppercase tracking-wider py-4 hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="flex flex-col space-y-4 pl-4 border-l ml-2">
                              {link.categories.map((cat) => (
                                <div key={cat.slug} className="space-y-2">
                                  <Link 
                                    href={`/products/${cat.slug}`}
                                    className="text-sm font-bold text-primary block uppercase"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {cat.name}
                                  </Link>
                                  <div className="flex flex-col space-y-2 pl-4">
                                    {cat.subcategories?.map((sub) => (
                                      <Link 
                                        key={sub.slug} 
                                        href={`/products/${cat.slug}/${sub.slug}`}
                                        className="text-sm text-slate-600 hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        – {sub.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={link.href} className="py-4 border-b">
                          <Link
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </div>
                      )
                    ))}
                  </Accordion>
                </div>
                <div className="p-6 border-t bg-slate-50 space-y-4">
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:+919106472588">+91 91064 72588</a>
                  </div>
                  <Button asChild className="w-full bg-primary rounded-full uppercase font-bold tracking-wide">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
