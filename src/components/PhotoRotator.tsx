'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { CakePhoto } from '@/data/gallery';

export default function PhotoRotator({ photos }: { photos: CakePhoto[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [photos.length]);

  const goTo = (i: number) => {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      timerRef.current = setInterval(() => {
        setIndex((cur) => (cur + 1) % photos.length);
      }, 5000);
    }
  };

  return (
    <div
      className="relative w-full h-[78vh] min-h-[420px] max-h-[760px] overflow-hidden max-[600px]:h-[52vh] max-[600px]:min-h-[320px]"
      role="region"
      aria-label="Featured cake photographs, rotating every 5 seconds"
    >
      {photos.map((photo, i) => (
        <div
          key={photo.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute bottom-7 left-0 right-0 flex justify-center gap-[10px] z-[2]">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => goTo(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`w-[7px] h-[7px] rounded-full border-none p-0 transition-all ${
              i === index ? 'bg-white scale-[1.3]' : 'bg-white/45'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
