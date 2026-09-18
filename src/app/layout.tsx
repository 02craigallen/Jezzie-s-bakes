import type { Metadata } from 'next';
import { Fraunces, Jost } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealInit from '@/components/RevealInit';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jezzbakes.co.uk'),
  title: {
    default: "Jezz Bakes — Bespoke Wedding & Birthday Cakes in Padstow, Cornwall",
    template: '%s — Jezz Bakes',
  },
  description:
    "Jezz Bakes creates bespoke, hand-crafted wedding and birthday cakes in Padstow, Cornwall. Beautiful cakes for life's special moments — enquire today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="font-sans font-light">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <RevealInit />
      </body>
    </html>
  );
}
