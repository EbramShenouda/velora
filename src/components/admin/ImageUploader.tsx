import React, { useState, useRef, useCallback } from 'react';
import { uploadToCloudinary, getOptimizedImageUrl, isCloudinaryUrl } from '../../services/cloudinaryService';
import {
  Upload,
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle,
  X,
  RefreshCw,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export interface ImageUploaderProps {
  /** URL attuale dell'immagine (se esistente, es. in modalità modifica prodotto) */
  currentImageUrl?: string;
  /** Callback invocata non appena Cloudinary restituisce il secure_url */
  onImageUploaded: (url: string) => void;
  /** Callback opzionale invocata quando l'utente rimuove l'immagine */
  onImageRemoved?: () => void;
  /** Titolo o etichetta del componente */
  label?: string;
  /** Testo di aiuto o sottotitolo */
  helperText?: string;
  /** Classi CSS aggiuntive */
  className?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  currentImageUrl = '',
  onImageUploaded,
  onImageRemoved,
  label = 'Fotografia Botanica del Prodotto',
  helperText = 'Trascina una foto o carica da smartphone/PC (Cloudinary ottimizza automaticamente la qualità)',
  className = '',
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>(currentImageUrl);

  // Input file references (desktop + mobile camera)
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  // Sync state if currentImageUrl changes from parent
  React.useEffect(() => {
    setPreviewUrl(currentImageUrl);
  }, [currentImageUrl]);

  /**
   * Gestione del file selezionato (sia tramite input che drop)
   */
  const handleProcessFile = useCallback(
    async (file: File) => {
      setErrorMessage(null);

      if (!file.type.startsWith('image/')) {
        setErrorMessage('Seleziona un formato immagine valido (JPEG, PNG, WebP).');
        return;
      }

      setIsUploading(true);
      setUploadProgress(15);

      // Simulazione progresso visivo mentre la fetch è in transito
      const progressTimer = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 85) {
            clearInterval(progressTimer);
            return prev;
          }
          return prev + 15;
        });
      }, 250);

      try {
        const secureUrl = await uploadToCloudinary(file);
        clearInterval(progressTimer);
        setUploadProgress(100);

        setPreviewUrl(secureUrl);
        onImageUploaded(secureUrl);
      } catch (err: unknown) {
        clearInterval(progressTimer);
        const msg =
          err instanceof Error
            ? err.message
            : 'Errore durante il caricamento dell\'immagine su Cloudinary.';
        setErrorMessage(msg);
      } finally {
        setTimeout(() => {
          setIsUploading(false);
          setUploadProgress(0);
        }, 400);
      }
    },
    [onImageUploaded]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleProcessFile(files[0]);
    }
    // Reset input per permettere di ricaricare lo stesso file se necessario
    e.target.value = '';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl('');
    setErrorMessage(null);
    if (onImageRemoved) {
      onImageRemoved();
    } else {
      onImageUploaded('');
    }
  };

  const openFileBrowser = () => {
    if (!isUploading && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const openCamera = () => {
    if (!isUploading && cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  const isCurrentCloudinary = isCloudinaryUrl(previewUrl);

  return (
    <div className={`space-y-2.5 font-sans ${className}`}>
      {/* Label and Helper Header */}
      <div className="flex items-center justify-between">
        <label className="block text-xs font-bold uppercase tracking-wider text-botanical-950 flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-clay" />
          <span>{label}</span>
        </label>
        {isCurrentCloudinary && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
            <Sparkles className="w-3 h-3 text-gold" />
            Cloudinary CDN Attivo
          </span>
        )}
      </div>

      {helperText && <p className="text-[11px] text-stone-500 leading-normal">{helperText}</p>}

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      {/* Camera capture input specific for mobile Android/iOS */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange}
        disabled={isUploading}
      />

      {/* Case 1: Image Preview Mode */}
      {previewUrl ? (
        <div className="relative rounded-2xl overflow-hidden border-2 border-botanical-900/20 bg-cream/60 p-3 shadow-md transition-all group">
          <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden bg-stone-900 flex items-center justify-center border border-stone-200">
            <img
              src={getOptimizedImageUrl(previewUrl, 800)}
              alt="Anteprima Creazione Botanica"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Cloudinary Optimization Tag */}
            <div className="absolute top-3 left-3 bg-botanical-950/85 backdrop-blur-md text-petal text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-white/20 shadow-md">
              {isCurrentCloudinary ? 'Ottimizzata WebP / AVIF' : 'Immagine Esterna'}
            </div>

            {/* Hover / Active Actions Overlay */}
            <div className="absolute inset-0 bg-botanical-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[2px] p-4">
              <button
                type="button"
                onClick={openFileBrowser}
                disabled={isUploading}
                className="px-4 py-2 rounded-xl bg-white text-botanical-950 font-bold text-xs uppercase tracking-wider hover:bg-clay hover:text-white transition-all shadow-lg flex items-center gap-1.5 active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Sostituisci</span>
              </button>

              <button
                type="button"
                onClick={openCamera}
                disabled={isUploading}
                className="sm:hidden px-3.5 py-2 rounded-xl bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-lg flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Fotocamera</span>
              </button>

              <button
                type="button"
                onClick={handleRemoveImage}
                disabled={isUploading}
                className="px-4 py-2 rounded-xl bg-rose-600/90 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-700 transition-all shadow-lg flex items-center gap-1.5 active:scale-95"
              >
                <X className="w-3.5 h-3.5" />
                <span>Rimuovi</span>
              </button>
            </div>
          </div>

          {/* Bottom Card Info bar */}
          <div className="mt-2.5 px-1 flex items-center justify-between text-xs text-stone-600">
            <span className="truncate max-w-[240px] sm:max-w-xs text-[11px] font-mono text-stone-500">
              {previewUrl}
            </span>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-clay hover:text-botanical-950 font-bold flex items-center gap-1 transition-colors text-[11px] shrink-0"
            >
              <span>Apri intera</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        /* Case 2: Upload Zone / Drag & Drop Mode */
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileBrowser}
          className={`relative rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 select-none ${
            isDragging
              ? 'border-clay bg-petal/20 scale-[1.01]'
              : 'border-stone-300 hover:border-botanical-900 bg-cream/40 hover:bg-white'
          } ${isUploading ? 'pointer-events-none opacity-80' : ''}`}
        >
          {/* Upload Progress Overlay */}
          {isUploading ? (
            <div className="py-6 flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <RefreshCw className="w-10 h-10 text-clay animate-spin" />
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-botanical-950">
                  {uploadProgress}%
                </span>
              </div>

              <div className="w-full max-w-xs space-y-1.5">
                <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-clay via-rose-500 to-botanical-900 transition-all duration-300 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <p className="text-xs font-semibold text-botanical-950">
                  Caricamento su Cloudinary in corso...
                </p>
                <p className="text-[10px] text-stone-500">
                  Generazione URL sicuro HTTPS e ottimizzazione automatica
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-3">
              {/* Central Botanical Icon */}
              <div className="mx-auto w-14 h-14 rounded-2xl bg-botanical-50 border border-botanical-200/80 flex items-center justify-center text-botanical-950 shadow-sm transition-transform group-hover:scale-110">
                <Upload className="w-6 h-6 text-clay" />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-bold text-botanical-950">
                  Trascina qui l'immagine del fiore o pianta
                </p>
                <p className="text-xs text-stone-500">
                  oppure clicca per sfogliare i file dal tuo computer
                </p>
              </div>

              {/* Action Buttons: Choose File or Open Smartphone Camera */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openFileBrowser();
                  }}
                  className="px-4 py-2 rounded-xl bg-botanical-950 hover:bg-clay text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Seleziona File</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openCamera();
                  }}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-botanical-950 border border-stone-300 text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
                >
                  <Camera className="w-3.5 h-3.5 text-clay" />
                  <span>Scatta con Fotocamera</span>
                </button>
              </div>

              <div className="pt-2 text-[10px] text-stone-400">
                Formati supportati: JPEG, PNG, WebP (max 10MB) • Preset: Unsigned Cloudinary
              </div>
            </div>
          )}
        </div>
      )}

      {/* Error Feedback Banner */}
      {errorMessage && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <span className="font-bold">Attenzione durante l'upload:</span> {errorMessage}
          </div>
          <button
            type="button"
            onClick={() => setErrorMessage(null)}
            className="text-rose-600 hover:text-rose-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

