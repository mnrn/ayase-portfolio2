<template lang="pug">
  div#skill-lang-libs
    div.cross-box: p.title {{libs}}
    ul
      li(v-for="lib in lang.libs")
        a(:href="lib.url" target="_blank" rel="noopener")
          div.text {{lib.name}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import slangs from '@/assets/data/ja/skill-langs.json'

export type Lang = typeof slangs.langs[0]

@Component
export default class SkillLangLibs extends Vue {
  @Prop() private lang!: Lang
  private repos = '公開しているリポジトリ'
  private libs = 'お気に入りのライブラリ'
}
</script>

<style lang="stylus" scoped>
#skill-lang-libs
  max-width: 300px
  font-weight: bolder
  a
    color: #3344dd
  ul, ol
    border-radius :8px
    box-shadow :0px 0px 5px silver
    padding: 0.5em 0.5em 0.5em 2em
  ul li, ol li
    line-height: 1.5
    padding: 0.5em 0
  .text
    font-size: 16px

  .cross-box
    margin:2em 0
    position: relative
    padding: 0.5em 1.5em
    border-top: solid 2px black
    border-bottom: solid 2px black

  .cross-box:before, .cross-box:after
      content: ''
      position: absolute
      top: -10px
      width: 2px
      height: -webkit-calc(100% + 20px)
      height: calc(100% + 20px)
      background-color: black

  .cross-box:before {left: 10px}
  .cross-box:after {right: 10px}
  .cross-box p
      margin: 0
      padding: 0
</style>
