import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-9 border-t border-line">
      <div className="wrap">
        <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-11 mb-14 max-[860px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <div className="mb-5">
              <Image src="/images/logo/logo-mark.png" alt="Jezz Bakes" width={80} height={80} className="h-20 w-auto" />
            </div>
            <p className="max-w-[32ch] text-ink-soft text-sm">
              Bespoke wedding and birthday cakes, handcrafted in Padstow and delivered across Cornwall.
            </p>
          </div>
          <div>
            <h4 className="font-serif italic text-base mb-[18px]">Explore</h4>
            <Link href="/wedding-cakes" className="block text-sm text-ink-soft hover:text-ink mb-[11px]">
              Wedding Cakes
            </Link>
            <Link href="/birthday-cakes" className="block text-sm text-ink-soft hover:text-ink mb-[11px]">
              Birthday &amp; Celebration
            </Link>
            <Link href="/gallery" className="block text-sm text-ink-soft hover:text-ink mb-[11px]">
              Gallery
            </Link>
            <Link href="/about" className="block text-sm text-ink-soft hover:text-ink mb-[11px]">
              About the Baker
            </Link>
          </div>
          <div>
            <h4 className="font-serif italic text-base mb-[18px]">Contact</h4>
            <a href="mailto:hello@jezzbakes.co.uk" className="block text-sm text-ink-soft hover:text-ink mb-[11px]">
              hello@jezzbakes.co.uk
            </a>
            <a href="tel:+441841000000" className="block text-sm text-ink-soft hover:text-ink mb-[11px]">
              01841 000 000
            </a>
            <p className="text-sm text-ink-soft mb-[11px]">Padstow, Cornwall</p>
          </div>
          <div>
            <h4 className="font-serif italic text-base mb-[18px]">Follow</h4>
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="block text-sm text-ink-soft hover:text-ink mb-[11px]"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener"
              className="block text-sm text-ink-soft hover:text-ink mb-[11px]"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center text-[0.8rem] text-ink-faint flex-wrap gap-2 pt-7 border-t border-line">
          <span>&copy; {year} Jezz Bakes. All rights reserved.</span>
          <span>Handmade in Padstow, Cornwall</span>
        </div>
      </div>
    </footer>
  );
}
