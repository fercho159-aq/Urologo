import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContactForm from '@/components/contact-form';
import Map from '@/components/map';
import { contactInfo } from '@/lib/data';


export const metadata: Metadata = {
  title: 'Contacto y Agendar Cita',
  description: 'Póngase en contacto con nuestros urólogos expertos en CDMX. Agende su consulta para cirugía de próstata en nuestra clínica. Encuentre nuestra ubicación y teléfono.',
  keywords: ['agendar cita urólogo', 'contacto clínica próstata', 'teléfono urólogo cdmx', 'ubicación clínica urología'],
};

export default function ContactPage() {

  return (
    <>
      <section className="relative py-20 md:py-32 bg-primary/10">
        
             <Image
                src="https://images.unsplash.com/photo-1633111158162-a4835dce7d0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjbGluaWMlMjByZWNlcHRpb258ZW58MHx8fHwxNzYzOTk5MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="A friendly receptionist at a clinic."
                fill
                className="object-cover"
                data-ai-hint="clinic reception"
            />
        
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container relative z-10 mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Póngase en Contacto</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Estamos aquí para ayudarle. Agende una cita o envíenos sus preguntas.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-headline text-3xl font-semibold text-primary">Agende su consulta</h2>
              <p className="mt-2 text-muted-foreground">
                Complete el siguiente formulario y nuestro equipo se pondrá en contacto con usted a la brevedad para coordinar su cita.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-8">
               <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary">Información de Contacto</h3>
                  <p className="mt-2 text-muted-foreground">También puede contactarnos directamente.</p>
                  <div className="mt-4 space-y-4">
                    {contactInfo.items.map(item => (
                        <div key={item.label} className="flex items-center gap-4">
                            <div className="bg-primary text-primary-foreground rounded-full p-3">
                                <item.icon className="h-5 w-5"/>
                            </div>
                            <div>
                                <h4 className="font-semibold">{item.label}</h4>
                                {item.href ? (
                                     <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                                        {item.value}
                                    </Link>
                                ) : (
                                    <p className="text-muted-foreground">{item.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                  </div>
               </div>
               <div>
                <h3 className="font-headline text-2xl font-semibold text-primary">Nuestra Ubicación</h3>
                 <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden border shadow-md">
                   <Map position={contactInfo.location} />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
