
/**
 * Extended Tailwind Configuration
 * Copy content from here to tailwind.config.js 'extend' section if needed manually,
 * or import this file if using a preset strategy.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          primary: '#13C296',
          accent: '#36FFB5',
          dark: '#0A0A0A',
          light: '#F3F5F7',
        },
        // Semantic aliases
        success: '#10b981', // Emerald 500
        warning: '#f59e0b', // Amber 500
        risk: '#ef4444',    // Red 500
        info: '#3b82f6',    // Blue 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(19, 194, 150, 0.5)',
        'glow-lg': '0 0 25px rgba(54, 255, 181, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at center, rgba(19, 194, 150, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    }
  }
};
