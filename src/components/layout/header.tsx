
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, contactInfo } from '@/lib/data';
import Logo from '@/components/icons/logo';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="bg-background text-primary py-2 text-sm">
        <div className="container flex justify-between items-center px-4">
            <span>URGENCIAS 24hrs</span>
            <span>Tel. {contactInfo.phone}</span>
        </div>
    </div>
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6">
            <Logo />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
           {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="p-4">
                <Link href="/" className="mb-8 block" onClick={() => setMobileMenuOpen(false)}>
                    <Logo />
                </Link>
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-foreground/80'
                        )}
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                </div>
            </SheetContent>
            </Sheet>

            <div className="w-full flex-1 md:w-auto md:flex-none">
                <div className="flex justify-center md:hidden">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
            </div>
        
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors hover:text-primary',
                  pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}
