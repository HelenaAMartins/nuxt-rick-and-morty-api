<template>
  <nav class="px-2 sm:px-4 py-4 bg-purple-500">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <h1 class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white"
          >Rick and Morty</span
        >
      </h1>
      <button class="flex flex-col md:hidden" @click="navOpen = !navOpen">
        <span class="bg-white px-3 py-0.5"></span>
        <span class="bg-white px-3 py-0.5 my-1"></span>
        <span class="bg-white px-3 py-0.5"></span>
      </button>
      <!-- nav mobile -->
      <div
        class="
          w-full
          md:hidden md:w-auto
          fixed
          top-14
          bg-purple-600
          left-0
          pb-3
          z-10
        "
        id="navbar-default"
        v-show="navOpen"
      >
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            text-purple-200
          "
        >
          <li @click="navOpen = !navOpen">
            <NuxtLink
              v-for="item in nav"
              :key="item.name"
              :to="item.link"
              class="block py-2 pr-4 pl-3"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <!-- nav desktop -->
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row
            md:space-x-8
            md:mt-0
            md:text-sm
            md:font-medium
            md:border-0
            text-purple-200
          "
        >
          <li>
            <NuxtLink to="/" class="block py-2 pr-4 pl-3">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/characters" class="block py-2 pr-4 pl-3"
              >Characters</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="block py-2 pr-4 pl-3"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { nav } from '../../mocks/nav'
export default {
  data() {
    return {
      navOpen: false,
      nav,
    }
  },
}
</script>

