<template lang="pug">
  div#not-found(:style="style")
    div.not-found-image
      img(:src="require('@/assets/img/page-not-found.webp')")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {
  private style = 'background-image: url(' + require('@/assets/img/bg404.webp') + ')'
}
</script>

<style lang="stylus" scoped>
#not-found
  min-height: 100%
  background-position: center
  background-repeat: no-repeat
  background-size: cover
  height: 100%
  margin: 0
  padding: 0
  .not-found-image
    text-align: center
    img
      padding: 0
      display: block
      margin: 0 auto
      max-height: 100%
      max-width: 100%
</style>
