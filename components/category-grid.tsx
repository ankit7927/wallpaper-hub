"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  count: number;
}

export default function CategoryGrid() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // TODO: Fetch categories from Supabase
    const demoCategories = [
      {
        id: '1',
        name: 'Nature',
        slug: 'nature',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        count: 128
      },
      {
        id: '2',
        name: 'Abstract',
        slug: 'abstract',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab',
        count: 95
      },
      {
        id: '3',
        name: 'Minimalist',
        slug: 'minimalist',
        imageUrl: 'https://images.unsplash.com/photo-1507908708918-778587c9e563',
        count: 76
      },
      // Add more categories as needed
    ];
    setCategories(demoCategories);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link href={`/categories/${category.slug}`} key={category.id}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative aspect-[16/9]">
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="mt-2">{category.count} wallpapers</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}