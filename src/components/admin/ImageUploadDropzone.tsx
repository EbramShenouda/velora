import React, { useState, useRef } from 'react';
import { ImageUploadService } from '../../services/imageUpload';
import { Camera, Upload, Link as LinkIcon, X, Check, Image as ImageIcon } from 'lucide-react';

interface ImageUploadDropzoneProps {
  value: string;
  onChange: (url: string) => void;
  className?: string;
}

export const ImageUploadDropzone: React.FC<ImageUploadDropzoneProps> = ({
  value,
  onChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'camera' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const handleFileProcess = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Per favore seleziona un file immagine valido (JPG, PNG, WebP).');
      return;
    }

    setIsUploading(true);
    try {
      const resultUrl = await ImageUploadService.uploadImage(file);
      onChange(resultUrl);
    } catch (err) {
      console.error('Upload failed:', err);
      alert("Errore durante l'elaborazione dell'immagine.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    if (ImageUploadService.isValidImageUrl(urlInput.trim())) {
      onChange(urlInput.trim());
      setUrlInput('');
    } else {
      alert('URL immagine non valido. Inserisci un link http o https valido.');
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Tab Switcher */}
      <div className="flex rounded-xl bg-stone-100 p-1 text-xs font-semibold text-stone-600">
        <button
          type="button"
          onClick={() => setActiveTab('upload')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'upload' ? 'bg-white text-botanical-950 shadow-sm' : 'hover:text-stone-900'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload / Drag</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('camera')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'camera' ? 'bg-white text-botanical-950 shadow-sm' : 'hover:text-stone-900'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Scatta Foto</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('url')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'url' ? 'bg-white text-botanical-950 shadow-sm' : 'hover:text-stone-900'
          }`}
        >
          <LinkIcon className="w-3.5 h-3.5" />
          <span>Incolla URL</span>
        </button>
      </div>

      {/* Hidden Native File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileProcess(e.target.files[0]);
          }
        }}
      />
      {/* Camera capture input specifically configured with capture="environment" for smartphone rear lens */}
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFileProcess(e.target.files[0]);
          }
        }}
      />

      {/* Main Dropzone / Input Area */}
      {activeTab === 'upload' && (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
            dragOver
              ? 'border-clay bg-petal/20 scale-[0.99]'
              : 'border-stone-300 hover:border-botanical-800 bg-cream/70'
          }`}
        >
          <Upload className="w-7 h-7 mx-auto text-clay mb-2" />
          <p className="text-xs font-bold text-botanical-950">
            {isUploading ? 'Caricamento in corso...' : 'Trascina qui la foto del fiore o clicca per sfogliare'}
          </p>
          <p className="text-[10px] text-stone-500 mt-0.5">Supporta JPG, PNG, WebP fino a 10MB</p>
        </div>
      )}

      {activeTab === 'camera' && (
        <div
          onClick={() => cameraInputRef.current?.click()}
          className="border-2 border-dashed border-emerald-600/60 bg-emerald-50/50 rounded-2xl p-6 text-center cursor-pointer hover:bg-emerald-50 transition-all"
        >
          <Camera className="w-8 h-8 mx-auto text-emerald-700 mb-2" />
          <p className="text-xs font-bold text-emerald-950">
            Tocca per aprire la Fotocamera dello Smartphone
          </p>
          <p className="text-[10px] text-emerald-700 mt-0.5">
            Ideale per fotografare subito in bottega i nuovi arrivi freschi
          </p>
        </div>
      )}

      {activeTab === 'url' && (
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <input
            type="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Incolla URL immagine (https://images.unsplash.com/...)"
            className="flex-1 px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs bg-cream focus:outline-none focus:ring-1 focus:ring-botanical-900"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-botanical-950 hover:bg-clay text-white rounded-xl text-xs font-bold uppercase transition-colors"
          >
            Applica
          </button>
        </form>
      )}

      {/* Immediate Image Preview with clear button */}
      {value ? (
        <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 group">
          <div className="h-44 sm:h-52 w-full">
            <img src={value} alt="Anteprima Prodotto" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
              <Check className="w-3 h-3" /> Foto Pronta
            </span>
            <button
              type="button"
              onClick={() => onChange('')}
              className="w-7 h-7 rounded-full bg-black/75 hover:bg-rose-600 text-white flex items-center justify-center transition-colors shadow"
              title="Rimuovi foto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-400 text-xs flex items-center justify-center gap-2">
          <ImageIcon className="w-4 h-4" />
          <span>Nessuna foto selezionata. Usa una delle opzioni sopra.</span>
        </div>
      )}
    </div>
  );
};

