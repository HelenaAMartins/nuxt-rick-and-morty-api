<!-- Please remove this file from your project -->
<template>
<div>

  <div class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 mx-2">
    <div class="flex-1 flex flex-col p-8">
      <img
        class="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
        :src="character.image"
        alt=""
      />
      <h3 class="mt-6 text-gray-900 text-sm font-medium">
        {{ character.name }}
      </h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-gray-500 text-sm">{{ character.species }}</dd>
        <dt class="sr-only">Role</dt>
        <dd class="mt-3">
          <span
            :class="statusClass(character.status)"
            class="px-2.5 py-1 text-xs font-medium rounded-full"
            >{{ character.status }}</span
          >
        </dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200">
        <div class="w-0 flex-1 flex">

            <span class="
              w-0
              flex-1
              inline-flex
              items-center
              justify-center
              py-4
              text-sm text-gray-700
              font-medium
              border border-transparent
              rounded-br-lg
              ">{{character.gender}}</span>

        </div>
        <div class="-ml-px w-0 flex-1 flex">
          <NuxtLink :to="`/character/${character.id}`"
            class="
              relative
              w-0
              flex-1
              inline-flex
              items-center
              justify-center
              py-4
              text-sm text-gray-700
              font-medium
              border border-transparent
              rounded-br-lg
              hover:text-gray-500
            "
          >
            <span class="ml-3">View</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>

</div>

</template>

<script>
import { statusClass } from "../utils"
export default {
  name: 'CharCard',
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
