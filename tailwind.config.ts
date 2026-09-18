import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-deep': 'var(--paper-deep)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        gold: 'var(--gold)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-jost)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1240px',
      },
      keyframes: {
        fadein: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        fadein: 'fadein 0.6s ease',
      },
    },
  },
  plugins: [],
};

export default config;
