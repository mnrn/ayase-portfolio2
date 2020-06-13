
<template lang="pug">
  nav#header-nav
    b-nav(tabs)
      b-nav-item: a(href="#" v-scroll-to="'#header-nav'") Home
      b-nav-item: a(href="#" v-scroll-to="'#about'") About
      b-nav-item: a(href="#" v-scroll-to="'#skills'") Skills
      b-nav-item: a(href="#" v-scroll-to="'#works'") Works
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BNav } from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

@Component({
  components: {
    bNav: BNav
  }
})
export default class HeaderNav extends Vue {}
</script>

<style lang="stylus" scoped>
#header-nav
  font-weight: bold
  position: fixed
  top: 0
  right: 25px
  font-size: 25px
  z-index: 1000
</style>
