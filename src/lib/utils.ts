import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves an image source by checking if the input is a direct path or a placeholder ID.
 */
export function resolveImageSource(idOrPath: string, placeholderImages: any[]) {
  // If it starts with / or http, it's a direct path
  if (idOrPath.startsWith('/') || idOrPath.startsWith('http')) {
    return {
      imageUrl: idOrPath,
      description: 'Industrial Product Image',
      imageHint: 'industrial'
    };
  }
  
  // Otherwise, look it up in placeholders
  const found = placeholderImages.find(img => img.id === idOrPath);
  return found || {
    imageUrl: 'https://placehold.co/600x600?text=Image+Not+Found',
    description: 'Image Not Found',
    imageHint: 'placeholder'
  };
}
