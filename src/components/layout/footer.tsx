import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';
import { navLinks, contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-primary-foreground" />
            <p className="text-sm">Cuidado urológico de excelencia con un enfoque humano.</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href="#"><Facebook className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href="#"><Instagram className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href="#"><Twitter className="h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <address className="not-italic space-y-2 text-sm">
                <p className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-1 shrink-0"/>
                    <span>{contactInfo.address}</span>
                </p>
                <p>
                    <Link href={`tel:${contactInfo.phone}`} className="hover:underline flex items-center gap-2">
                    <Phone className="h-4 w-4"/> Tel: {contactInfo.phone}
                    </Link>
                </p>
                <p>
                    <Link href={`mailto:${contactInfo.email}`} className="hover:underline flex items-center gap-2">
                    <Mail className="h-4 w-4"/> {contactInfo.email}
                    </Link>
                </p>
            </address>
          </div>
           <div>
            <h4 className="font-semibold mb-4">Urgencias</h4>
             <p className="text-sm">
                <Link href={`tel:${contactInfo.phone}`} className="hover:underline flex items-center gap-2">
                  <Phone className="h-4 w-4"/> {contactInfo.phone}
                </Link>
              </p>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Urolog. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
