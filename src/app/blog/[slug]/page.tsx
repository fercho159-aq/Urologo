import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }
  
  const postImage = PlaceHolderImages.find(p => p.id === post.image);

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
            src={postImage.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={postImage.imageHint}
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
