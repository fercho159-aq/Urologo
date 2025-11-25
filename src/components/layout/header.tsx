
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
      <div className="container flex h-20 items-center px-4 justify-between">
        <div className="flex-1 md:flex-none">
            <Link href="/" className="flex items-center md:justify-start justify-center">
                <Logo />
            </Link>
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

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
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
      </div>
    </header>
    </>
  );
}
