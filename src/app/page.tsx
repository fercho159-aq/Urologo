import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, testimonials, blogPosts } from '@/lib/data';
import { ArrowRight, CheckCircle, Hospital, Stethoscope, Users } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const doctorImage = PlaceHolderImages.find((img) => img.id === 'doctor-portrait');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold">
            Excelencia en Cirugía de Próstata
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Cuidado urológico avanzado con un enfoque humano y tecnología de punta. Su bienestar es nuestra prioridad.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contacto">Agendar una Cita</Link>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-md mx-auto">
              {doctorImage && (
                 <Image
                    src={doctorImage.imageUrl}
                    alt={doctorImage.description}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-2xl object-cover aspect-square"
                    data-ai-hint={doctorImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-semibold text-primary">
                Comprometidos con su Salud Prostática
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En nuestra clínica, combinamos años de experiencia con las técnicas quirúrgicas más innovadoras para ofrecer tratamientos de próstata seguros y efectivos. Entendemos sus preocupaciones y estamos aquí para guiarlo en cada paso del camino.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Diagnóstico Preciso</h3>
                    <p className="text-muted-foreground">Utilizamos tecnología de vanguardia para un diagnóstico completo y certero.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Tratamientos Personalizados</h3>
                    <p className="text-muted-foreground">Cada paciente es único. Diseñamos un plan de tratamiento a su medida.</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Recuperación Acompañada</h3>
                    <p className="text-muted-foreground">Ofrecemos un seguimiento postoperatorio cercano para asegurar su pronta recuperación.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">Nuestros Servicios Destacados</h2>
          <p className="mt-2 max-w-3xl mx-auto text-muted-foreground">
            Ofrecemos una gama completa de servicios urológicos, con especialización en el tratamiento de la próstata.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {services.slice(0, 3).map((service) => (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.shortDescription}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/servicios">Saber más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" variant="outline" className="mt-12">
            <Link href="/servicios">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
       <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-semibold">¿Por Qué Elegirnos?</h2>
          <p className="mt-2 text-center max-w-3xl mx-auto text-muted-foreground">
            Nuestra dedicación y experiencia nos distinguen como líderes en el cuidado urológico.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-headline">Equipo Experimentado</h3>
              <p className="mt-2 text-muted-foreground">Urólogos certificados con una vasta trayectoria en cirugía de próstata.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-headline">Tecnología Avanzada</h3>
              <p className="mt-2 text-muted-foreground">Procedimientos mínimamente invasivos para una recuperación más rápida.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Hospital className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold font-headline">Instalaciones de Primer Nivel</h3>
              <p className="mt-2 text-muted-foreground">Entorno hospitalario seguro, moderno y confortable para su tratamiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-headline text-3xl md:text-4xl font-semibold">Historias de Nuestros Pacientes</h2>
          <p className="mt-2 text-center max-w-3xl mx-auto text-muted-foreground">
            La confianza y satisfacción de nuestros pacientes es nuestro mayor logro.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/testimonios">Leer más testimonios</Link>
              </Button>
            </div>
        </div>
      </section>

        {/* Blog Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
            <h2 className="text-center font-headline text-3xl md:text-4xl font-semibold">Blog Educativo</h2>
            <p className="mt-2 text-center max-w-3xl mx-auto text-muted-foreground">
                Información valiosa para pacientes y familiares sobre la salud prostática.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((post) => {
                    const postImage = PlaceHolderImages.find(p => p.id === post.image);
                    return (
                        <Card key={post.slug} className="overflow-hidden flex flex-col">
                            {postImage && (
                                <Link href={`/blog/${post.slug}`}>
                                    <div className="aspect-video relative">
                                        <Image src={postImage.imageUrl} alt={post.title} fill className="object-cover" data-ai-hint={postImage.imageHint} />
                                    </div>
                                </Link>
                            )}
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="link" className="p-0">
                                    <Link href={`/blog/${post.slug}`}>Leer artículo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/blog">Visitar Nuestro Blog</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
