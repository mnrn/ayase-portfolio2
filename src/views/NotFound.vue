<template lang="pug">
  div#not-found
    header
      h1 Oops!
    main
      img(:src="require('@/assets/img/page-not-found.webp')")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>

<style lang="stylus" scoped>
#not-found
  text-align: center
</style>
