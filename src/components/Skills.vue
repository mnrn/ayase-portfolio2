<template lang="pug">
  div#skills
    headline(text="Skills")
    div.main
      div.card-deck
        skill-langs
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Headline from '@/components/layouts/Headline.vue'
import PairsTable from '@/components/layouts/PairsTable.vue'
import SkillLangs from '@/components/layouts/SkillLangs.vue'

@Component({
  components: {
    Headline,
    SkillLangs
  }
})
export default class Skills extends Vue {
}
</script>

<style lang="stylus" scoped>
#skills
  padding: 50px 0
  a
    color: #3344dd
</style>
