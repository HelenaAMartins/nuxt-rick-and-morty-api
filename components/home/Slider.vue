<template>
  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div
      class="
        container
        justify-center
        flex flex-col
        align-center
        mx-auto
        h-screen
      "
    >
      <CommonTitle title="Characters" center color="text-white" />

      <carousel
        :paginationSize="5"
        :perPageCustom="[
          [320, 1],
          [768, 3],
          [1024, 4],
        ]"
      >
        <slide
          v-for="character in characters"
          :key="character.id"
          class="h-full"
        >
          <HomeCard :character="character" />
        </slide>
      </carousel>
      <div class="flex justify-center mt-8">
        <NuxtLink
          to="/characters"
          class="
            px-5
            py-3
            rounded
            bg-green-300
            text-green-900
            hover:bg-green-500 hover:text-white
            text-base
            font-medium
          "
        >
          See all characters
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    characters: {
      type: Array,
      default: [],
    },
  },
}
</script>


<style scoped>
::v-deep(.VueCarousel-dot-container) {
  display: none;
}

@media (min-width: 768px) {
  ::v-deep(.VueCarousel-dot-container) {
    display: block;
  }
}
</style>
