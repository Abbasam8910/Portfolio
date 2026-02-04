import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyan: {
          400: '#22d3ee',
          500: '#00d9ff',
          600: '#06b6d4',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 217, 255, 0.3)',
        'glow': '0 0 20px rgba(0, 217, 255, 0.4)',
        'glow-lg': '0 0 30px rgba(0, 217, 255, 0.5)',
        'glow-xl': '0 0 40px rgba(0, 217, 255, 0.6)',
      },
    },
  },
  plugins: [],
};
export default config;
