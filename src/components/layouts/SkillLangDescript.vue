<template lang="pug">
  div#skill-lang-descript
    div.talking-box
      div.talk-text {{lang.descript}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import slangs from '@/assets/data/ja/skill-langs.json'

export type Lang = typeof slangs.langs[0]

@Component
export default class SkillLangs extends Vue {
  @Prop() private lang!: Lang
}
</script>

<style lang="stylus" scoped>
#skill-lang-descript
  max-width: 600px
  .talking-box
    position: relative
    display: inline-block
    margin: 1.5em 0
    padding: 7px 10px
    min-width: 120px
    max-width: 100%
    color: #555
    font-size: 16px
    background: #FFF
    border: solid 3px #555
    box-sizing: border-box
    border-radius: 10px

  .talking-box:before
    content: ""
    position: absolute
    top: -24px
    left: 5%
    margin-left: -15px
    border: 12px solid transparent
    border-bottom: 12px solid #FFF
    z-index: 2

  .talking-box:after
    content: ""
    position: absolute
    top: -30px
    left: 5%
    margin-left: -17px
    border: 14px solid transparent
    border-bottom: 14px solid #555
    z-index: 1

  .talking-box p
    margin: 0
    padding: 0
</style>
