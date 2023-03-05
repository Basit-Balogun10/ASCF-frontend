/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                ourRed: "#ec1717",
                ourDarkRed: "#ca0909",
                ourBlack: "#1b1a1a",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                secularOne: ["Secular One", "sans-serif"],
            },
        },
    },
    plugins: [],
};
