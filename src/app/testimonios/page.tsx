import Image from 'next/image';
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Testimonios de Pacientes',
  description: 'Lea las historias y experiencias de pacientes que confiaron en nuestra clínica para su cirugía de próstata en CDMX.',
  keywords: ['testimonios urología', 'opiniones cirugía próstata', 'pacientes satisfechos', 'clínica próstata cdmx'],
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Historias que Inspiran Confianza</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            La satisfacción y el bienestar de nuestros pacientes son el verdadero reflejo de nuestro compromiso.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const patientImage = PlaceHolderImages.find(p => p.id === testimonial.image);
              return (
                <Card key={index} className="flex flex-col text-center items-center">
                  <CardHeader>
                    {patientImage && (
                      <Image
                        src={patientImage.imageUrl}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="rounded-full mx-auto"
                        data-ai-hint={patientImage.imageHint}
                      />
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardFooter className="flex-col">
                    <p className="font-bold text-lg font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
