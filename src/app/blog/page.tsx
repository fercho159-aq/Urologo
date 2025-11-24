import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog de Salud Prostática',
  description: 'Artículos educativos sobre cirugía de próstata, cuidados, tratamientos y consejos de nuestros urólogos expertos en México.',
  keywords: ['blog urología', 'salud próstata', 'consejos cirugía próstata', 'urología cdmx'],
};

const PostImages: Record<string, { url: string; hint: string }> = {
    'blog-pre-surgery': {
        url: 'https://images.unsplash.com/photo-1631217871099-88310a909a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwYXRpZW50fGVufDB8fHx8MTc2Mzk2MDgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'doctor patient'
    },
    'blog-types-surgery': {
        url: 'https://images.unsplash.com/photo-1734094546615-045bf5f7ea0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvcGVyYXRpbmclMjByb29tfGVufDB8fHx8MTc2NDAwMDc2MHww&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'operating room'
    },
    'blog-post-care': {
        url: 'https://images.unsplash.com/photo-1758654860100-32cd2e83e74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGF0aWVudCUyMHJlY292ZXJ5fGVufDB8fHx8MTc2NDAwNTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'patient recovery'
    }
}


export default function BlogPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Blog Educativo</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg">
            Información valiosa y actualizada de nuestros especialistas para guiarlo en su camino hacia el bienestar.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const postImage = PostImages[post.image];
              return (
                <Card key={post.slug} className="overflow-hidden flex flex-col">
                  {postImage && (
                    <Link href={`/blog/${post.slug}`} aria-label={`Leer más sobre ${post.title}`}>
                      <div className="aspect-video relative">
                        <Image
                          src={postImage.url}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          data-ai-hint={postImage.hint}
                        />
                      </div>
                    </Link>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground line-clamp-4">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/blog/${post.slug}`}>Leer artículo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
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
