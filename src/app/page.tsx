
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { testimonials, contactInfo } from '@/lib/data';
import { ArrowRight, CircleCheckBig, Hospital, Stethoscope, Users } from 'lucide-react';
import ContactForm from '@/components/contact-form';
import Map from '@/components/map';

export default function Home() {
 

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="inicio" className="relative h-auto lg:h-[80vh] w-full py-16 lg:py-0">
        
          <Image
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWRpY2FsJTIwdGVhbXxlbnwwfHx8fDE3NjM5MjYxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="An older man looking thoughtfully."
            fill
            className="object-cover"
            priority
            data-ai-hint="senior man"
          />
        
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 h-full grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left text-primary-foreground">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold">
              Tratamiento de Próstata Agrandada con Cirugía Endoscópica
            </h1>
            <div className="mt-6 bg-black/20 p-6 rounded-lg">
              <p className="font-headline text-2xl md:text-3xl font-bold">
                Cirugía Láser de próstata desde $39,900
              </p>
              <p className="mt-2 text-sm">
                Pago en efectivo, Tarjeta Débito y Transferencia Bancaria. Trabajamos con múltiples aseguradoras.
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/#costos">¿Qué incluye?</Link>
            </Button>
          </div>
          <div className="w-full max-w-md mx-auto bg-gray-200/90 p-6 rounded-lg">
            <div className="text-center text-primary mb-4">
              <h2 className="font-headline text-3xl font-bold">Tu bienestar es lo más importante.</h2>
              <h3 className="font-headline text-4xl font-bold text-accent">¡Atiéndete a tiempo!</h3>
            </div>
            <p className="text-center text-sm text-primary font-bold">Contacto Cirugía de Próstata</p>
            <p className="text-center text-xs text-muted-foreground mb-4">Déjanos tus datos y te contactamos lo antes posible</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Prostate Growth Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">
                Crecimiento de Próstata
              </h2>
              <h3 className="font-headline text-2xl md:text-3xl text-primary/80">¿Qué sucede?</h3>
              <p className="mt-4 text-muted-foreground">
                La próstata es una glándula del tamaño de una nuez que forma parte del sistema reproductor masculino. Con la edad, es común que la próstata crezca, una condición conocida como hiperplasia prostática benigna (HPB). Este crecimiento puede presionar la uretra y causar problemas para orinar.
              </p>
            </div>
            <div className="max-w-md mx-auto">
              
                 <Image
                    src="https://images.unsplash.com/photo-1616432525043-c013741c33c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9zdGF0ZSUyMGdyb3d0aCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3NjQwMDExMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Medical illustration of prostate growth (benign prostatic hyperplasia)."
                    width={500}
                    height={400}
                    className="object-contain"
                    data-ai-hint="prostate illustration"
                />
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Symptoms Section */}
      <section id="sintomas" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md mx-auto order-1 md:order-1">
              
                 <Image
                    src="https://images.unsplash.com/photo-1758687127128-9535de50a3e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxtYW4lMjBkaXNjb21mb3J0fGVufDB8fHx8MTc2NDAwMTEzOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="A man holding his lower abdomen in discomfort."
                    width={400}
                    height={500}
                    className="rounded-lg shadow-lg object-cover"
                    data-ai-hint="man discomfort"
                />
              
            </div>
            <div className="order-2 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">
                Síntomas
              </h2>
              <p className="mt-4 text-primary">
                Los síntomas clásicos incluyen:
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                  <li>Necesidad de orinar con frecuencia, especialmente por la noche.</li>
                  <li>Dificultad para comenzar a orinar.</li>
                  <li>Flujo de orina débil o interrumpido.</li>
                  <li>Goteo después de orinar.</li>
                  <li>Sensación de que la vejiga no se ha vaciado por completo.</li>
              </ul>
              <Button asChild variant="link" className="mt-6 p-0 text-primary">
                <Link href="/contacto">¿Tienes estos síntomas? Agenda una cita <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

       {/* Complications Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-2">
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">
                Complicaciones
              </h2>
              <p className="mt-4 text-primary">
                Algunas de las complicaciones del crecimiento prostático son:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="border-b pb-2 text-muted-foreground">Infecciones urinarias a repetición</li>
                <li className="border-b pb-2 text-muted-foreground">Cálculos en la vejiga</li>
                <li className="border-b pb-2 text-muted-foreground">Incontinencia urinaria</li>
                <li className="border-b pb-2 text-muted-foreground">Daño a los riñones</li>
                <li className="border-b pb-2 text-muted-foreground">Retención urinaria aguda</li>
              </ul>
            </div>
            <div className="max-w-md mx-auto order-1 md:order-1">
              
                 <Image
                    src="https://images.unsplash.com/photo-1620939068789-fc0c88ddb71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxiYWNrJTIwcGFpbnxlbnwwfHx8fDE3NjQwMDExMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="A person with back pain, sitting on a sofa."
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    data-ai-hint="back pain"
                />
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-headline font-semibold">¡Si hay solución!</h2>
            <p className="mt-2 max-w-2xl mx-auto">El crecimiento de próstata y sus síntomas tienen tratamiento. Atiéndete a tiempo y recupera tu calidad de vida. La cirugía de próstata es una opción segura y eficaz.</p>
             <Button asChild size="lg" className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contacto">Contáctanos ahora</Link>
            </Button>
        </div>
      </section>

      {/* Urologists Section */}
      <section id="urologos" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
           <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">Urólogos</h2>
           <p className="mt-2 text-muted-foreground">Especialistas en Cirugía de mínima invasión para Rejuvenecimiento</p>

           <div className="mt-12 grid md:grid-cols-2 gap-16 items-center text-left">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <Image src="/images/c3.png" alt="Portrait of Dr. Cristan Basques." width={200} height={300} className="rounded-lg shadow-md object-cover" data-ai-hint="doctor presentation" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold text-primary">Dr. Cristan Basques</h3>
                         <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                            <li>Cirujano Urólogo formado por la Universidad Nacional Autónoma de México (UNAM).</li>
                            <li>Certificación vigente del Consejo Mexicano de Urología.</li>
                            <li>Miembro de la Sociedad Americana de Urología (AUA).</li>
                            <li>Maestro en Ciencias de la Salud por el Instituto Politécnico Nacional (IPN).</li>
                            <li>Jefe del Servicio de Urología del CMI.</li>
                        </ul>
                        <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Link href="/contacto">Agendar Cita</Link>
                        </Button>
                    </div>
                </div>

                 <div className="flex flex-col sm:flex-row items-center gap-8">
                     <Image src="/images/c2.png" alt="Portrait of Dr. Fernando Abraham Muñoz" width={200} height={300} className="rounded-lg shadow-md object-cover" data-ai-hint="doctor portrait"/>
                    <div>
                        <h3 className="font-headline text-2xl font-semibold text-primary">Dr. Fernando Abraham Muñoz</h3>
                        <p className="mt-4 text-muted-foreground">Urólogo formado en Medicina por la Universidad La Salle y especializado en Urología por la UNAM. Cuenta con experiencia en cirugía laparoscópica y mínima invasión, endourología, urología oncológica y tratamiento de disfunción eréctil.</p>
                        <p className="mt-2 text-muted-foreground">Ha realizado entrenamiento nacional e internacional en cirugía láser de próstata, lo que respalda su práctica con técnicas modernas y seguras.</p>
                        <p className="mt-2 text-muted-foreground">Ofrece atención basada en honestidad, ética y calidez humana. Es miembro de la SMU, AUA, EAU y CAU.</p>
                         <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                            <Link href="/contacto">Agendar Cita</Link>
                        </Button>
                    </div>
                </div>
           </div>
        </div>
      </section>

      {/* Costs Section */}
      <section id="costos" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">Costos de la Cirugía de Próstata</h2>
             <p className="mt-2 text-muted-foreground">Por Endoscopia con Láser Holmium y Resección Transuretral</p>
           </div>
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center shadow-xl">
                    <p className="text-lg">Paquete Todo Incluido desde</p>
                    <p className="font-headline text-4xl md:text-5xl font-bold my-2">$39,900 MXN**</p>
                    <p className="text-sm">**Aplica restricciones. Precios sujetos a cambio sin previo aviso.</p>
                </div>
                <div className="mt-8">
                    <h4 className="font-headline text-xl font-semibold text-primary">¿Qué incluye?</h4>
                     <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                        <li>Estancia hospitalaria</li>
                        <li>Honorarios médicos</li>
                        <li>Quirófano</li>
                        <li>Insumos y medicamentos</li>
                        <li>Consultas post-operatorias</li>
                    </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 items-center">
                  <div className="space-y-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                          <p className="text-muted-foreground">Equipo de Cirugía</p>
                          <CircleCheckBig className="h-6 w-6 text-accent"/>
                      </div>
                       <div className="flex items-center justify-end gap-2">
                          <p className="text-muted-foreground">Anestesia</p>
                          <CircleCheckBig className="h-6 w-6 text-accent"/>
                      </div>
                       <div className="flex items-center justify-end gap-2">
                          <p className="text-muted-foreground">Internamiento (1 día)</p>
                          <CircleCheckBig className="h-6 w-6 text-accent"/>
                      </div>
                  </div>
                   <div className="space-y-4">
                      <div className="flex items-center gap-2">
                          <CircleCheckBig className="h-6 w-6 text-accent"/>
                          <p className="text-muted-foreground">Equipo Médico</p>
                      </div>
                       <div className="flex items-center gap-2">
                          <CircleCheckBig className="h-6 w-6 text-accent"/>
                          <p className="text-muted-foreground">Medicamentos</p>
                      </div>
                       <div className="flex items-center gap-2">
                          <CircleCheckBig className="h-6 w-6 text-accent"/>
                          <p className="text-muted-foreground">Insumos</p>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-16 lg:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-semibold text-primary">Testimonios de Pacientes</h2>
          <div className="mt-12 max-w-2xl mx-auto">
            {testimonials.slice(0, 1).map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between text-center bg-transparent border-none shadow-none">
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground text-lg">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="font-semibold">{testimonial.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
       <section id="contacto" className="py-16 lg:py-24 bg-secondary">
         <div className="container mx-auto px-4">
           <h2 className="text-center font-headline text-3xl md:text-4xl font-semibold text-primary">Contáctanos</h2>
           <div className="mt-12 grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-headline text-2xl font-semibold text-primary">Dr. Cristan Basques</h3>
              <p className="mt-2 text-muted-foreground">
                Urólogo Certificado - Cirugía de Próstata
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div>
               <h3 className="font-headline text-2xl font-semibold text-primary">Ubicación y Teléfono</h3>
               <address className="not-italic space-y-4 mt-4 text-muted-foreground">
                  <p>{contactInfo.address}</p>
                  <p>
                    <Link href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                      Tel: {contactInfo.phone}
                    </Link>
                  </p>
                   <p>
                    <Link href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                      Email: {contactInfo.email}
                    </Link>
                  </p>
                   <p><strong>Horarios:</strong> Lunes a Viernes de 9:00 a 19:00 hrs</p>
                </address>
                 <div className="mt-4 aspect-video w-full rounded-lg overflow-hidden border shadow-md">
                   <Map position={contactInfo.location} />
                 </div>
            </div>
          </div>
         </div>
       </section>
    </div>
  );
}

    

    

