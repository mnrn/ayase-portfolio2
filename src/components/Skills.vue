<template lang="pug">
  div#skills
    headline(text="Skills")
    div.main
      div.card-deck
        skill-subroot(title="プログラミング言語" :subroot="langs")
        skill-subroot(title="OS" :subroot="os")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Headline from '@/components/layouts/Headline.vue'
import PairsTable from '@/components/layouts/PairsTable.vue'
import SkillSubroot from '@/components/layouts/SkillSubroot.vue'

import { SkillSubtree } from '@/static/ts/skill'
import langs from '@/assets/data/ja/skill-langs.json'
import os from '@/assets/data/ja/skill-os.json'

@Component({
  components: {
    Headline,
    SkillSubroot
  }
})
export default class Skills extends Vue {
  private langs: SkillSubtree = langs
  private os: SkillSubtree = os
}
</script>

<style lang="stylus" scoped>
#skills
  padding: 50px 0
  a
    color: #3344dd
</style>
