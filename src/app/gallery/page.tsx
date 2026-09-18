import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import FilterableGallery from '@/components/FilterableGallery';
import { allPhotos, whimsicalPhotos } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'The full Jezz Bakes gallery — elegant buttercream, statement drip and whimsical themed cakes, hand-made in Padstow, Cornwall.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="The full collection"
        description="Every cake below was designed and baked by hand for a real celebration. Tap any photo for a closer look."
        image={whimsicalPhotos[1].src}
        imageAlt={whimsicalPhotos[1].alt}
      />
      <section>
        <div className="wrap">
          <FilterableGallery photos={allPhotos} />
        </div>
      </section>
    </>
  );
}
