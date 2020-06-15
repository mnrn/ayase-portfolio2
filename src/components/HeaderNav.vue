
<template lang="pug">
  nav#header-nav
    ul(class="nav nav-tabs")
      li.nav-item: a(class="nav-link" href="#" v-scroll-to="'#header-nav'") Home
      li.nav-item: a(class="nav-link" href="#" v-scroll-to="'#about'") About
      li.nav-item: a(class="nav-link" href="#" v-scroll-to="'#skills'") Skills
      li.nav-item: a(class="nav-link" href="#" v-scroll-to="'#works'") Works
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

@Component
export default class HeaderNav extends Vue {}
</script>

<style lang="stylus" scoped>
#header-nav
  font-weight: bold
  position: fixed
  top: 0
  right: 25px
  font-size: 22px
  z-index: 1000
</style>
