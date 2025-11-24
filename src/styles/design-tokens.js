
/**
 * Selfix ProHealers Design Tokens
 * Single source of truth for design values.
 */

export const typography = {
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    mono: ['IBM Plex Mono', 'monospace'],
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  }
};

export const colors = {
  // Brand Colors
  brand: {
    primary: '#13C296',   // Emerald Trust Green
    accent: '#36FFB5',    // Neon Healing Green
    dark: '#0A0A0A',      // Midnight Black
    light: '#F3F5F7',     // Clinical White
  },
  // Semantic Colors
  semantic: {
    success: '#10B981',   // Emerald-500
    warning: '#F59E0B',   // Amber-500
    risk: '#EF4444',      // Red-500
    info: '#3B82F6',      // Blue-500
    audit: '#6366F1',     // Indigo-500
  },
  // Neutrals (Slate)
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  }
};

export const spacing = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
  12: '48px',
  16: '64px',
  24: '96px',
  32: '128px',
};

export const borderRadius = {
  sm: '0.25rem', // 4px
  md: '0.5rem',  // 8px
  lg: '0.75rem', // 12px
  xl: '1rem',    // 16px
  full: '9999px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  glow: '0 0 15px rgba(19, 194, 150, 0.5)', // Brand Glow
  'glow-lg': '0 0 25px rgba(54, 255, 181, 0.4)', // Accent Glow
};
