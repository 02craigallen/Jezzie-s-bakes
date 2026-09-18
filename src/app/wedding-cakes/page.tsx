import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { elegantPhotos, weddingPhotos } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'Wedding Cakes',
  description:
    'Bespoke wedding cakes designed around you, hand-crafted in Padstow and delivered across Cornwall. Wedding enquiries welcome for 2026 and 2027.',
};

export default function WeddingCakesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Wedding cakes"
        title="Cakes for your wedding day"
        description="A wedding cake designed entirely around the two of you — your colours, your flavours, your venue."
        image={weddingPhotos[0].src}
        imageAlt={weddingPhotos[0].alt}
      />
      <section>
        <div className="wrap">
          {weddingPhotos.length > 0 && (
            <div className="mb-[90px] reveal">
              <div className="max-w-[640px] mx-auto text-center mb-12">
                <div className="eyebrow">From a real Jezz Bakes wedding</div>
                <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] mb-5">Recently baked</h2>
              </div>
              <div
                className={`grid gap-5 ${weddingPhotos.length > 1 ? 'grid-cols-2 max-[700px]:grid-cols-1' : 'max-w-[520px] mx-auto'}`}
              >
                {weddingPhotos.map((photo) => (
                  <Image
                    key={photo.src}
                    src={photo.src}
                    alt={photo.alt}
                    width={700}
                    height={933}
                    className="w-full h-auto object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          <div className="bg-paper-deep py-[70px] px-[60px] text-center max-w-[780px] mx-auto mb-[90px] border border-line reveal max-[760px]:py-11 max-[760px]:px-6">
            <div className="eyebrow text-center">Growing our wedding portfolio</div>
            <h2 className="font-serif text-[1.9rem] mb-[18px]">Wedding enquiries welcome</h2>
            <p className="text-ink-soft max-w-[52ch] mx-auto mb-[30px] font-light">
              We&apos;re busy photographing more of our wedding cakes for this page — but we&apos;re already
              taking wedding enquiries for this year and next. Get in touch and we&apos;ll talk through your
              date, your style and what&apos;s possible, with examples tailored to you.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Enquire About Your Wedding Cake
            </Link>
          </div>

          <div className="max-w-[640px] mx-auto text-center mb-16 reveal">
            <div className="eyebrow">A sense of style</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] mb-5">Our elegant, buttercream finish</h2>
            <p className="text-ink-soft max-w-[52ch] mx-auto font-light">
              While these particular photographs are from birthday celebrations, this clean buttercream and
              fresh-flower style is a favourite starting point for many of our wedding designs.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5 reveal max-[760px]:grid-cols-2">
            {elegantPhotos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={400}
                height={500}
                className="aspect-[4/5] object-cover w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
