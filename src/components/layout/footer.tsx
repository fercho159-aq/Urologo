import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/icons/logo';
import { navLinks, contactInfo } from '@/lib/data';

const TiktokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.6-2.8-1.39-1.46-2.2-3.43-2.4-5.56-.02-.16-.01-.32.01-.48.02-3.55.02-7.1.01-10.65.01-1.28.31-2.54.88-3.7.81-1.64 2.28-2.91 4.08-3.48 1.02-.33 2.12-.52 3.22-.59.08-.01.16-.02.24-.03.01 1.57.01 3.14.01 4.71.01 1.63-.44 3.25-1.44 4.43-1.02 1.2-2.52 1.86-4.14 1.92-.02.01-.03.01-.05.01-.39.01-.78.02-1.17.03-.02-1.57-.01-3.14.01-4.71.02-1.61.44-3.21 1.42-4.41 1-1.22 2.49-1.89 4.1-1.95.02-.01.03-.01.05-.01z" />
    </svg>
)

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="space-y-4">
            <Logo className="text-primary-foreground" />
            <p className="text-sm">Cuidado urológico de excelencia con un enfoque humano.</p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href="https://www.facebook.com/centrourologicodealtaespecialidad" target="_blank" rel="noopener noreferrer"><Facebook className="h-5 w-5" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href="https://www.instagram.com/centrourologico?igsh=MXIweDFtOTRrcXAzeg==" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></Link>
              </Button>
               <Button variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href="http://tiktok.com/@centrourologico" target="_blank" rel="noopener noreferrer"><TiktokIcon /></Link>
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
            <h4 className="font-semibold mb-4">Urgencias 24h</h4>
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
