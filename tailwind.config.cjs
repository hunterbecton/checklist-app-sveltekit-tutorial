const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			green: {
				one: '#E7F3EF',
				two: '#DDEEE9',
				three: '#C6E2D9',
				four: '#8CC5B3',
				five: '#39705E',
				six: '#1D3931'
			},
			gray: {
				one: '#E5E7EB',
				two: '#D1D5DB',
				three: '#4B5563',
				four: '#374151',
				five: '#111827'
			},
			olive: {
				one: '#E1EAE2',
				two: '#DAE5DB',
				three: '#A5C0A7',
				four: '#729C76'
			},
			cream: {
				one: '#FFFFFF',
				two: '#FEFEFB',
				three: '#FDFCF7',
				four: '#FCFBF4'
			},
			steel: {
				one: '#FAFAFA',
				two: '#F5F5F5',
				three: '#737373'
			},
			leaf: {
				one: '#E0E7A1'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
