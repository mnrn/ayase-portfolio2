<template lang="pug">
  div#skill-descript
    div.talking-box
      div.talk-text {{skill.descript}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Skill } from '@/static/ts/skill'

@Component
export default class SkillDescript extends Vue {
  @Prop() private skill!: Skill
}
</script>

<style lang="stylus" scoped>
#skill-descript
  font-size: 15px
  text-align: left
  .talking-box
    position: relative
    display: inline-block
    margin: 1.5em 0 1.5em 15px
    padding: 7px 10px
    min-width: 120px
    max-width: 100%
    color: #555
    background: #FFF
    border: solid 3px #555
    box-sizing: border-box
    border-radius: 10px

  .talking-box:before
    content: ""
    position: absolute
    top: 50%
    left: -24px
    margin-top: -12px
    border: 12px solid transparent
    border-right: 12px solid #FFF
    z-index: 2

  .talking-box:after
    content: ""
    position: absolute
    top: 50%
    left: -30px
    margin-top: -14px
    border: 14px solid transparent
    border-right: 14px solid #555
    z-index: 1

  .talking-box p
    margin: 0
    padding: 0
</style>
