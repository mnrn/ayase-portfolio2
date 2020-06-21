<template lang="pug">
  div#skills.card
    div.card-body
      h3.card-title.text-center {{title}}
      div.skills-subtitle
        div.card-text.text-left(v-for="text in subroot.texts") {{text}}
      div.list-inline
        div.list-inline-item(v-for="skill in subroot.skills")
          div.media
            skill-header(:skill="skill")
            div.media-body
              skill-descript(:skill="skill")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SkillHeader from '@/components/layouts/SkillHeader.vue'
import SkillDescript from '@/components/layouts/SkillDescript.vue'
import { SkillSubtree } from '@/static/ts/skill'

@Component({
  components: {
    SkillHeader,
    SkillDescript
  }
})
export default class SkillSubroot extends Vue {
  @Prop() private subroot!: SkillSubtree
  @Prop() private title!: string
}
</script>

<style lang="stylus" scoped>
#skills
  font-size: 16px
  .skills-subtitle
    margin: 20px 10px
.card
  min-width: 500px
  max-width: 767px
.card-body
  min-height: 170px
</style>
