import { siteConfig } from '../config/siteConfig';
import { uploadToCloudinary } from './cloudinaryService';

export interface UploadResult {
  url: string;
  publicId?: string;
}

/**
 * Service to handle image uploads from camera, drag-and-drop, or external URL.
 * Supports direct Cloudinary upload via cloudinaryService, fallback to backend or base64.
 */
export const ImageUploadService = {
  /**
   * Upload an image file to Cloudinary or convert to optimized Data URL
   */
  async uploadImage(file: File): Promise<string> {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    // 1. Direct Cloudinary unsigned upload using cloudinaryService
    if (cloudName && uploadPreset) {
      try {
        return await uploadToCloudinary(file);
      } catch (err) {
        console.warn('Cloudinary upload via cloudinaryService failed, falling back:', err);
      }
    }

    // 2. Upload to Spring Boot Backend if available
    if (!siteConfig.api.useMock) {
      try {
        const formData = new FormData();
        formData.append('image', file);
        const token = localStorage.getItem('velora_jwt_token');

        const res = await fetch(`${siteConfig.api.baseUrl}/admin/upload`, {
          method: 'POST',
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          body: formData,
        });

        if (res.ok) {
          const data = await res.json();
          if (data.url) return data.url;
        }
      } catch (err) {
        console.warn('Backend image upload failed, falling back to local data URL:', err);
      }
    }

    // 3. Fallback: Compress and generate high quality Web Data URL (instant preview & storage)
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  },

  /**
   * Validate if a string is a valid image URL
   */
  isValidImageUrl(url: string): boolean {
    if (!url) return false;
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return url.startsWith('data:image/');
    }
  },
};

