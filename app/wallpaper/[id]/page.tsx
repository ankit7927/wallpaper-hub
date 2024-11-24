import { Metadata } from 'next';
import Image from 'next/image';
import WallpaperGrid from '@/components/wallpaper-grid';
import { Separator } from '@/components/ui/separator';
import DownloadButton from '@/components/download-button';
import { supabase } from '@/lib/supabase';

// This is required for static site generation
export async function generateStaticParams() {
  // TODO: Fetch all wallpaper IDs from Supabase
  const wallpaperIds = Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
  }));

  return wallpaperIds;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // TODO: Fetch wallpaper details from Supabase
  return {
    title: `Wallpaper ${params.id} - WallpaperHub`,
    description: "Beautiful high-quality wallpaper for your desktop and mobile devices",
  };
}

interface WallpaperDetails {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  downloads: number;
  resolution: string;
  fileSize: string;
}

async function getWallpaper(id: string): Promise<WallpaperDetails> {
  // TODO: Replace with actual Supabase query
  return {
    id,
    title: "Mountain Landscape",
    description: "Beautiful mountain landscape at sunset",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    category: "Nature",
    downloads: 1234,
    resolution: "3840x2160",
    fileSize: "2.5 MB"
  };
}

export default async function WallpaperPage({ params }: { params: { id: string } }) {
  const wallpaper = await getWallpaper(params.id);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={wallpaper.imageUrl}
            alt={wallpaper.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{wallpaper.title}</h1>
            <p className="text-muted-foreground mt-2">{wallpaper.description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Category</h3>
              <p className="text-muted-foreground">{wallpaper.category}</p>
            </div>
            <div>
              <h3 className="font-semibold">Downloads</h3>
              <p className="text-muted-foreground">{wallpaper.downloads}</p>
            </div>
            <div>
              <h3 className="font-semibold">Resolution</h3>
              <p className="text-muted-foreground">{wallpaper.resolution}</p>
            </div>
            <div>
              <h3 className="font-semibold">File Size</h3>
              <p className="text-muted-foreground">{wallpaper.fileSize}</p>
            </div>
          </div>

          <DownloadButton wallpaperId={wallpaper.id} />
        </div>
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="text-2xl font-bold mb-6">Similar Wallpapers</h2>
        <WallpaperGrid type="similar" category={wallpaper.category} limit={6} />
      </section>
    </div>
  );
}