<template>
  <nav
    class="
      bg-white
      px-4
      py-3
      flex
      items-center
      justify-between
      border-t border-gray-200
      sm:px-6
    "
    aria-label="Pagination"
  >
    <div class="hidden sm:block">
      <p class="text-sm text-gray-700">
        Showing
        {{ ' ' }}
        <span class="font-medium">{{ currentItems() }}</span>
        {{ ' ' }}
        to
        {{ ' ' }}
        <span class="font-medium">{{ totalItems() }}</span>
        {{ ' ' }}
        of
        {{ ' ' }}
        <span class="font-medium">{{ infos.count }}</span>
        {{ ' ' }}
        results
      </p>
    </div>
    <div class="flex-1 flex justify-between sm:justify-end">
      <NuxtLink
        :to="`/characters/${pageNumber - 1}`"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          text-sm
          font-medium
          rounded-md
          text-gray-700
          bg-white
          hover:bg-gray-50
          disabled:opacity-75
        "
        :class="!goBackwards() && 'disabled opacity-75 pointer-events-none'"
      >
        Previous
      </NuxtLink>
      <NuxtLink
        :to="`/characters/${pageNumber + 1}`"
        class="
          ml-3
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          text-sm
          font-medium
          rounded-md
          text-gray-700
          bg-white
          hover:bg-gray-50
        "
        :class="!goForwards() && 'disabled opacity-75 pointer-events-none'"
      >
        Next
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 20,
    }
  },
  props: {
    infos: {
      type: Object,
      default: {},
    },
    pageNumber: {
      type: Number,
      default: 1,
    },
    qtdPage: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    currentItems() {
      return this.pageNumber === 1
        ? this.pageNumber
        : this.itemsPerPage * this.pageNumber - this.qtdPage + 1 - (this.itemsPerPage - this.qtdPage)
    },
    totalItems() {
      return Math.ceil(this.infos.count / this.infos.pages) * this.pageNumber -
        (this.itemsPerPage - this.qtdPage)
    },

    goForwards() {
      return (
        this.pageNumber !== this.infos.pages &&
        this.pageNumber < this.infos.pages
      )
    },
    goBackwards() {
      return this.pageNumber > 0 && this.pageNumber !== 1
    },
  },
}
</script>
