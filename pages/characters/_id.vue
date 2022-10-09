<template>
<div>
<CharactersHeader />
<CharactersTable :info="info" :characters="characters"/>
</div>
</template>

<script>

export default {
  async asyncData({ params }) {
    const charactersList = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${params.id || 1}`
    )
      .then((res) => res.json())
      .then((res) => res)

    const { results: characters, info } = charactersList
    const page = Number(params.id)
    return { characters, info, page }
  },

}
</script>
