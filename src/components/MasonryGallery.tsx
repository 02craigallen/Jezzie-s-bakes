'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CakePhoto } from '@/data/gallery';
import Lightbox from '@/components/Lightbox';

export default function MasonryGallery({ photos, reveal = true }: { photos: CakePhoto[]; reveal?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className={`masonry ${reveal ? 'reveal' : ''}`}>
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="m-item"
            onClick={() => setOpenIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') setOpenIndex(i);
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={800}
              sizes="(max-width: 700px) 50vw, 33vw"
              className="w-full h-auto"
            />
            <div className="m-cap">{photo.alt}</div>
          </div>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox photos={photos} index={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
      )}
    </>
  );
}
