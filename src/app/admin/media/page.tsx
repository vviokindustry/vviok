'use client';

import { useState, useEffect } from 'react';
import { uploadProductImage, getUploadedImages } from '@/app/admin/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Upload, Image as ImageIcon, Copy, Check, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function MediaManagerPage() {
  const { toast } = useToast();
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState<{name: string, url: string}[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const fetchImages = async () => {
    const data = await getUploadedImages();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsUploading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await uploadProductImage(formData);

    if (result.success) {
      toast({
        title: 'Upload Successful',
        description: `${result.filename} added to uploads.`,
      });
      fetchImages();
      (e.target as HTMLFormElement).reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Upload Failed',
        description: result.message,
      });
    }
    setIsUploading(false);
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
    toast({
      title: 'Copied!',
      description: 'Image path copied to clipboard.',
    });
  };

  return (
    <div className="container py-12 md:py-20 max-w-6xl">
      <div className="mb-12">
        <h1 className="font-headline text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">Media Manager</h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">Upload and manage your custom product images.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <Card className="border-2 rounded-2xl overflow-hidden shadow-xl">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="flex items-center gap-2 uppercase text-lg font-black">
                <Upload className="h-5 w-5 text-primary" /> Upload New Image
              </CardTitle>
              <CardDescription className="font-bold">
                Images will be stored in <code className="bg-white px-1 rounded">public/uploads/</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    type="file" 
                    name="file" 
                    accept="image/*" 
                    required 
                    className="cursor-pointer h-14 pt-3 text-sm font-bold border-2 border-dashed border-slate-200 hover:border-primary transition-colors"
                  />
                  <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Supports JPG, PNG, WEBP, GIF</p>
                </div>
                <Button type="submit" className="w-full h-14 font-black uppercase tracking-widest rounded-xl text-sm" disabled={isUploading}>
                  {isUploading ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Uploading...</>
                  ) : (
                    <>Upload to Server</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 p-8 bg-primary/5 rounded-[2rem] border border-primary/10">
            <h3 className="font-black uppercase text-base mb-6 flex items-center gap-3">
              <ImageIcon className="h-5 w-5 text-primary" /> How to use
            </h3>
            <ol className="text-lg space-y-4 text-slate-700 font-bold list-decimal pl-6">
              <li>Upload your image.</li>
              <li>Copy the <strong>Image Path</strong> from the gallery.</li>
              <li>Open <code className="bg-white px-1 font-code text-sm">src/lib/data.ts</code>.</li>
              <li>Replace the <code className="bg-white px-1 font-code text-sm">imageId</code> with your copied path (e.g., <code className="text-primary">"/uploads/my-filter.jpg"</code>).</li>
            </ol>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-50 rounded-[3rem] p-10 border-2 border-slate-100 min-h-[600px] shadow-inner">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight flex items-center gap-4">
                Gallery <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">{images.length}</span>
              </h2>
            </div>
            
            {images.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-80 text-slate-300 border-4 border-dashed rounded-[2rem] bg-white/50">
                <ImageIcon className="h-20 w-20 mb-6 opacity-20" />
                <p className="font-black uppercase tracking-[0.2em] text-sm">No uploaded images yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {images.map((img, idx) => (
                  <Card key={img.name} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl rounded-3xl bg-white">
                    <div className="aspect-video relative bg-slate-50 flex items-center justify-center p-6 group-hover:bg-white transition-colors">
                      <Image 
                        src={img.url} 
                        alt={img.name} 
                        fill 
                        className="object-contain p-2"
                      />
                    </div>
                    <CardContent className="p-6 bg-white border-t-2">
                      <p className="text-[10px] font-black uppercase truncate mb-4 text-slate-400 tracking-widest">{img.name}</p>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full h-12 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all"
                        onClick={() => copyToClipboard(img.url, idx)}
                      >
                        {copiedIndex === idx ? (
                          <><Check className="h-4 w-4 mr-2" /> Copied!</>
                        ) : (
                          <><Copy className="h-4 w-4 mr-2" /> Copy Image Path</>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
