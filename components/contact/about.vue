<template>
  <div class="py-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          About the project
        </h2>
      </div>
      <div
        class="
          relative
          z-10
          text-base
          max-w-prose
          mx-auto
          lg:max-w-5xl lg:mx-0 lg:pr-72
        "
      >
        <p class="text-lg text-gray-500">
          Hello! Let me tell you a little about the process of working on this
          personal project. Moreover, there's a contact form on the CTA bellow.
          I'm open to get tips, comments and messages.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>
              This project is part of my studies on Nuxt, using Tailwind. In
              order to practice, I avoided to use style (scoped or not) to my
              components.
            </p>
            <p>
              Besides, Nuxt and Tailwind, I've used Tailwing icons, some Font
              Awesome icons and free images. To get precise routes to these
              material, please check my Github repository.
            </p>
          </div>
          <div class="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
            <div class="rounded-md shadow">
              <a
                href="https://github.com/HelenaAMartins/nuxt-rick-and-morty-api"
                target="_blank"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-5
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-white
                  bg-green-500
                  hover:bg-green-700
                "
              >
                Project repository
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
        <div
          class="
            mt-12
            relative
            text-base
            max-w-prose
            mx-auto
            lg:mt-0 lg:max-w-none
          "
        >
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <div class="relative text-lg text-gray-700 font-medium mt-8">
                <p class="relative">
                  I'm Helena Martins, a frontend developer. I'm from Fortaleza,
                  Brazil, but currently I live in São Paulo, Brazil. Before
                  being a developer, I've been an English teacher, graduated in
                  Portuguese and English language and literature and I hold a
                  master degree in Ancient Literature, both of them from
                  Universidade Federal do Ceará. I really love being a
                  developer. At the moment, I'm working and studying Nuxt, Vue,
                  Next, React, Tailwind, Bootstrap and Typescript.
                </p>
              </div>
            </div>
            <cite
              class="
                relative
                flex
                items-center
                sm:items-start
                bg-pink-500
                rounded-b-lg
                not-italic
                py-5
                px-6
                sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10
              "
            >
              <div
                class="
                  relative
                  rounded-full
                  border-2 border-white
                  sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2
                "
              >
                <img
                  class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                  src="/img/profile.jpg"
                  alt=""
                />
              </div>
              <span
                class="
                  relative
                  ml-4
                  text-pink-300
                  font-semibold
                  leading-6
                  sm:ml-24 sm:pl-1
                "
              >
                <p class="text-white font-semibold sm:inline">Helena Martins</p>
                {{ ' ' }}
                <p class="sm:inline">Frontend developer</p>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['toggleModal']),
  },
}
</script>
