import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              circular: ["circular-web", "sans-serif"],   // circular-web font
              general: ["General", "sans-serif"],         // General font
              "robert-regular": ["robert-regular", "sans-serif"],
              "robert-medium": ["robert-medium", "sans-serif"],
              zentry: ["zentry", "sans-serif"]           // lowercase to match @font-face
            },
            colors: {
              blue: {
                50: "#DFDFF0",
                75: "#DFDFF2",
                100: "#F0F2FA",
                200: "#010101",
                300: "#4FB7DD"
              },
              violet: {
                300: "#5724FF"
              },
              yellow: {
                100: "#8E983F",
                300: "#EDFF66"
              }
            }
          }
        }
      }
    })
  ]
});
