<template>
  <div class="relative bg-gray-50">
    <main class="lg:relative">
      <div
        class="
          mx-auto
          max-w-7xl
          w-full
          pt-16
          pb-20
          text-center
          lg:py-48 lg:text-left
        "
      >
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-5xl
              md:text-6xl
              lg:text-5xl
              xl:text-6xl
            "
          >
            <span class="block xl:inline text-green-600">Rick and Morty</span>
            {{ ' ' }}
            <span class="block text-green-600 xl:inline">Characters</span>
          </h1>
          <p
            class="
              mt-3
              max-w-md
              mx-auto
              text-lg text-green-500
              sm:text-xl
              md:mt-5 md:max-w-3xl
            "
          >
            This project was made using Rick and Morty API, Nuxt and Tailwind.
            Access my Github repository to know more.
          </p>
          <div class="mt-10 flex justify-center lg:justify-start">
            <a v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          target="_blank" class="mr-4 hover:text-green-900 text-green-600">
              <component :is="item.name" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="
          relative
          w-full
          h-64
          sm:h-72
          md:h-96
          lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full
        "
      >
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="/img/heroImg.jpg"
          alt=""
        />
      </div>
    </main>
  </div>
</template>

<script>
import {navigation} from '../../mocks/social'
export default {
  setup() {
    return {
      navigation,
    }
  },
}
</script>
