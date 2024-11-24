"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function DownloadButton({ wallpaperId }: { wallpaperId: string }) {
  const { toast } = useToast();

  const handleDownload = async () => {
    // TODO: Implement download logic and update download count in Supabase
    toast({
      title: "Download started",
      description: "Your wallpaper will be downloaded shortly"
    });
  };

  return (
    <Button onClick={handleDownload} size="lg" className="w-full">
      <Download className="mr-2 h-4 w-4" /> Download Wallpaper
    </Button>
  );
}