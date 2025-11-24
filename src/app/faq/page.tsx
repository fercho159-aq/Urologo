import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes sobre Cirugía de Próstata',
  description: 'Encuentre respuestas a las preguntas más comunes sobre el tratamiento, recuperación y riesgos de la cirugía de próstata en nuestra clínica en México.',
  keywords: ['faq próstata', 'preguntas cirugía próstata', 'riesgos cirugía próstata', 'recuperación próstata'],
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Preguntas Frecuentes</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Resolvemos sus dudas más comunes sobre la salud prostática y nuestros procedimientos.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                <Card>
                  <AccordionTrigger className="text-lg font-semibold text-left p-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-muted-foreground">
                      <p>{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

// Need to create a Card component that can be used here. The default shadcn card has border and shadow, which might be too much for an accordion item. Let's wrap the accordion trigger and content inside a card.
// No, AccordionItem has border-b. I will use a custom Card-like style on the AccordionItem.
// The current setup with `Card` inside `AccordionItem` is actually a good visual approach. I will remove the bottom border from the accordion item to avoid double lines.
import { Card } from '@/components/ui/card';
