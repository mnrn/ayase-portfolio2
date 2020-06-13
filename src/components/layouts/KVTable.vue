<template lang="pug">
  div#kvtable
    table
      thead
        tr
          th Key
          th Value
      tbody
        tr(v-for="(item, index) in items" :key="index")
          th(v-cloak) {{item.key}}
          td(v-if="'url' in item")
            a(:href="item.url" target="_blank" rel="noopener") {{item.value}}
          td(v-else v-cloak) {{item.value}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import about from '@/assets/data/ja/about.json'
import skills from '@/assets/data/ja/skills.json'

export type AboutTable = { 'key': string; 'value': string; 'url': string; }[]
export type Skills = typeof skills

@Component
export default class KVTable extends Vue {
  @Prop() private items!: (AboutTable | Skills)
}
</script>

<style lang="stylus" scoped>
#kvtable
  display: table
  font-weight: bold
  width: auto
  margin: 50px auto
</style>
