import CategoryGrid from '@/components/category-grid';

export default function CategoriesPage() {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Wallpaper Categories</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Browse wallpapers by category to find exactly what you're looking for
        </p>
      </section>

      <CategoryGrid />
    </div>
  );
}