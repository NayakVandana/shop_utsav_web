import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import { extend } from 'lodash'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  plugins: [
    daisyui,
    require('tailwind-scrollbar-daisyui'),
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": "#E6F8E1",
          "100": "#CCEEC3",
          "200": "#99DD88",
          "300": "#66CC4D",
          "400": "#00B33F",
          "500": "#008F32",
          "600": "#006B26",
          "700": "#00471A",
          "800": "#446A51",
          "900": "#1E4C2E"
        },
        "secondary": {
          "50": "#EBEDF2",
          "100": "#D7D9E5",
          "200": "#AEB3CA",
          "300": "#868DAC",
          "400": "#5F678F",
          "500": "#494F62",
          "600": "#343940",
          "700": "#2A2F34",
          "800": "#1E2126",
          "900": "#02091D"
        },
        "light-gray": "#F6F6F6",
        "dark-gray": "#D6D9CF",      
        // "dark-green": "#1E4C2E",     
        "table-header-primary": "#DEDEDE",
        "table-header-second": "#EDEDED",
        "light-primary": "#E6F8E1",
        // "primary-50": "#bad8f4",
        "primary-muted": "hsl(var(--primary-muted) / <alpha-value>)",

      },
    },
  },
  daisyui: {
    base: true, utils: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          // "primary": "#00203D",
          // "secondary": "#0092C8",
          "primary": "#00B33F",
          "primary-content": "#fff",
          "secondary": "#00203D",
          "secondary-content": "#fff",
          // 'light-primary': '#bad8f4',
          // "light-primary-content": "#fff",

          // "accent": "#006cf6",
          // "neutral": "#12010e",
          "neutral": "#E6F8E1", // active bg color 
          // "accent": "#d1f3ff",
          "neutral-content": "#000",
          // "info": "#008ef2",
          "success": "#00a931",
          "success-content": "#fff",
          "warning": "#f5b500",
          "error": "#c42843",
          "error-content": "#fff",
          "--input-disabled": "rgba(0, 0, 0)",
          "--tooltip-color": "rgba(0, 0, 0, 0.87)",
          "--tooltip-background": "rgba(0, 0, 0, 0.87)",

          "base-300": "#F6F6F6",
          "base-content": "#494F62",
          // "--rounded-btn": "0rem",
          // "--rounded-box": "0.25rem",
          // "--tab-border": "2px",
          // "--tab-radius": "0.7rem",

          // "--animation-btn": "0",
          // "--animation-input": "0",
          // "--btn-focus-scale": "1",

          // "--rounded-badge": "0.125rem",

        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#0092C8",
          "primary-content": "#fff",
          "secondary": "#00203D",
          "secondary-content": "#fff",
          "accent": "#4D2A19",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          // "success": "#36D399",
          // "warning": "#FBBD23",
          // "error": "#F87272",
          "success": "#00a931",
          "success-content": "#fff",
          "warning": "#f5b500",
          "error": "#c42843",
          "error-content": "#fff",
          "--input-disabled-color": "rgba(255, 255, 255)"
        },

      },
    ],
  },
}
export default config
