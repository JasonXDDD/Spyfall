// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  imports: {
    dirs: [
      'composables/**',
      'stores'
    ]
  },

  css: [
    '@/assets/css/swal.sass',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.sass'
  },
  modules: [
    "@nuxtjs/tailwindcss"
  ],
  app: {
    rootAttrs: {
      class: 'h-full w-full relative isolate z-0',
    },
  }
})