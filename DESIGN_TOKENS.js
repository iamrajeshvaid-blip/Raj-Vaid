// ============================================
// 🐺 WOLF PACK FITNESS - DESIGN TOKENS
// ============================================

/**
 * Complete design system for consistent branding
 * Copy these values into your tools (Figma, Design Systems)
 */

// ============================================
// COLOR PALETTE
// ============================================

const COLORS = {
    // Primary (Dark/Background)
    'primary-dark': {
        0: '#FFFFFF',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#0F172A',      // 🟣 MAIN DARK BACKGROUND
    },

    // Accent (Neon Blue)
    'neon-blue': {
        50: '#E0F7FF',
        100: '#B3EDFF',
        200: '#80E3FF',
        300: '#4DD9FF',
        400: '#1ACFFF',
        500: '#00D9FF',      // 🔷 PRIMARY NEON (Main brand color)
        600: '#00A8CC',
        700: '#008099',
        800: '#005866',
        900: '#003033',
    },

    // Accent (Cyan)
    'neon-cyan': {
        50: '#E0F7FF',
        100: '#B0E9FF',
        200: '#7FD3FF',
        300: '#4EBDFF',
        400: '#2DA5FF',
        500: '#0EA5E9',      // 🔵 SECONDARY ACCENT
        600: '#0284C7',
        700: '#0369A1',
        800: '#075985',
        900: '#0E3A5D',
    },

    // Accent (Purple)
    'neon-purple': {
        50: '#F5E6FF',
        100: '#EACDFF',
        200: '#D5A0FF',
        300: '#C077F0',
        400: '#B873F5',
        500: '#A855F7',      // 🟣 ACCENT PURPLE
        600: '#9333EA',
        700: '#7E22CE',
        800: '#6B21A8',
        900: '#581C87',
    },

    // Accent (Wolf Gold - Badges/Rewards)
    'wolf-gold': {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#FCD34D',
        400: '#FBBF24',
        500: '#F59E0B',      // 🟠 GOLD/REWARD COLOR
        600: '#D97706',
        700: '#B45309',
        800: '#92400E',
        900: '#78350F',
    },

    // Status Colors
    'success': '#22C55E',
    'error': '#EF4444',
    'warning': '#F59E0B',
    'info': '#3B82F6',
    'muted': '#94A3B8',
};

// ============================================
// TYPOGRAPHY
// ============================================

const TYPOGRAPHY = {
    // Font Stack
    'font-family': {
        'base': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        'mono': "'Courier New', Courier, monospace",
    },

    // Font Sizes
    'font-size': {
        'xs': '0.75rem',      // 12px
        'sm': '0.875rem',     // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
    },

    // Font Weight
    'font-weight': {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
    },

    // Line Height
    'line-height': {
        'tight': 1.2,
        'normal': 1.5,
        'relaxed': 1.75,
        'loose': 2,
    },

    // Letter Spacing
    'letter-spacing': {
        'tight': '-0.02em',
        'normal': '0em',
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
    },
};

// ============================================
// SHADOWS & EFFECTS
// ============================================

const SHADOWS = {
    'shadow': {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'base': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
    },

    'glow': {
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5)',
        'neon-blue-lg': '0 0 40px rgba(0, 217, 255, 0.8)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'neon-cyan': '0 0 20px rgba(14, 165, 233, 0.5)',
    },

    'backdrop': {
        'blur': 'blur(10px)',
        'blur-sm': 'blur(4px)',
        'blur-lg': 'blur(16px)',
    },
};

// ============================================
// SPACING SCALE
// ============================================

const SPACING = {
    'xs': '0.25rem',      // 4px
    'sm': '0.5rem',       // 8px
    'md': '1rem',         // 16px
    'lg': '2rem',         // 32px
    'xl': '4rem',         // 64px
    '2xl': '8rem',        // 128px
};

// ============================================
// BORDER RADIUS
// ============================================

const BORDER_RADIUS = {
    'none': '0px',
    'sm': '0.125rem',     // 2px
    'base': '0.25rem',    // 4px
    'md': '0.375rem',     // 6px
    'lg': '0.5rem',       // 8px
    'xl': '0.75rem',      // 12px
    '2xl': '1rem',        // 16px
    'full': '9999px',
};

// ============================================
// Z-INDEX SCALE
// ============================================

const Z_INDEX = {
    'background': -1,
    'base': 0,
    'sticky': 10,
    'fixed': 20,
    'modal-backdrop': 30,
    'modal': 40,
    'popover': 50,
    'tooltip': 60,
    'notification': 100,
};

// ============================================
// BREAKPOINTS (Responsive)
// ============================================

const BREAKPOINTS = {
    'xs': '320px',     // Mobile
    'sm': '480px',     // Mobile landscape
    'md': '768px',     // Tablet
    'lg': '1024px',    // Desktop
    'xl': '1280px',    // Large desktop
    '2xl': '1536px',   // Extra large
};

// ============================================
// ANIMATIONS
// ============================================

const ANIMATIONS = {
    'duration': {
        'fast': '100ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '800ms',
    },

    'easing': {
        'linear': 'linear',
        'ease': 'ease',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    'presets': {
        'fadeIn': 'fade 300ms ease-in-out',
        'slideUp': 'slideUp 400ms ease-out',
        'bounce': 'bounce 500ms ease-in-out infinite',
        'glow': 'glow 2000ms ease-in-out infinite',
        'pulse': 'pulse 2000ms ease-in-out infinite',
    },
};

// ============================================
// COMPONENT SIZES
// ============================================

const COMPONENTS = {
    'button': {
        'height': {
            'sm': '32px',
            'md': '40px',
            'lg': '48px',
            'xl': '56px',
        },
        'padding': {
            'sm': '8px 16px',
            'md': '12px 24px',
            'lg': '16px 32px',
            'xl': '20px 40px',
        },
    },

    'input': {
        'height': '44px',
        'padding': '12px 16px',
        'font-size': '16px',
        'border-radius': '8px',
    },

    'card': {
        'border-radius': '12px',
        'padding': '24px',
        'transition': '300ms ease',
    },

    'modal': {
        'max-width': '420px',
        'border-radius': '16px',
        'padding': '32px',
    },
};

// ============================================
// GRADIENT COMBINATIONS
// ============================================

const GRADIENTS = {
    'primary': 'linear-gradient(135deg, #00D9FF, #0EA5E9)',
    'accent': 'linear-gradient(135deg, #A855F7, #0EA5E9)',
    'dark': 'linear-gradient(135deg, #1E293B, #0F172A, #1E293B)',
    'gold': 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    'danger': 'linear-gradient(135deg, #EF4444, #F87171)',
};

// ============================================
// USAGE IN CSS
// ============================================

/*
Example usage in styles.css:

:root {
  --neon-blue: #00d9ff;
  --neon-cyan: #0ea5e9;
  --neon-purple: #a855f7;
  --wolf-gold: #f59e0b;
  --primary-dark: #0f172a;
  --secondary-dark: #1e293b;
  
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 4rem;
  
  --gradient-neon: linear-gradient(135deg, #00d9ff, #0ea5e9);
  --shadow-glow: 0 0 20px rgba(0, 217, 255, 0.5);
}

.btn-primary {
  background: var(--gradient-neon);
  color: var(--primary-dark);
  padding: var(--spacing-md) var(--spacing-lg);
  box-shadow: var(--shadow-glow);
  font-weight: 600;
  letter-spacing: 0.05em;
}

.login-card {
  background: rgba(30, 41, 59, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: var(--spacing-xl);
  transition: all 300ms ease;
}
*/

// ============================================
// ACCESSIBILITY
// ============================================

const A11Y = {
    // Focus states (essential for keyboard users)
    'focus-ring': '2px solid #00d9ff',
    'focus-offset': '2px',

    // Minimum touch target size
    'touch-target-min': '44px',

    // Color contrast (WCAG AA)
    'contrast-ratio-min': '4.5:1',  // Normal text
    'contrast-ratio-large': '3:1',  // Large text (18pt+)

    // High contrast mode
    'high-contrast': {
        'text-color': '#000000',
        'background-color': '#FFFFFF',
        'border-color': '#000000',
    },
};

// ============================================
// DARK MODE SUPPORT
// ============================================

/*
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0f172a;
    --foreground: #e2e8f0;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    --background: #ffffff;
    --foreground: #0f172a;
  }
}
*/

// ============================================
// EXPORT & INTEGRATION
// ============================================

/*
To use these tokens:

1. In CSS:
   - Copy CSS custom properties to :root
   - Reference with var(--token-name)

2. In Figma/Design:
   - Create Variables/Styles for each color
   - Use consistent naming (kebab-case)

3. In Tailwind (if migrating):
   - Map to tailwind.config.js
   - Extend with custom values

4. In Component Library:
   - Export as JavaScript object
   - Use with styled-components or CSS-in-JS

5. In Documentation:
   - Create Storybook stories for each component
   - Show variants (hover, active, disabled, etc.)
   - Include usage guidelines
*/

// ============================================
// QUICK REFERENCE
// ============================================

const QUICK_REFERENCE = {
    'primary-action': {
        'background': '#00D9FF to #0EA5E9',  // gradient
        'text': '#0F172A',  // dark
        'shadow': '0 0 20px rgba(0, 217, 255, 0.5)',  // glow
        'hover': 'scale 1.05 + stronger glow',
    },

    'secondary-action': {
        'background': 'rgba(100, 116, 139, 0.3)',
        'border': '1px solid rgba(100, 116, 139, 0.6)',
        'text': '#E2E8F0',  // light
        'hover': 'background increase + border-color neon-blue',
    },

    'card-background': {
        'background': 'rgba(30, 41, 59, 0.6)',
        'backdrop': 'blur(10px)',
        'border': '1px solid rgba(0, 217, 255, 0.3)',
        'shadow': '0 8px 32px rgba(0, 217, 255, 0.1)',
    },

    'input-field': {
        'background': 'rgba(15, 23, 42, 0.5)',
        'border': '1px solid rgba(0, 217, 255, 0.5)',
        'text': '#E2E8F0',
        'focus': 'border #00D9FF + glow + bg increase',
    },
};

console.log('✨ Design tokens ready to use!');
console.log('Copy colors & values into your components');
console.log('Maintain consistency across all UI!');
