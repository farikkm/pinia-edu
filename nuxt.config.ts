// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      'families': {
        Roboto: {
          wght: [300, 400, 700],
          ital: [300, 400]
        },
        "Comic Neue": [400, 700]
      }
    }]
  ],
  pinia: {
    storesDirs: ['./store/**']
  }
})