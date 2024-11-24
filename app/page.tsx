import WallpaperGrid from '@/components/wallpaper-grid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Discover Amazing Wallpapers</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of high-quality wallpapers for your desktop and mobile devices
        </p>
      </section>

      <Tabs defaultValue="latest" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
          <TabsTrigger value="latest">Latest</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="downloads">Most Downloaded</TabsTrigger>
        </TabsList>
        <TabsContent value="latest">
          <WallpaperGrid type="latest" />
        </TabsContent>
        <TabsContent value="trending">
          <WallpaperGrid type="trending" />
        </TabsContent>
        <TabsContent value="downloads">
          <WallpaperGrid type="downloads" />
        </TabsContent>
      </Tabs>
    </div>
  );
}