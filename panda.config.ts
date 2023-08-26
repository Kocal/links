import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  patterns: {
    extend: {
      link: {
        description: "A link component",
        properties: {
          color: {
            type: "token",
            value: "colors",
            property: "backgroundColor",
          },
        },
        blocklist: ["bg"],
        transform(props: { [x: string]: any; color: any; }) {
          const { color, ...rest } = props;
          return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: "white",
            backgroundColor: color,
            shadow: {
              base: "lg",
              _hover: "xl",
            },
            p: 4,
            textAlign: "center",
            fontWeight: "medium",
            textTransform: "uppercase",
            userSelect: "none",
            letterSpacing: "widest",
            transition: "filter 0.2s ease-in-out",
            filter: {
              _hover: "brightness(1.15)",
            },
            ...rest,
          };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "src/styled-system",
});
