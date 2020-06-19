<template lang="pug">
  div#skill-lang-header(class="align-self-center mr-3 d-flex-inline justify-content-start")
    div.skill-lang-name(class="d-flex justify-content-start")
      h4 {{lang.name}}&nbsp
      div(v-for="svg in lang.svg"): img(:src="svg", width="20" height="auto")
    div.skill-lang-lv(class="d-flex-inline justify-content-start")
      div.progress
        div.progress-bar.progress-bar-striped(role="progressbar" :style="'width: ' + lang.lv + '%'" :aria-valuenow="lang.lv" aria-valuemin="0" aria-valuemax="100")
      p {{lv(lang.lv)}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import slangs from '@/assets/data/ja/skill-langs.json'

export type Lang = typeof slangs.langs[0]

@Component
export default class SkillLangHeader extends Vue {
  @Prop() private lang!: Lang
  private lv (lv: number) {
    return 'レベル  ' + lv / 10 + '/ 10'
  }
}
</script>

<style lang="stylus" scoped>
#skill-lang-header
  font-size: 16px
  width: 200px
  .skill-lang-lv
    font-weight: bolder
</style>
