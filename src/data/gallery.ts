export type CakePhoto = {
  src: string;
  alt: string;
  category: 'elegant' | 'statement' | 'whimsical';
};

export const elegantPhotos: CakePhoto[] = [
  {
    src: '/images/cakes/elegant-blush-macaron-candles.jpg',
    alt: 'Blush buttercream cake with pastel macarons, dried flowers and lit gold candles',
    category: 'elegant',
  },
  {
    src: '/images/cakes/elegant-blush-macaron-closeup.jpg',
    alt: 'Close-up of a blush buttercream cake ringed with lavender macarons and edible flowers',
    category: 'elegant',
  },
  {
    src: '/images/cakes/elegant-ivory-goldleaf-40th.jpg',
    alt: 'Ivory buttercream cake with gold leaf, Ferrero Rocher and chocolate shards, 40th birthday',
    category: 'elegant',
  },
  {
    src: '/images/cakes/elegant-ivory-goldleaf-birthday.jpg',
    alt: 'Ivory buttercream cake with gold leaf, Ferrero Rocher and chocolate shards',
    category: 'elegant',
  },
];

export const statementPhotos: CakePhoto[] = [
  {
    src: '/images/cakes/statement-mint-drip-daddy-outdoor.jpg',
    alt: 'Mint-green drip cake with chocolate shards, "Happy Birthday Daddy" topper',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-pink-21st-macaron-drip.jpg',
    alt: 'Pink 21st birthday drip cake with macarons and meringues',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-purple-drip-marshmallow.jpg',
    alt: 'Chocolate and purple drip cake with marshmallows and a white chocolate bar',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-gin-bottle-21st-drip.jpg',
    alt: '21st birthday drip cake with miniature gin bottles and pastel sprinkles',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-white-milk-choc-18th-drip.jpg',
    alt: 'White and milk chocolate drip cake with an 18th birthday topper',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-malteser-40th-drip.jpg',
    alt: '40th birthday chocolate drip cake topped with Maltesers',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-caramel-drip-daddy.jpg',
    alt: 'Caramel drip cake with chocolate pieces, "Happy Birthday Daddy" topper',
    category: 'statement',
  },
  {
    src: '/images/cakes/statement-choc-chunk-drip-daddy.jpg',
    alt: 'Chocolate drip cake piled with chocolate bar chunks, "Happy Birthday Daddy" topper',
    category: 'statement',
  },
];

export const whimsicalPhotos: CakePhoto[] = [
  {
    src: '/images/cakes/whimsical-penguin-tropical-two-tier.jpg',
    alt: 'Two-tier pastel drip cake with penguin figures and tropical dried palms, 6th birthday',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-unicorn-rainbow-drip.jpg',
    alt: 'Pink and purple unicorn birthday cake with rainbow details, 5th birthday',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-mermaid-cupcakes.jpg',
    alt: 'Mermaid-themed birthday cake with matching pastel mermaid tail cupcakes',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-pastel-cupcake-tower.jpg',
    alt: 'Three-tier stand of pastel swirl cupcakes with star toppers',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-mermaid-tail-shells.jpg',
    alt: 'Pastel mermaid tail birthday cake with shell details',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-mermaid-tail-side.jpg',
    alt: 'Pastel mermaid tail birthday cake, side angle',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-brownie-stack-horses.jpg',
    alt: 'Chocolate brownie stack birthday cake with toy horse figures, 10th birthday',
    category: 'whimsical',
  },
  {
    src: '/images/cakes/whimsical-penguin-ice-scene.jpg',
    alt: 'Penguin-themed fondant birthday cake with a hand-modelled ice scene, 4th birthday',
    category: 'whimsical',
  },
];

export const allPhotos: CakePhoto[] = [...elegantPhotos, ...statementPhotos, ...whimsicalPhotos];

export const featuredPhotos: CakePhoto[] = [
  statementPhotos[0],
  statementPhotos[1],
  whimsicalPhotos[6],
  elegantPhotos[0],
  statementPhotos[4],
];

export const rotatorPhotos: CakePhoto[] = [elegantPhotos[0], statementPhotos[1], whimsicalPhotos[1]];

export const secondaryPhotos: CakePhoto[] = [
  whimsicalPhotos[4],
  statementPhotos[2],
  whimsicalPhotos[7],
  whimsicalPhotos[3],
  elegantPhotos[3],
];
