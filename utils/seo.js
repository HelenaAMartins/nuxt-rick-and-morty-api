export const seo = (pageTitle) => {
  return {
    title: `${pageTitle} - Rick and Morty API fetch with Nuxt`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rick and Morty API fetch with Nuxt' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: `Nuxt project - Rick and Morty API`,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: `${pageTitle} - Rick and Morty API fetch with Nuxt`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Rick and Morty API fetch with Nuxt',
      },
      { hid: 'og:image', property: 'og:image', content: 'https://nuxt-rick-and-morty-api.vercel.app/share.png'},
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxt-rick-and-morty-api.vercel.app',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  }
}
