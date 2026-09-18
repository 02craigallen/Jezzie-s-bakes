import Image from 'next/image';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  light?: boolean;
};

export default function PageHeader({ eyebrow, title, description, image, imageAlt, light }: Props) {
  if (light || !image) {
    return (
      <header className="relative pt-[190px] pb-[60px] px-0 bg-paper">
        <div className="wrap">
          <div className="eyebrow !text-gold">{eyebrow}</div>
          <h1 className="font-serif text-[clamp(2.1rem,4.4vw,3.2rem)] max-w-[18ch]">{title}</h1>
          {description && (
            <p className="max-w-[56ch] mt-5 text-[1.03rem] text-ink-soft font-light">{description}</p>
          )}
        </div>
      </header>
    );
  }

  return (
    <header className="relative pt-[190px] pb-[100px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt || ''} fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-[rgba(15,11,9,0.62)]" />
      </div>
      <div className="wrap relative z-[1] text-white">
        <div className="eyebrow !text-white/85">{eyebrow}</div>
        <h1 className="font-serif text-[clamp(2.1rem,4.4vw,3.2rem)] max-w-[18ch]">{title}</h1>
        {description && <p className="max-w-[56ch] mt-5 text-[1.03rem] opacity-90 font-light">{description}</p>}
      </div>
    </header>
  );
}
