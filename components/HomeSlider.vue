<template>
  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div
    class="container justify-center flex flex-col align-center mx-auto h-screen "
  >
  <Title title="Characters" center color="text-white"/>

    <carousel
      :perPageCustom="[
        [768, 3],
        [1024, 4],
      ]"
    >
      <slide v-for="character in characters" :key="character.id" class="h-full">
        <CharCard :character="character" />
      </slide>
    </carousel>
  </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    characters:{
      type: Array,
      default: []
    }
  }
}
</script>

