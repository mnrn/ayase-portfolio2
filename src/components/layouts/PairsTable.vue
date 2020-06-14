<template lang="pug">
  div#pairs-table
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
export default class PairsTable extends Vue {
  @Prop() private items!: (AboutTable | Skills)
}
</script>

<style lang="stylus" scoped>
#pairs-table
  display: table
  font-weight: bold
  width: auto
  margin: 50px auto

  table
    display: block
    overflow: auto
    width: 100%
    border-collapse: collapse
    border-spacing: 0
    padding: 0
    tr
      border-top: 1px solid #cccccc
      background-color: white
      margin: 0
      padding: 0
      :nth-child(2n)
        background-color: #f8f8f8
      th
        font-weight: bold
        border: 1px solid #cccccc
        text-align: left
        margin: 0
        padding: 10px 30px
        :first-child
          margin-top: 0
        :last-child
          margin-bottom: 0
      td
        border: 1px solid #cccccc
        text-align: left
        margin: 0
        padding: 10px 30px
        :first-child
          margin-top: 0
        :last-child
          margin-bottom: 0
</style>
