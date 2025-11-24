import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';
import { navLinks, contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">Cuidado urológico de excelencia con un enfoque humano.</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Facebook className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Twitter className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Servicios Populares</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground hover:text-primary">
                  Resección Transuretral (RTUP)
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground hover:text-primary">
                  Prostatectomía Radical
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground hover:text-primary">
                  Terapia Láser GreenLight
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <address className="not-italic space-y-2 text-sm text-muted-foreground">
              <p>{contactInfo.address}</p>
              <p>
                <Link href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                  Tel: {contactInfo.phone}
                </Link>
              </p>
              <p>
                <Link href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </Link>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cirugía de Próstata Clínica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
