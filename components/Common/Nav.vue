<template>
  <nav class="px-2 sm:px-4 py-4 bg-purple-500">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <h1 class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-white"
          >Rick and Morty</span
        >
      </h1>
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
            <NuxtLink to="/contact" class="block py-2 pr-4 pl-3">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
