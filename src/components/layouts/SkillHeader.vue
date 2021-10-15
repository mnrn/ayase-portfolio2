<template lang="pug">
  div#skill-header(class="align-self-center mr-3 d-flex-inline justify-content-start")
    div.skill-name(class="d-flex justify-content-start")
      p {{skill.name}}&nbsp
      //div(v-for="svg in skill.svg"): img(:src="svg", width="20" height="auto")
    div.skill-lv(class="d-flex-inline justify-content-start")
      div.progress
        div.progress-bar.progress-bar-striped(role="progressbar" :style="'width: ' + skill.lv + '%'" :aria-valuenow="skill.lv" aria-valuemin="0" aria-valuemax="100" aria-label="skill-level")
      p {{lv(skill.lv)}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Skill } from '@/static/ts/skill'

@Component
export default class SkillHeader extends Vue {
  @Prop() private skill!: Skill
  private lv (lv: number) {
    return 'LV ' + lv / 10 + ' / 10'
  }
}
</script>

<style lang="stylus" scoped>
#skill-header
  width: 100px
  p
    font-size: 18px
    font-weight: bolder
  .skill-lv
    font-weight: bolder
</style>
