<template>
  <div>
    <HomeHero />
    <HomeSlider :characters="characters" />
  </div>
</template>

<script>
import { seo } from '@/utils/seo'

export default {
  head() {
    return {
      ...seo('Home'),
    }
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

