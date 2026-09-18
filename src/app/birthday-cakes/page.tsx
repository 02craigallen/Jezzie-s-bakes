import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import MasonryGallery from '@/components/MasonryGallery';
import { elegantPhotos, statementPhotos, whimsicalPhotos } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Birthday & Celebration Cakes',
  description:
    'Bold statement drip cakes, elegant buttercream finishes and whimsical themed designs — hand-made birthday and celebration cakes in Padstow, Cornwall.',
};

export default function BirthdayCakesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Birthday & celebration cakes"
        title="Cakes for birthdays and every celebration in between"
        description="From bold statement drip cakes to whimsical themed designs — hand-made for milestone birthdays, christenings, anniversaries and everything worth celebrating."
        image={statementPhotos[7].src}
        imageAlt={statementPhotos[7].alt}
      />
      <section>
        <div className="wrap">
          <GallerySection
            eyebrow="Elegant & buttercream"
            title="Soft, refined, timeless"
            description="Smooth buttercream finishes with fresh flowers, macarons and gold detailing — a favourite for milestone birthdays and sophisticated celebrations."
            photos={elegantPhotos}
            first
          />
          <GallerySection
            eyebrow="Statement drip cakes"
            title="Bold, indulgent, memorable"
            description="Rich drip finishes piled high with chocolate, sweets and personalised toppers — designed to make an entrance."
            photos={statementPhotos}
          />
          <GallerySection
            eyebrow="Whimsical & themed"
            title="Playful designs, made to order"
            description="Character and theme cakes for younger celebrations — hand-modelled details and bright, joyful colours."
            photos={whimsicalPhotos}
          />
        </div>
      </section>

      <section className="bg-ink text-paper text-center py-[120px]">
        <div className="wrap reveal">
          <h2 className="text-white font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[16ch] mx-auto mb-[22px]">
            See something close to what you have in mind?
          </h2>
          <p className="text-white/66 max-w-[46ch] mx-auto mb-[38px] font-light">
            Send us the details of your celebration and we&apos;ll design something just as special for you.
          </p>
          <Link href="/contact" className="btn btn-light">
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}

function GallerySection({
  eyebrow,
  title,
  description,
  photos,
  first,
}: {
  eyebrow: string;
  title: string;
  description: string;
  photos: typeof elegantPhotos;
  first?: boolean;
}) {
  return (
    <>
      <div className={`${first ? 'mt-0' : 'mt-20'} mb-8 reveal`}>
        <div className="eyebrow">{eyebrow}</div>
        <h3 className="font-serif text-[1.5rem] mb-[10px]">{title}</h3>
        <p className="text-ink-soft text-[0.95rem] max-w-[60ch] font-light">{description}</p>
      </div>
      <MasonryGallery photos={photos} />
    </>
  );
}
