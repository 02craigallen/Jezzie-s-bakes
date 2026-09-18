'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import type { CakePhoto } from '@/data/gallery';

type Props = {
  photos: CakePhoto[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export default function Lightbox({ photos, index, onClose, onIndexChange }: Props) {
  const item = photos[index];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % photos.length);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [index, photos.length, onClose, onIndexChange]);

  return (
    <div
      className="fixed inset-0 bg-[rgba(15,11,9,0.96)] z-[3000] flex items-center justify-center p-10 max-[700px]:p-4 animate-fadein"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-[30px] right-[30px] max-[700px]:top-4 max-[700px]:right-4 bg-transparent border border-white/30 text-white w-[46px] h-[46px] max-[700px]:w-[38px] max-[700px]:h-[38px] flex items-center justify-center cursor-pointer text-lg hover:bg-white/10"
      >
        ✕
      </button>
      <button
        onClick={() => onIndexChange((index - 1 + photos.length) % photos.length)}
        aria-label="Previous image"
        className="absolute left-[30px] max-[700px]:left-3 top-1/2 -translate-y-1/2 bg-transparent border border-white/30 text-white w-[46px] h-[46px] max-[700px]:w-[38px] max-[700px]:h-[38px] flex items-center justify-center cursor-pointer text-lg hover:bg-white/10"
      >
        ‹
      </button>
      <div className="relative max-w-[88vw] max-h-[82vh] w-full h-full flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          width={1200}
          height={1600}
          className="max-w-[88vw] max-h-[82vh] w-auto h-auto object-contain"
        />
      </div>
      <button
        onClick={() => onIndexChange((index + 1) % photos.length)}
        aria-label="Next image"
        className="absolute right-[30px] max-[700px]:right-3 top-1/2 -translate-y-1/2 bg-transparent border border-white/30 text-white w-[46px] h-[46px] max-[700px]:w-[38px] max-[700px]:h-[38px] flex items-center justify-center cursor-pointer text-lg hover:bg-white/10"
      >
        ›
      </button>
      <div className="absolute bottom-8 left-0 right-0 text-center text-white/70 text-[0.86rem] font-serif italic px-6">
        {item.alt}
      </div>
      <button
        className="absolute inset-0 -z-10 cursor-default"
        onClick={onClose}
        aria-label="Close viewer"
        tabIndex={-1}
      />
    </div>
  );
}
