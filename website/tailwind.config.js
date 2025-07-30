/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./docs/**/*.{md,mdx}",
        "./blog/**/*.{md,mdx}",
    ],
    corePlugins: { preflight: false },
    theme: {
        extend: {},
    },
    plugins: [],
};