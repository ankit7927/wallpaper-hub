import { Metadata } from 'next';
import WallpaperGrid from '@/components/wallpaper-grid';

export async function generateStaticParams() {
  // TODO: Fetch all category slugs from Supabase
  return [
    { slug: 'nature' },
    { slug: 'abstract' },
    { slug: 'minimalist' },
    // Add more categories as needed
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title: `${categoryName} Wallpapers - WallpaperHub`,
    description: `Explore our collection of ${categoryName.toLowerCase()} wallpapers`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{categoryName} Wallpapers</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of {categoryName.toLowerCase()} wallpapers
        </p>
      </section>

      <WallpaperGrid category={params.slug} />
    </div>
  );
}