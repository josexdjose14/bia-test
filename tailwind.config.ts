import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-blue': 'hsl(209, 23%, 22%)',               // Dark Mode Elements
                'very-dark-blue-bg': 'hsl(207, 26%, 17%)',        // Dark Mode Background
                'very-dark-blue-text': 'hsl(200, 15%, 8%)',       // Light Mode Text
                'gray-input': 'hsl(0, 0%, 52%)',                  // Light Mode Input
                'very-light-gray': 'hsl(0, 0%, 98%)',             // Light Mode Background
                'pure-white': 'hsl(0, 0%, 100%)',                 // Text in Dark Mode & Elements in Light Mode
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}

export default config