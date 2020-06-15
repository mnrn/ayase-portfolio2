<template lang="pug">
  div#home
    header
      header-nav
      h1.site-title
        router-link(to="/") あやせさんのポートフォリオ
    hello
    about
    skills
    works
    footer-nav
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Hello from '@/components/Hello.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Works from '@/components/Works.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import FooterNav from '@/components/FooterNav.vue'

@Component({
  components: {
    Hello,
    About,
    Skills,
    Works,
    HeaderNav,
    FooterNav
  }
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.site-title
  font-size: 52px
  font-weight: bold
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
