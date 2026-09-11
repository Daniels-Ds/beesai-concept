/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./packages/studio/src/**/*.{js,jsx}",
        "./packages/Open-AI-Design-Agent/packages/design-agent/src/**/*.{js,jsx}",
        "./packages/Open-Poe-AI/packages/agents/src/**/*.{js,jsx,ts,tsx}",
        "./packages/Vibe-Workflow/packages/workflow-builder/src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#F4A600', // Pollen Gold — основной акцент/CTA
                    hover: '#FFC126',   // Nectar Yellow — hover-состояние
                },
                accent: {
                    DEFAULT: '#682DA8', // AI Purple — слой моделей/AI-подсказок
                },
                'app-bg': '#070708',   // Hive Black
                'panel-bg': '#0c0c0d',
                'card-bg': '#141416',
                secondary: '#a1a1aa',
                muted: '#52525b',
                'warm-white': '#F5F3ED',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['Manrope', 'Inter Tight', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(244, 166, 0, 0.35)',      // pollen glow
                'glow-accent': '0 0 20px rgba(104, 45, 168, 0.4)', // purple/AI glow
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.8)',
            }
        },
    },
    plugins: [],
}
