<template>
  <div>
    <CharacterHeader :character="character" />

    <CharacterTable :episodes="character.episode" />
    <div
      class="
        flex
        justify-end
        max-w-7xl
        mr-4
        md:mr-auto
        mx-auto
        my-10
        px-2
        lg:px-6
      "
    >
      <NuxtLink to="/characters">
        <span
          class="
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-pink-500
            hover:from-indigo-900 hover:via-purple-900 hover:top-pink-900
            px-4
            py-2
            rounded
            text-white
            flex
            gap-2
            items-center
            transition-all
          "
        >
          <IconsBack class="w-5 h-5" /> Back to Characters</span
        >
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, redirect }) {
    const character = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    ).then((res) => res.json())

    if (!character) redirect('/404')
    console.log(character)
    return { character }
  },
}
</script>


