import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Mountain landscape colors
        mountain: {
          dark: "hsl(var(--mountain-dark))",
          mid: "hsl(var(--mountain-mid))",
          light: "hsl(var(--mountain-light))",
        },
        // Sky colors for different times
        sky: {
          dawn: "hsl(var(--sky-dawn))",
          morning: "hsl(var(--sky-morning))",
          midday: "hsl(var(--sky-midday))",
          afternoon: "hsl(var(--sky-afternoon))",
          evening: "hsl(var(--sky-evening))",
        },
        // Retro gaming colors
        retro: {
          green: "hsl(var(--retro-green))",
          cyan: "hsl(var(--retro-cyan))",
          amber: "hsl(var(--retro-amber))",
          magenta: "hsl(var(--retro-magenta))",
        },
      },
      // Custom backgrounds with gradients
      backgroundImage: {
        'gradient-dawn': 'var(--gradient-dawn)',
        'gradient-morning': 'var(--gradient-morning)',
        'gradient-midday': 'var(--gradient-midday)',
        'gradient-afternoon': 'var(--gradient-afternoon)',
        'gradient-evening': 'var(--gradient-evening)',
      },
      // Font families
      fontFamily: {
        'retro': 'var(--font-retro)',
        'mono': 'var(--font-mono)',
      },
      // Custom shadows
      boxShadow: {
        'pixel': 'var(--shadow-pixel)',
        'retro': 'var(--shadow-retro)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Plane animations
        "plane-glide": {
          "0%": {
            transform: "translateX(-100px) translateY(10px)",
          },
          "50%": {
            transform: "translateX(50vw) translateY(-5px)",
          },
          "100%": {
            transform: "translateX(calc(100vw + 100px)) translateY(0px)",
          },
        },
        "cat-popup": {
          "0%": { 
            transform: "translateY(0px) scale(1)",
            opacity: "1",
          },
          "50%": { 
            transform: "translateY(-20px) scale(1.1)",
            opacity: "1",
          },
          "100%": { 
            transform: "translateY(0px) scale(1)",
            opacity: "1",
          },
        },
        // Pixel art glitch effect
        "pixel-glitch": {
          "0%, 100%": { 
            transform: "translate(0)",
            filter: "hue-rotate(0deg)",
          },
          "20%": { 
            transform: "translate(-2px, 2px)",
            filter: "hue-rotate(5deg)",
          },
          "40%": { 
            transform: "translate(-2px, -2px)",
            filter: "hue-rotate(-5deg)",
          },
          "60%": { 
            transform: "translate(2px, 2px)",
            filter: "hue-rotate(5deg)",
          },
          "80%": { 
            transform: "translate(2px, -2px)",
            filter: "hue-rotate(-5deg)",
          },
        },
        // Retro blink
        "retro-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0.3" },
        },
        // Fade in with retro feel
        "retro-fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px) scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "plane-glide": "plane-glide 20s linear infinite",
        "cat-popup": "cat-popup 0.5s ease-out",
        "pixel-glitch": "pixel-glitch 0.2s ease-in-out",
        "retro-blink": "retro-blink 2s infinite",
        "retro-fade-in": "retro-fade-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
