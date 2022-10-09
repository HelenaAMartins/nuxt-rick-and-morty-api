<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div
      class="
        max-w-7xl
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <h2
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        <span class="block">Would you like to check the code?</span>
        <span class="block text-indigo-600"
          >Take a look at the Github repository.</span
        >
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            href="https://github.com/HelenaAMartins/nuxt-rick-and-morty-api"
            target="_blank"
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-purple-600
              hover:bg-purple-700
            "
          >
            See repository
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <button
            @click="toggleModal"
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-purple-600
              bg-white
              hover:bg-purple-50
            "
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
    <CommonModalForm/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["toggleModal"]),
  },
}
</script>
