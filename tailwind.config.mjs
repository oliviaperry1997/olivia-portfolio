/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                border: "rgb(var(--color-border) / <alpha-value>)",
                input: "rgb(var(--color-input) / <alpha-value>)",
                ring: "rgb(var(--color-ring) / <alpha-value>)",
                background: "rgb(var(--color-background) / <alpha-value>)",
                foreground: "rgb(var(--color-foreground) / <alpha-value>)",
                primary: {
                    DEFAULT: "var(--color-primary)",
                    foreground: "var(--color-primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary)",
                    foreground: "var(--color-secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--color-destructive)",
                    foreground: "var(--color-destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--color-muted)",
                    foreground: "var(--color-muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--color-accent)",
                    foreground: "var(--color-accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--color-popover)",
                    foreground: "var(--color-popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--color-card)",
                    foreground: "var(--color-card-foreground)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "var(--radius-md)",
                sm: "var(--radius-sm)",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
