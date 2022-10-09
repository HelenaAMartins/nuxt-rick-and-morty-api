<template>
  <div class="pt-10 pb-16">
      <h1 class="text-3xl font-extrabold " :class="`${center ? 'text-center' : 'text-start'} ${color}`" >{{ title }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    title: {type: String, default: ''},
    center: { type: Boolean, default: false},
    color: {type: String, default: 'text-green-900'}
  },
};
</script>
