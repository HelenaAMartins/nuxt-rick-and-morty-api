<template>
  <ContactAbout />
</template>
<script>
import { seo } from '@/utils/seo'

export default {
  head() {
    return {
      ...seo('Contact'),
    }
  },
}
</script>
