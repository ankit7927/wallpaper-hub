"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "./ui/pagination";

interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  downloads: number;
}

interface WallpaperGridProps {
  type?: "latest" | "trending" | "downloads" | "similar";
  category?: string;
  limit?: number;
}

export default function WallpaperGrid({
  type = "latest",
  category,
  limit = 12,
}: WallpaperGridProps) {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);

  useEffect(() => {
    // TODO: Fetch wallpapers from Supabase based on type and category
    const demoWallpapers = Array.from({ length: limit }, (_, i) => ({
      id: `${i + 1}`,
      title: `Wallpaper ${i + 1}`,
      imageUrl: `https://images.unsplash.com/photo-1506905925346-21bda4d32df4`,
      downloads: Math.floor(Math.random() * 1000),
    }));
    setWallpapers(demoWallpapers);
  }, [type, category, limit]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
        {wallpapers.map((wallpaper) => (
          <Link href={`/wallpaper/${wallpaper.id}`} key={wallpaper.id}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={wallpaper.imageUrl}
                    alt={wallpaper.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h3 className="font-semibold truncate">
                      {wallpaper.title}
                    </h3>
                    <div className="flex items-center text-sm mt-1">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{wallpaper.downloads}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
