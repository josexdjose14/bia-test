import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-background': 'hsl(207, 26%, 17%)',
                'dark-element': 'hsl(209, 23%, 22%)',
                'dark-text': 'hsl(0, 0%, 100%)',
                'light-background': 'hsl(0, 0%, 98%)',
                'light-input': 'hsl(0, 0%, 52%)',
                'light-text': 'hsl(200, 15%, 8%)',
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