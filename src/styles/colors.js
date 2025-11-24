
/**
 * Complete Color System
 * Includes definitions for Tailwind configuration and JS usage.
 */

const colors = {
  // Neutral Palette (Slate-based for technical/clinical feel)
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
  },

  // Semantic - Success / Trust (Emerald)
  success: {
    light: '#d1fae5',
    DEFAULT: '#10b981',
    dark: '#047857',
  },

  // Semantic - Warning / Drift (Amber)
  warning: {
    light: '#fef3c7',
    DEFAULT: '#f59e0b',
    dark: '#b45309',
  },

  // Semantic - Risk / Critical (Red)
  risk: {
    light: '#fee2e2',
    DEFAULT: '#ef4444',
    dark: '#b91c1c',
  },

  // Semantic - Shield / Information (Blue)
  shield: {
    light: '#dbeafe',
    DEFAULT: '#3b82f6',
    dark: '#1d4ed8',
  },
  
  // Semantic - Audit / Evidence (Indigo)
  audit: {
    light: '#e0e7ff',
    DEFAULT: '#6366f1',
    dark: '#4338ca',
  },

  // Gradients (CSS strings)
  gradients: {
    cta: 'linear-gradient(to right, #36FFB5, #13C296)',
    dashboard: 'linear-gradient(to bottom right, #0A2342, #0A0A0A)',
    glow: 'radial-gradient(circle, rgba(54,255,181,0.2) 0%, rgba(19,194,150,0) 70%)',
  }
};

export default colors;
