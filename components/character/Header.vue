<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div>
      <img
        class="h-32 w-full object-cover lg:h-80"
        src="/img/bg-image.jpg"
        alt=""
      />
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex">
          <img
            class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
            :src="character.image"
            alt=""
          />
        </div>
        <div
          class="
            mt-6
            sm:flex-1
            sm:min-w-0
            sm:flex
            sm:items-center
            sm:justify-end
            sm:space-x-6
            sm:pb-1
          "
        >
          <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1 pt-6">
            <h1 class="text-2xl font-bold text-gray-900 truncate mb-4">
              {{ character.name }}
            </h1>
            <div>
              <span
                class="
                  px-4
                  py-1
                  inline-flex
                  text-xs
                  leading-5
                  font-semibold
                  rounded-full
                  bg-purple-900
                  text-purple-100
                "
                ><b class="pr-2"> Origin:</b> {{ character.origin.name }}</span
              >
              <span
                class="
                  px-4
                  py-1
                  inline-flex
                  text-xs
                  leading-5
                  font-semibold
                  rounded-full
                  bg-purple-900
                  text-purple-100
                  my-2
                "
                ><b class="pr-2"> Location: </b>
                {{ character.location.name }}</span
              >
              <span
                class="
                  px-4
                  py-1
                  inline-flex
                  text-xs
                  leading-5
                  font-semibold
                  rounded-full
                "
                :class="statusClass(character.status)"
              >
                <b class="pr-2">Status: </b> {{ character.status }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
        <h1 class="text-2xl font-bold text-gray-900 truncate">
          {{ character.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { statusClass } from '@/utils'

export default {
  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    statusClass,
  },
}
</script>
