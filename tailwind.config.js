/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'godream-orange': '#FF6600',
                'godream-bg': '#FFFBF5',
            },
        },
    },
    plugins: [],
}