<template lang="pug">
  div#home
    header
      h1.site-title
        router-link(to="/") あやせさんのポートフォリオ
    about
    skills
    works
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Works from '@/components/Works.vue'

@Component({
  components: {
    about: About,
    skills: Skills,
    works: Works
  }
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.site-title
  font-weight: bold
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
