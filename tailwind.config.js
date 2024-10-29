/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Anton: ["Anton", "Roboto", "sans-serif"],
                ProtestStrike: ["Protest Strike", "Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
