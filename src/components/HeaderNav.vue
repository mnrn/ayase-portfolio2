
<template lang="pug">
  nav#header-nav
    ul
      li
        a(href="#" v-scroll-to="'#header-nav'") Home
      li
        a(href="#" v-scroll-to="'#about'") About
      li
        a(href="#" v-scroll-to="'#skills'") Skills
      li
        a(href="#" v-scroll-to="'#works'") Works
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HeaderNav extends Vue {}
</script>

<style lang="stylus" scoped>
#header-nav
  font-weight: bold
  position: fixed
  top: 0
  right: 25px
  font-size: 18px
  z-index: 1000
  ul
    li
      display: inline-block
      margin: 0 5px
      padding: 0 5px
</style>
