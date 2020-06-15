<template lang="pug">
  div#itemize
    ul: li(v-for="text in texts"): div.name {{ text.name }}
      ul: li(v-for="item in text.items")
        div.item(v-if="typeof item === 'string'") {{ item }}
        div.item(v-else): a(:href="item.url" target="_blank" rel="noopener") {{ item.name }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import about from '@/assets/data/ja/about.json'

export type Texts = typeof about

@Component
export default class Itemize extends Vue {
  @Prop() private texts!: Texts
}
</script>

<style lang="stylus" scoped>
#itemize
  font-weight: bold
  ul
    margin: 1em 0.5em 0 2em
    padding: 0 0 0 0
    li
      text-align: left
      margin-bottom: 0.5em
  a
    color: #3344dd
</style>
