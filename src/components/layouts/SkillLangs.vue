<template lang="pug">
  div#skill-langs.card
    div.card-body
      h3.card-title.text-center {{title}}
      div.skills-subtitle
        div.card-text.text-left(v-for="text in slangs.texts") {{text}}
      div.list-group
        div.list-group-item(v-for="lang in slangs.langs")
          div.media
            skill-lang-header(:lang="lang")
            div.media-body
              skill-lang-libs(:lang="lang")
          skill-lang-descript(:lang="lang")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SkillLangHeader from '@/components/layouts/SkillLangHeader.vue'
import SkillLangLibs from '@/components/layouts/SkillLangLibs.vue'
import SkillLangDescript from '@/components/layouts/SkillLangDescript.vue'
import slangs from '@/assets/data/ja/skill-langs.json'

@Component({
  components: {
    SkillLangHeader,
    SkillLangLibs,
    SkillLangDescript
  }
})
export default class SkillLangs extends Vue {
  private slangs = slangs
  private title = 'プログラミング言語'
}
</script>

<style lang="stylus" scoped>
#skill-langs
  font-size: 16px
  .skills-subtitle
    margin: 20px 10px
  .media-body
    min-width: 500px

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
