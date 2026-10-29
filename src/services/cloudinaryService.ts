/**
 * VELORA - Cloudinary Upload Service
 * Direct unsigned uploads to Cloudinary for product catalog images (PC & Smartphone)
 */

export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder?: string;
  original_filename: string;
  error?: {
    message: string;
  };
}

/**
 * Upload an image file directly to Cloudinary using an unsigned upload preset.
 * 
 * @param file - The image file to upload (from file input, camera, or drag & drop)
 * @returns The secure HTTPS URL of the uploaded image on Cloudinary
 * @throws Error if upload fails or if credentials are missing
 */
export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      'Configurazione Cloudinary mancante nel file .env (VITE_CLOUDINARY_CLOUD_NAME o VITE_CLOUDINARY_UPLOAD_PRESET).'
    );
  }

  // Basic validation
  if (!file) {
    throw new Error('Nessun file selezionato per il caricamento.');
  }

  if (!file.type.startsWith('image/')) {
    throw new Error('Il file selezionato non è un\'immagine valida (formati supportati: JPG, PNG, WebP, GIF).');
  }

  // Limit to 10MB to avoid oversized uploads
  const maxSizeBytes = 10 * 1024 * 1024;
  if (file.size > maxSizeBytes) {
    throw new Error('L\'immagine supera la dimensione massima consentita di 10MB.');
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('folder', 'velora_catalog');

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    const data: CloudinaryUploadResponse = await response.json();

    if (!response.ok || data.error) {
      const errorMessage = data.error?.message || `Errore HTTP ${response.status}: Impossibile caricare l'immagine su Cloudinary.`;
      throw new Error(errorMessage);
    }

    if (!data.secure_url) {
      throw new Error('Cloudinary non ha restituito un URL sicuro valido.');
    }

    return data.secure_url;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Si è verificato un errore imprevisto durante l\'upload dell\'immagine.');
  }
}

/**
 * Inserisce i parametri di trasformazione ed ottimizzazione automatica di Cloudinary
 * (formato automatico WebP/AVIF, qualità dinamica e ridimensionamento).
 * 
 * Se l'URL non appartiene a Cloudinary, viene restituito inalterato.
 * 
 * @param url - URL completo dell'immagine
 * @param width - Larghezza desiderata in pixel (default: 800)
 * @returns URL ottimizzato con parametri di trasformazione
 */
export function getOptimizedImageUrl(url: string, width = 800): string {
  if (!url || typeof url !== 'string') return '';

  // Verifica se è un URL Cloudinary standard
  const isCloudinary = url.includes('cloudinary.com') && url.includes('/image/upload/');
  if (!isCloudinary) {
    return url;
  }

  // Evita doppie trasformazioni se già presenti
  if (url.includes('/image/upload/f_auto') || url.includes('/image/upload/w_')) {
    return url;
  }

  // Inserimento parametri di trasformazione dopo '/image/upload/'
  const transformation = `f_auto,q_auto,w_${width},c_limit`;
  return url.replace('/image/upload/', `/image/upload/${transformation}/`);
}

/**
 * Verifica se una stringa è un URL ospitato su Cloudinary
 */
export function isCloudinaryUrl(url: string): boolean {
  return typeof url === 'string' && url.includes('cloudinary.com');
}

