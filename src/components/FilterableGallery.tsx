'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import type { CakePhoto } from '@/data/gallery';
import Lightbox from '@/components/Lightbox';

const filters: { key: 'all' | CakePhoto['category']; label: string }[] = [
  { key: 'all', label: 'All Cakes' },
  { key: 'elegant', label: 'Elegant & Buttercream' },
  { key: 'statement', label: 'Statement Drip' },
  { key: 'whimsical', label: 'Whimsical & Themed' },
];

export default function FilterableGallery({ photos }: { photos: CakePhoto[] }) {
  const [active, setActive] = useState<'all' | CakePhoto['category']>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (active === 'all' ? photos : photos.filter((p) => p.category === active)),
    [active, photos],
  );

  return (
    <>
      <div className="flex flex-wrap mb-[50px] border border-line w-fit reveal">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`py-[11px] px-[22px] border-r border-line last:border-r-0 text-[0.84rem] transition-colors ${
              active === f.key ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="masonry reveal">
        {visible.map((photo, i) => (
          <div key={photo.src} className="m-item" onClick={() => setOpenIndex(i)} role="button" tabIndex={0}>
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
        <Lightbox photos={visible} index={openIndex} onClose={() => setOpenIndex(null)} onIndexChange={setOpenIndex} />
      )}
    </>
  );
}
