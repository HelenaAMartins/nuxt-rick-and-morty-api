<template>
  <div>
    <HomeHero />
    <HomeSlider :characters="characters" />
  </div>
</template>

<script>
export default {
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

