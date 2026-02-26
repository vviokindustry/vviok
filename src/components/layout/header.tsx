'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, Mail, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo, BrandIcon } from '@/components/icons';
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
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderNav = () => (
    <nav className="hidden items-center lg:flex">
      {navLinks.map((link) => (
        link.categories ? (
          <div 
            key={link.label}
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <DropdownMenu open={isProductsOpen} onOpenChange={setIsProductsOpen}>
              <DropdownMenuTrigger asChild>
                <button 
                  className={cn(
                    'font-headline flex items-center gap-1 text-[13px] font-extrabold uppercase tracking-widest transition-colors hover:text-primary outline-none focus:ring-0 px-4 h-20',
                    pathname.startsWith(link.href) ? 'text-primary' : 'text-slate-800'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsProductsOpen(!isProductsOpen);
                  }}
                >
                  {link.label} <ChevronDown className={cn("h-4 w-4 transition-transform", isProductsOpen && "rotate-180")} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="start" 
                sideOffset={0}
                className="w-[300px] p-0 shadow-2xl border-t-[3px] border-primary rounded-none animate-in fade-in zoom-in-95 duration-200"
                onMouseEnter={() => setIsProductsOpen(true)}
              >
                <div className="flex flex-col py-3 bg-white">
                  {link.categories.map((cat) => (
                    <DropdownMenuSub key={cat.slug}>
                      <DropdownMenuSubTrigger 
                        className="flex items-center justify-between py-4 px-6 hover:bg-slate-50 data-[state=open]:text-primary text-slate-700 font-black text-[12px] cursor-pointer group outline-none uppercase tracking-widest border-b border-slate-50 last:border-0"
                        onClick={() => {
                          router.push(`/products/${cat.slug}`);
                          setIsProductsOpen(false);
                        }}
                      >
                        <span className="font-headline">{cat.name}</span>
                        <ChevronRight className="h-4 w-4 text-slate-300 group-data-[state=open]:text-primary transition-transform group-hover:translate-x-1" />
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent 
                          sideOffset={2}
                          className="w-[350px] p-0 border-none shadow-2xl bg-white rounded-none min-h-full py-6 px-8 border-l-2 border-primary/10 animate-in slide-in-from-left-2 duration-200"
                        >
                          <div className="flex flex-col space-y-4">
                            {cat.subcategories?.map((sub) => (
                              <DropdownMenuItem key={sub.slug} asChild className="p-0 focus:bg-transparent">
                                <Link 
                                  href={`/products/${cat.slug}/${sub.slug}`} 
                                  className="font-headline text-slate-600 hover:text-primary font-bold text-[12px] transition-all cursor-pointer flex items-center gap-3 group"
                                  onClick={() => setIsProductsOpen(false)}
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></span>
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
          </div>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'font-headline text-[13px] font-extrabold uppercase tracking-widest transition-colors hover:text-primary h-20 flex items-center px-4 relative group',
              pathname === link.href ? 'text-primary' : 'text-slate-800'
            )}
          >
            {link.label}
            <span className={cn(
              "absolute bottom-0 left-4 right-4 h-[3px] bg-primary transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
              pathname === link.href && "scale-x-100"
            )}></span>
          </Link>
        )
      ))}
    </nav>
  );

  return (
    <div className="w-full">
      {/* Top Contact Bar - More compact and readable */}
      <div className="bg-[#a5be1d] text-white py-2 text-sm md:text-base font-bold hidden md:block">
        <div className="container flex justify-between items-center px-4 mx-auto">
          <div className="flex gap-12">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-400" /> Office: <a href="tel:+919106472588" className="hover:text-yellow-400 font-bold transition-colors">+91 91064 72588</a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-400" /> Email: <a href="mailto:vviokindustry2021@gmail.com" className="hover:text-yellow-400 font-bold transition-colors">vviokindustry2021@gmail.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between px-4 mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo className="w-64 md:w-72" />
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            {mounted ? renderNav() : <div className="hidden lg:flex items-center space-x-8 px-4 h-20 text-[13px] font-bold text-slate-400">Loading...</div>}
          </div>

          <div className="flex items-center gap-4">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col p-0 w-80">
                <div className="border-b p-6 flex justify-between items-center">
                  <Logo className="w-52" />
                </div>
                <div className="flex-1 overflow-y-auto p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {navLinks.map((link) => (
                      link.categories ? (
                        <AccordionItem key={link.label} value={link.label} className="border-none">
                          <AccordionTrigger className="font-headline text-sm font-bold uppercase tracking-wider py-4 hover:no-underline">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="flex flex-col space-y-4 pl-4 border-l ml-2">
                              {link.categories.map((cat) => (
                                <div key={cat.slug} className="space-y-2">
                                  <Link 
                                    href={`/products/${cat.slug}`}
                                    className="font-headline text-sm font-bold text-primary block uppercase"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {cat.name}
                                  </Link>
                                  <div className="flex flex-col space-y-2 pl-4">
                                    {cat.subcategories?.map((sub) => (
                                      <Link 
                                        key={sub.slug} 
                                        href={`/products/${cat.slug}/${sub.slug}`}
                                        className="font-headline text-sm text-slate-600 hover:text-primary transition-colors"
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
                            className="font-headline text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors"
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}