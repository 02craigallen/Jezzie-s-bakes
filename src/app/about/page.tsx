import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { elegantPhotos } from '@/data/gallery';

export const metadata: Metadata = {
  title: 'About the Baker',
  description: 'The story behind Jezz Bakes — bespoke wedding and birthday cakes handcrafted in Padstow, Cornwall.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About the baker" title="The story behind Jezz Bakes" light />
      <section className="!pt-5">
        <div className="wrap">
          <div className="grid grid-cols-2 gap-20 items-center mb-[110px] max-[860px]:grid-cols-1">
            <Image
              src={elegantPhotos[1].src}
              alt={elegantPhotos[1].alt}
              width={700}
              height={620}
              className="w-full h-[620px] max-[860px]:h-[360px] object-cover"
            />
            <div className="reveal">
              <p className="placeholder-note !mt-0 mb-5">
                This whole page is a starting placeholder — send me your real story (how Jezz Bakes started,
                your background/training, what baking means to you, and anything about how you work) and
                I&apos;ll rewrite this in your voice.
              </p>
              <p className="text-ink-soft mb-5 max-w-[54ch] font-light">
                Hello, I&apos;m Jezz — the hands, and the head, behind Jezz Bakes. I&apos;m based in Padstow,
                and I bake bespoke wedding and birthday cakes for families and couples across Cornwall.
              </p>
              <p className="text-ink-soft mb-5 max-w-[54ch] font-light">
                [Placeholder] I started baking because [tell me your story here] — and these days, nothing
                makes me happier than turning someone&apos;s idea for a cake into something they get to cut
                into on the day itself.
              </p>
              <p className="text-ink-soft mb-5 max-w-[54ch] font-light">
                [Placeholder] Every order is baked from scratch in small batches, so I only take on a limited
                number of cakes each week — that&apos;s what lets me give each one proper time and attention,
                from our first conversation right through to delivery.
              </p>
              <div className="font-serif italic text-[1.4rem] mt-6 text-gold">— Jezz</div>
            </div>
          </div>

          <div className="mb-16 reveal">
            <div className="eyebrow">How I work</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)]">What matters to me</h2>
          </div>
          <div className="grid grid-cols-3 gap-11 mt-6 max-[860px]:grid-cols-1">
            <div className="border-t border-line pt-6">
              <h4 className="font-serif text-[1.1rem] mb-3">Made from scratch</h4>
              <p className="text-ink-soft text-[0.94rem] font-light">
                No mixes, no shortcuts — every sponge, filling and decoration is made by hand in small batches.
              </p>
            </div>
            <div className="border-t border-line pt-6">
              <h4 className="font-serif text-[1.1rem] mb-3">Designed around you</h4>
              <p className="text-ink-soft text-[0.94rem] font-light">
                Your cake starts with a real conversation, not a catalogue. Colours, flavours and finishing
                touches are chosen together.
              </p>
            </div>
            <div className="border-t border-line pt-6">
              <h4 className="font-serif text-[1.1rem] mb-3">Delivered with care</h4>
              <p className="text-ink-soft text-[0.94rem] font-light">
                Cakes are delivered and styled in person across Cornwall, so everything looks its best when
                your guests arrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper text-center py-[120px]">
        <div className="wrap reveal">
          <h2 className="text-white font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[16ch] mx-auto mb-[22px]">
            Let&apos;s talk about your cake
          </h2>
          <p className="text-white/66 max-w-[46ch] mx-auto mb-[38px] font-light">
            Tell me about your celebration and I&apos;ll get back to you personally.
          </p>
          <Link href="/contact" className="btn btn-light">
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
