import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';


type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.title, 'cirugía próstata', 'urología méxico'],
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

const PostImages: Record<string, { url: string; hint: string }> = {
    'blog-pre-surgery': {
        url: 'https://images.unsplash.com/photo-1631217871099-88310a909a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkb2N0b3IlMjBwYXRpZW50fGVufDB8fHx8MTc2Mzk2MDgzMHww&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'doctor patient'
    },
    'blog-types-surgery': {
        url: 'https://images.unsplash.com/photo-1734094546615-045bf5f7ea0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxvcGVyYXRpbmclMjByb29tfGVufDB8fHx8MTc2NDAwMDc2MHww&ixlib-rb-4.1.0&q=80&w=1080',
        hint: 'operating room'
    },
    'blog-post-care': {
        url: 'https://images.unsplash.com/photo-1758654860100-32cd2e83e74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGF0aWVudCUyMHJlY292ZXJ5fGVufDB8fHx8MTc2NDAwNTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        hint: 'patient recovery'
    }
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const postImage = PostImages[post.image];

  return (
    <article className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{post.title}</h1>
        <p className="mt-4 text-muted-foreground">
          Publicado el {new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {postImage && (
        <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={postImage.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={postImage.hint}
          />
        </div>
      )}

      <div
        className="prose prose-lg lg:prose-xl max-w-none mx-auto text-foreground prose-headings:font-headline prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
