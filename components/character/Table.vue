<template>
  <div class="max-w-7xl mt-6 md:mt-24 mx-auto px-2 lg:px-6">
    <div class="overflow-x-auto">
      <div class="py-2 align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Episode name
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Air date
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Episode code
                </th>
              </tr>
            </thead>
            <tbody>
              <CharacterEpisodes
                v-for="(episode, idx) in episodes"
                :key="episode"
                :episode="episode"
                :class="idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    episodes: {
      type: Array,
      default: [],
    },
  },
}
</script>
