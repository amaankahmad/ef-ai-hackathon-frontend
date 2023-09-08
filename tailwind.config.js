/** @type {import('tailwindcss').Config} */


module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
    plugins: [require("flowbite/plugin")],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                },
                "home-card-1": "#092056",
                "home-card-2": "#D6E53D",
                "home-card-3": "#E3675D",
                "home-card-4": "#8C3B95",
                "home-card-5": "#4CA9C3",
            },
        },
        screens:{
            'xs': { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
            'sm': '576px', // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
            'md': '898px', // Tablet (matches max: iPad Pro @ 1112px).
            'lg': '1024px', // Desktop smallest.
            'xl': '1280px', // Desktop wide.
            '2xl': '1536px', // Desktop widescreen.
        },
        fontFamily: {
            body: [
                "Avenir",
                "Inter", 
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
            sans: [
                "Avenir",
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "system-ui",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
    },
    '@font-face': {
        fontFamily: 'Avenir',
        src: 'url("/fonts/Avenir-Regular.ttf") format("truetype")',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
};
