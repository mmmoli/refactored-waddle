import baseConfig from "@repo/ui/tailwind.config";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "../../packages/shared-design-system-ui/src/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {},
} satisfies Config;
