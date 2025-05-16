
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				aether: {
					50: '#f3f1ff',
					100: '#ebe5ff',
					200: '#d9ceff',
					300: '#bea6ff',
					400: '#9f75ff',
					500: '#8347ff',
					600: '#7122ff',
					700: '#6312ef',
					800: '#5311cc',
					900: '#440fa4',
					950: '#290078',
				},
				flow: {
					50: '#edfcff',
					100: '#d6f7ff',
					200: '#b5f0ff',
					300: '#83e8ff',
					400: '#48d4ff',
					500: '#1eb8ff',
					600: '#0696ff',
					700: '#007aff',
					800: '#0966d6',
					900: '#0f57aa',
					950: '#0f365d',
				},
				amber: {
					50: '#fffbeb',
					100: '#fef3c7',
					200: '#fde68a',
					300: '#fcd34d',
					400: '#fbbf24',
					500: '#f59e0b',
					600: '#d97706',
					700: '#b45309',
					800: '#92400e',
					900: '#78350f',
					950: '#451a03',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'flow-animation': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%',
						backgroundSize: '200% 200%',
					},
					'50%': { 
						backgroundPosition: '100% 50%',
						backgroundSize: '200% 200%' 
					},
				},
				'pulse-soft': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.8 },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flow-bg': 'flow-animation 15s ease infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-flow': 'linear-gradient(-45deg, #6312ef, #0966d6, #0f57aa, #290078)',
				'gradient-cta': 'linear-gradient(135deg, #f59e0b, #d97706)',
				'gradient-card': 'linear-gradient(180deg, rgba(43, 8, 108, 0.05) 0%, rgba(43, 8, 108, 0.02) 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
