import Image from 'next/image';
import Link from 'next/link';
import PhotoRotator from '@/components/PhotoRotator';
import MasonryGallery from '@/components/MasonryGallery';
import {
  rotatorPhotos,
  featuredPhotos,
  secondaryPhotos,
  elegantPhotos,
  statementPhotos,
  whimsicalPhotos,
} from '@/data/gallery';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[100svh] flex items-center justify-center text-center bg-paper pt-[160px] pb-[90px] px-10 relative max-[600px]:pt-[140px] max-[600px]:pb-[70px] max-[600px]:px-6">
        <div className="max-w-[640px] flex flex-col items-center">
          <Image
            src="/images/logo/logo-full.png"
            alt="Jezz Bakes — Cakes for Life's Special Moments"
            width={440}
            height={440}
            priority
            className="w-[min(440px,62vw)] h-auto mb-[38px]"
          />
          <h1 className="sr-only">Beautiful Cakes for Life&apos;s Special Moments</h1>
          <p className="text-[1.03rem] max-w-[44ch] text-ink-soft mb-[38px] font-light">
            Hand-crafted wedding and birthday cakes, designed around you and baked with care in Padstow —
            delivered fresh across Cornwall.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link href="/gallery" className="btn btn-light">
              Explore Our Cakes
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Make an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ROTATING SHOWCASE */}
      <section className="!p-0">
        <PhotoRotator photos={rotatorPhotos} />
      </section>

      {/* INTRO */}
      <section className="pt-[100px] pb-[50px]">
        <div className="wrap">
          <div className="grid grid-cols-[1fr_1.15fr] gap-20 items-center max-[860px]:grid-cols-1 max-[860px]:gap-11">
            <div className="reveal">
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.4rem)] mb-[26px]">
                A cake that feels like <span className="serif-italic">you</span>
              </h2>
              <p className="text-ink-soft mb-[18px] max-w-[46ch] font-light">
                Every cake starts with a conversation — your colours, your flavours, the people you&apos;re
                celebrating with. From your first message to the final slice, it&apos;s designed and baked by
                hand, one order at a time.
              </p>
              <p className="text-ink-soft mb-[18px] max-w-[46ch] font-light">
                Based in Padstow and working with couples and families right across Cornwall, Jezz Bakes brings
                a personal, unhurried approach to every wedding and birthday cake.
              </p>
              <Link href="/about" className="btn btn-outline mt-[10px] inline-flex">
                Meet the Baker
              </Link>
            </div>
            <div className="reveal max-[860px]:order-[-1]">
              <Image
                src={elegantPhotos[0].src}
                alt={elegantPhotos[0].alt}
                width={700}
                height={560}
                className="w-full h-[560px] max-[860px]:h-[360px] object-cover"
              />
              <div className="mt-[18px] text-[0.86rem] text-ink-faint italic font-serif">
                Every cake, entirely bespoke — designed from scratch around you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section>
        <div className="wrap">
          <div className="max-w-[640px] mb-16 reveal">
            <div className="eyebrow">What we bake</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] mb-5">Three ways to celebrate</h2>
            <p className="text-ink-soft max-w-[52ch] font-light">
              Whichever the occasion, every cake is built around your story, your guests and your taste.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[50px] max-[860px]:grid-cols-1 max-[860px]:gap-10">
            <Link href="/wedding-cakes" className="cursor-pointer group reveal">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={elegantPhotos[2].src}
                  alt={elegantPhotos[2].alt}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.045]"
                />
              </div>
              <h3 className="font-serif text-[1.4rem] mb-2">Wedding Cakes</h3>
              <div className="text-[0.88rem] text-ink-soft mb-[10px]">Enquiries welcome for 2026 &amp; 2027</div>
              <span className="text-[0.85rem] border-b border-line-strong pb-[3px] group-hover:border-ink transition-colors">
                Start planning
              </span>
            </Link>
            <Link href="/birthday-cakes" className="cursor-pointer group reveal">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={statementPhotos[5].src}
                  alt={statementPhotos[5].alt}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.045]"
                />
              </div>
              <h3 className="font-serif text-[1.4rem] mb-2">Birthday Cakes</h3>
              <div className="text-[0.88rem] text-ink-soft mb-[10px]">Made to order, any age</div>
              <span className="text-[0.85rem] border-b border-line-strong pb-[3px] group-hover:border-ink transition-colors">
                View birthday cakes
              </span>
            </Link>
            <Link href="/birthday-cakes" className="cursor-pointer group reveal">
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <Image
                  src={whimsicalPhotos[0].src}
                  alt={whimsicalPhotos[0].alt}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.045]"
                />
              </div>
              <h3 className="font-serif text-[1.4rem] mb-2">Celebration Cakes</h3>
              <div className="text-[0.88rem] text-ink-soft mb-[10px]">For every other occasion</div>
              <span className="text-[0.85rem] border-b border-line-strong pb-[3px] group-hover:border-ink transition-colors">
                View celebration cakes
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED GALLERY */}
      <section className="section-alt">
        <div className="wrap">
          <div className="max-w-[640px] mb-16 reveal">
            <div className="eyebrow">From the bakery</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] mb-5">A few recent favourites</h2>
            <p className="text-ink-soft max-w-[52ch] font-light">
              A small selection of cakes baked for birthdays and celebrations across Cornwall this year.
            </p>
          </div>
          <div className="grid grid-cols-4 grid-rows-[220px_220px] gap-5 reveal max-[860px]:grid-cols-2 max-[860px]:grid-rows-[repeat(4,200px)]">
            {featuredPhotos.map((photo, i) => (
              <div
                key={photo.src}
                className={`overflow-hidden cursor-default relative group ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 860px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[0.8s] ease-out group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <div className="max-w-[640px] mb-16 reveal">
            <div className="eyebrow">The process</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)]">How it works</h2>
          </div>
          <div className="grid grid-cols-3 gap-[60px] max-[860px]:grid-cols-1 max-[860px]:gap-10">
            <div className="pt-7 border-t border-line reveal">
              <span className="font-serif italic text-[1.05rem] text-gold mb-3 block">First</span>
              <h3 className="font-serif text-[1.3rem] mb-[14px]">Send your enquiry</h3>
              <p className="text-ink-soft text-[0.96rem] font-light">
                Tell us your date, guest numbers and the feeling you&apos;re after. We&apos;ll reply personally
                within a couple of days with ideas and pricing.
              </p>
            </div>
            <div className="pt-7 border-t border-line reveal">
              <span className="font-serif italic text-[1.05rem] text-gold mb-3 block">Then</span>
              <h3 className="font-serif text-[1.3rem] mb-[14px]">Design together</h3>
              <p className="text-ink-soft text-[0.96rem] font-light">
                We&apos;ll talk through flavours, colours and finishing touches until the design feels
                completely right for your day.
              </p>
            </div>
            <div className="pt-7 border-t border-line reveal">
              <span className="font-serif italic text-[1.05rem] text-gold mb-3 block">Finally</span>
              <h3 className="font-serif text-[1.3rem] mb-[14px]">Baked &amp; delivered</h3>
              <p className="text-ink-soft text-[0.96rem] font-light">
                Your cake is baked fresh, finished by hand, and delivered and styled at your venue — ready for
                its moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section-alt">
        <div className="wrap">
          <div className="grid grid-cols-[0.85fr_1.15fr] gap-20 items-center max-[860px]:grid-cols-1">
            <Image
              src={elegantPhotos[2].src}
              alt={elegantPhotos[2].alt}
              width={600}
              height={580}
              className="w-full h-[580px] max-[860px]:h-[360px] object-cover reveal"
            />
            <div className="reveal">
              <div className="eyebrow">About the baker</div>
              <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.4rem)] mb-6">Hello, I&apos;m Jezz</h2>
              <p className="placeholder-note">
                This paragraph is a placeholder — tell me a bit about your story (how you started baking, your
                training, what you love about it) and I&apos;ll write your real About section.
              </p>
              <p className="text-ink-soft mb-[18px] max-w-[48ch] font-light">
                Every cake that leaves the kitchen is made by hand, from scratch, with the same care I&apos;d
                want for my own family&apos;s celebrations. I work with a small number of orders each week so
                every couple and every family gets proper time and attention.
              </p>
              <Link href="/about" className="btn btn-outline inline-flex">
                Read my full story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrap">
          <div className="max-w-[640px] mb-16 reveal">
            <div className="eyebrow">Kind words</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)] mb-5">What our customers say</h2>
            <p className="placeholder-note">
              Placeholder testimonials — send me a few real quotes (with first names) from happy customers and
              I&apos;ll drop them straight in.
            </p>
          </div>
          <div className="reveal overflow-x-auto [scrollbar-width:none]">
            <div className="flex gap-px bg-line">
              {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[min(440px,88vw)] bg-paper p-12 max-[600px]:p-8">
                  <span className="font-serif text-[2.4rem] text-gold leading-none mb-[14px] block">&ldquo;</span>
                  <p className="text-[1.08rem] mb-[22px] italic font-serif">
                    [Add a customer quote here — what they loved about their cake and the experience.]
                  </p>
                  <div className="text-[0.84rem] text-ink-soft">— Customer name, occasion</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECOND GALLERY */}
      <section className="section-alt">
        <div className="wrap">
          <div className="max-w-[640px] mb-16 reveal">
            <div className="eyebrow">More from the bakery</div>
            <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.6rem)]">Every celebration is different</h2>
          </div>
          <MasonryGallery photos={secondaryPhotos} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper text-center py-[120px] relative overflow-hidden">
        <div className="wrap reveal">
          <h2 className="text-white font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[16ch] mx-auto mb-[22px]">
            Ready to start planning your cake?
          </h2>
          <p className="text-white/66 max-w-[46ch] mx-auto mb-[38px] font-light">
            Tell us your date and your vision — we&apos;ll take care of the rest.
          </p>
          <Link href="/contact" className="btn btn-light">
            Make an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
