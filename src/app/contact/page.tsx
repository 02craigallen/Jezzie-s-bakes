import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Make an Enquiry',
  description: 'Get in touch with Jezz Bakes about your wedding or birthday cake — we usually reply within 2 business days.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Make an enquiry"
        description="Tell us about your celebration and we'll reply personally, usually within a couple of days."
        light
      />
      <section className="!pt-5">
        <div className="wrap">
          <div className="grid grid-cols-[1fr_1.25fr] gap-20 items-start max-[900px]:grid-cols-1">
            <div className="reveal">
              <h2 className="font-serif text-[2rem] mb-[22px]">Let&apos;s talk cake</h2>
              <p className="text-ink-soft mb-8 max-w-[42ch] font-light">
                Whether you know exactly what you want or just have a Pinterest board and a date, we&apos;d
                love to hear from you.
              </p>

              <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-line">
                <div className="font-serif italic text-[0.92rem] text-gold">Email</div>
                <div className="text-[0.98rem]">
                  <a href="mailto:hello@jezzbakes.co.uk">hello@jezzbakes.co.uk</a>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-line">
                <div className="font-serif italic text-[0.92rem] text-gold">Phone</div>
                <div className="text-[0.98rem]">
                  <a href="tel:+441841000000">01841 000 000</a>
                </div>
              </div>
              <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-line">
                <div className="font-serif italic text-[0.92rem] text-gold">Based in</div>
                <div className="text-[0.98rem]">Padstow, Cornwall — delivering across the county</div>
              </div>
              <div className="flex flex-col gap-1 mb-6 pb-6 border-b border-line">
                <div className="font-serif italic text-[0.92rem] text-gold">Response time</div>
                <div className="text-[0.98rem]">Usually within 2 business days</div>
              </div>

              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="border border-line w-11 h-11 flex items-center justify-center text-[0.78rem] hover:bg-ink hover:text-paper hover:border-ink transition-colors"
                >
                  IG
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  className="border border-line w-11 h-11 flex items-center justify-center text-[0.78rem] hover:bg-ink hover:text-paper hover:border-ink transition-colors"
                >
                  FB
                </a>
              </div>
              <p className="placeholder-note">
                Placeholder contact details above — send me your real email, phone number and social links and
                I&apos;ll swap these in.
              </p>
            </div>

            <div className="reveal">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
