export default defineNuxtConfig({
    ssr: false,

    devtools: { enabled: false },

    compatibilityDate: "2024-08-27",

    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5",
            htmlAttrs: {
                lang: "ko",
            },
            title: "Dragon Editor Document",
            meta: [{ name: "format-detection", content: "telephone=no" }],
        },
        rootId: "de",
    },

    css: ["@/assets/scss/common.scss"],

    modules: ["dragon-editor"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/variables" as *;`,
                },
            },
        },
        optimizeDeps: {
            include: ["highlight.js/lib/core"],
        },
    },
});
