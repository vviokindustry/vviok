'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProductImageGalleryProps {
  images: { imageUrl: string; description: string }[];
  alt: string;
}

export function ProductImageGallery({ images, alt }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-8">
      {/* Main Image */}
      <div className="aspect-square relative bg-white rounded-[3rem] border-2 border-slate-100 overflow-hidden flex items-center justify-center p-12 group shadow-2xl shadow-slate-200/50">
        <Image
          src={images[activeIndex].imageUrl}
          alt={alt}
          width={800}
          height={800}
          className="object-contain transition-transform duration-700 group-hover:scale-110"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "aspect-square relative bg-white border-2 rounded-3xl p-3 transition-all shadow-md hover:shadow-lg overflow-hidden",
              activeIndex === idx ? "border-primary ring-2 ring-primary/20" : "border-slate-100 hover:border-primary/50"
            )}
          >
            <Image 
              src={img.imageUrl} 
              alt={`${alt} thumbnail ${idx + 1}`} 
              fill 
              className="object-contain p-2" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}
