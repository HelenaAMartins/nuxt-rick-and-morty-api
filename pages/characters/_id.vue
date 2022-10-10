<template>
  <div class="mb-4">
    <CharactersHeader />
    <div class="max-w-7xl mx-auto px-2 lg:px-6">
      <CharactersTable :characters="characters" />
      <CharactersPagination
        :infos="info"
        :pageNumber="page"
        :qtdPage="characters.length"
      />
    </div>
  </div>
</template>

<script>
import { seo } from '../../utils/seo'

export default {
  head: {
    ...seo('All Characters'),
  },
  async asyncData({ params }) {
    const page = Number(params.id) || 1
    const charactersList = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )
      .then((res) => res.json())
      .then((res) => res)

    const { results: characters, info } = charactersList
    return { characters, info, page }
  },
}
</script>
