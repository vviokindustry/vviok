'use server';

import fs from 'fs/promises';
import path from 'path';
import { readdirSync } from 'fs';

/**
 * Handles uploading an image to the public/uploads folder.
 */
export async function uploadProductImage(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    if (!file) {
      throw new Error('No file provided');
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create the uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    try {
      await fs.access(uploadsDir);
    } catch {
      await fs.mkdir(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, file.name);
    await fs.writeFile(filePath, buffer);

    return { 
      success: true, 
      filename: file.name, 
      path: `/uploads/${file.name}` 
    };
  } catch (error) {
    console.error('Upload error:', error);
    return { success: false, message: 'Failed to upload image.' };
  }
}

/**
 * Retrieves a list of files currently in the uploads folder.
 */
export async function getUploadedImages() {
  try {
    const uploadsDir = path.join(process.cwd(), 'public/uploads');
    try {
      await fs.access(uploadsDir);
    } catch {
      return [];
    }
    
    const files = readdirSync(uploadsDir);
    return files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file)).map(file => ({
      name: file,
      url: `/uploads/${file}`
    }));
  } catch (error) {
    console.error('Error reading uploads:', error);
    return [];
  }
}
