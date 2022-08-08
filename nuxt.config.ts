import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/style.css"],
    publicRuntimeConfig: {  //在這裡的變數可以讓client端和server端存取
        SUPABASE_KEY: process.env.SUPABASE_KEY,
        SUPABASE_URL: process.env.SUPABASE_URL
    },
    modules:["@nuxt/ui"],
    build:{
        postcss:{
            postcssOptions:{
                plugins:{
                    tailwindcss:{},
                    autoprefixer : {}
                }
            }
        }
    },
});
