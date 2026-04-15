
import { MetadataRoute } from 'next';
import { productCategories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vviokindustry.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/manufacturing-quality',
    '/export',
    '/products',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic category routes
  const categoryRoutes = productCategories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic subcategory routes (New Flat Structure)
  const subcategoryRoutes = productCategories.flatMap((cat) => 
    (cat.subcategories || []).map((sub) => ({
      url: `${baseUrl}/products/${sub.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  );

  return [...staticRoutes, ...categoryRoutes, ...subcategoryRoutes];
}
