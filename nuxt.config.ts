
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', // needed
  '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxt/ui'],

})