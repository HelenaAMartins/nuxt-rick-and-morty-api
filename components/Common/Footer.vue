<template>
  <footer class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        md:flex md:items-center md:justify-between
        lg:px-8
      "
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-white hover:text-purple-100"
        >
          <component :is="item.name" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1 flex">
        <IconsComputer class="text-white hidden sm:block" />
        <p class="text-center text-xs md:text-base text-white ml-4">
          Check code and credits on Github repository.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { navigation } from '../../mocks/social'

export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>
