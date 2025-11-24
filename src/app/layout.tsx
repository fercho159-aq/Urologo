import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: {
    default: 'Urolog - Especialistas en Cirugía de Próstata en CDMX',
    template: '%s | Urolog - Cirugía de Próstata',
  },
  description:
    'Clínica líder en México especializada en cirugía de próstata. Ofrecemos tratamientos avanzados, diagnósticos precisos y cuidado postoperatorio. Agende su cita con nuestros urólogos expertos.',
  keywords: ['cirugía próstata México', 'clínica próstata', 'urología próstata CDMX', 'tratamiento próstata', 'urólogo cdmx'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  );
}
