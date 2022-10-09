<template>
  <div
    tabindex="-1"
    aria-hidden="true"
    class="
      overflow-y-auto overflow-x-hidden
      fixed
      top-0
      right-0
      left-0
      z-50
      w-full
      md:inset-0
      h-modal
      md:h-full
    "
    :class="!modalIsOpen && 'hidden'"
  >
    <div
      @click="toggleModal"
      class="bg-black opacity-75 absolute h-full w-full"
    />
    <div class="relative p-4 w-full max-w-md h-full md:h-auto m-auto mt-10">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          @click="toggleModal"
          type="button"
          class="
            absolute
            top-3
            right-2.5
            text-gray-400
            bg-transparent
            hover:bg-gray-200 hover:text-gray-900
            rounded-lg
            text-sm
            p-1.5
            ml-auto
            inline-flex
            items-center
            dark:hover:bg-gray-800 dark:hover:text-white
          "
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Send me a message!
          </h3>
          <form @submit.prevent="formSubmit">
            <div class="mt-1">
              <label
                for="queryTitle"
                class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <div class="mt-1">
                <input
                  v-model="name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                    p-3
                    required:border-red-500
                  "
                  placeholder="Your name"
                />
              </div>
            </div>
            <div class="mt-1">
              <label
                for="queryTitle"
                class="block text-sm font-medium text-gray-700"
                >E-mail</label
              >
              <div class="mt-1">
                <input
                  v-model="email"
                  required
                  type="email"
                  name="email"
                  id="email"
                  class="
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                    p-3
                    required:border-red-500
                  "
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div class="mt-4">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >Add your message here</label
              >
              <div class="mt-3">
                <textarea
                  v-model="message"
                  required="required"
                  rows="4"
                  name="message"
                  id="message"
                  class="
                    p-3
                    shadow-md
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    sm:text-sm
                    border border-gray-300
                    rounded-md
                    required:border-red-500
                  "
                />
              </div>
            </div>
            <div class="flex justify-end mt-4 items-center">
              <IconsSpin
                v-show="loading"
                class="animate-spin w-5 mr-2 h-6 w-6"
              />
              <button
                type="submit"
                :disabled="loading"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-md
                  shadow-sm
                  text-white
                  bg-purple-500
                  hover:bg-purple-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                  disabled:opacity-75
                "
              >
                {{ loading ? 'Submitting...' : 'Submit' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      showModal: false,
      loading: false,
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    async formSubmit() {
      //mocked api to test fetch
      this.loading = true
      await fetch('https://node-sendmail.vercel.app/api/sendmail', {
        method: 'POST',
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(() => {
        this.showModal = true
        this.name = ''
        this.email = ''
        this.message = ''
      })
      this.loading = false
    },
    ...mapActions(['toggleModal']),
  },

  computed: {
    ...mapGetters(['modalIsOpen']),
  },
}
</script>
