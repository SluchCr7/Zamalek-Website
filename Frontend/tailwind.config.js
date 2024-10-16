/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  	darkMode: 'class',
	theme: {
  	extend: {
  		colors: {
  			MODE1: {
  				primary: '#ffffff',
  				secondary: '#bf0603',
  				third: '#000814',
  				add: '#0e0d0b'
  			},
  			MODE2: {
  				primary: '#000000',
  				secondary: '#fdb833',
  				third: '#e9eaec',
  				add: '#e4c590'
			},
			dark: {
				primary: '#000000',
				secondary: '#fdb833',
				third: '#e9eaec',
				add: '#e4c590'
			}
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
