<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      {{ episodeInfo.name }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ episodeInfo.air_date }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {{ episodeInfo.episode }}
    </td>
  </tr>
</template>

<script>
export default {
  async fetch() {
    this.episodeInfo = await fetch(this.episode)
      .then((res) => res.json())
      .then((res) => res)
  },
  props: {
    episode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      episodeInfo: {},
    }
  },
}
</script>
