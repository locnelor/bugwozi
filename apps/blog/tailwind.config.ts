// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@pkg/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
