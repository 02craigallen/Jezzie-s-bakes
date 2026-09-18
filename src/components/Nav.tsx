'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/wedding-cakes', label: 'Wedding Cakes' },
  { href: '/birthday-cakes', label: 'Birthday & Celebration' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-[background,padding,border-color] duration-300 border-b ${
          solid
            ? 'bg-paper/95 backdrop-blur-md py-3 border-line'
            : 'py-6 border-transparent'
        }`}
      >
        <div className="wrap grid grid-cols-[1fr_auto_1fr] items-center gap-5 max-[900px]:grid-cols-[auto_1fr_auto]">
          <div className="hidden md:flex items-center gap-9 text-[0.88rem] justify-start">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 transition-colors ${
                  pathname === l.href ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="absolute left-0 right-0 -bottom-[3px] h-px bg-gold" />
                )}
              </Link>
            ))}
          </div>
          <Link
            href="/"
            className="flex items-center justify-center cursor-pointer col-start-1 md:col-start-2 justify-self-start md:justify-self-auto"
            aria-label="Jezz Bakes home"
          >
            <Image
              src="/images/logo/logo-mark.png"
              alt="Jezz Bakes"
              width={104}
              height={104}
              priority
              className={`w-auto transition-[height] duration-300 ${solid ? 'h-[52px] md:h-[60px]' : 'h-[60px] md:h-[104px]'}`}
            />
          </Link>
          <div className="hidden md:flex items-center gap-9 text-[0.88rem] justify-end">
            <Link
              href="/about"
              className={`py-1 transition-colors ${
                pathname === '/about' ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              About
            </Link>
            <Link href="/contact" className="btn border border-ink py-[9px] px-5 hover:bg-ink hover:text-paper transition-colors">
              Enquire
            </Link>
          </div>
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 justify-self-end z-[1100]"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="w-[22px] h-px bg-ink block" />
            <span className="w-[22px] h-px bg-ink block" />
            <span className="w-[22px] h-px bg-ink block" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 bg-paper z-[1050] flex flex-col items-center justify-center gap-8">
          <Link href="/" className="font-serif text-2xl">
            Home
          </Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-serif text-2xl">
              {l.label}
            </Link>
          ))}
          <Link href="/about" className="font-serif text-2xl">
            About
          </Link>
          <Link href="/contact" className="btn btn-primary mt-2">
            Make an Enquiry
          </Link>
        </div>
      )}
    </>
  );
}
