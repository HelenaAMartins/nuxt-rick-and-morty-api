<template>
  <div>
    <HomeHero />
    <HomeSlider :characters="characters" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home - Rick and Morty Nuxt',
  },
  async fetch() {
    this.characters = await fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((res) => res.results)
  },

  data() {
    return {
      characters: [],
    }
  },
}
</script>

