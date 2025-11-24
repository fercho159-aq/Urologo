import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Servicios de Urología y Cirugía de Próstata',
  description: 'Conozca nuestros servicios especializados, incluyendo RTUP, prostatectomía radical, terapia láser GreenLight y consultas urológicas en CDMX.',
  keywords: ['servicios urología', 'RTUP México', 'prostatectomía radical cdmx', 'terapia greenlight', 'cirugía próstata méxico'],
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Nuestros Servicios Urológicos</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Ofrecemos un espectro completo de tratamientos para la salud prostática y urológica, utilizando tecnología de punta y un enfoque centrado en el paciente.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const serviceImage = service.image ? PlaceHolderImages.find(p => p.id === service.image) : null;
              const isReversed = index % 2 !== 0;

              return (
                <div key={service.title} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}>
                  <div className={` ${isReversed ? 'md:order-2' : ''}`}>
                    {serviceImage && (
                        <Image
                          src={serviceImage.imageUrl}
                          alt={serviceImage.description}
                          width={600}
                          height={400}
                          className="rounded-lg shadow-lg object-cover w-full aspect-video"
                          data-ai-hint={serviceImage.imageHint}
                        />
                    )}
                  </div>
                  <div className={`${isReversed ? 'md:order-1' : ''}`}>
                    <h2 className="font-headline text-3xl font-semibold text-primary">{service.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{service.longDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
