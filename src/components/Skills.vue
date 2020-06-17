<template lang="pug">
  div#skills
    headline(text="Skills")
    div.main
      div.first
        p 具体的なスキルのレベルは <a href="https://github.com/mnrn" target="_blank" rel="noopener"> GitHub</a> から該当コードを見ていただくことになります。
      div.table
        pairs-table(:items="skills")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Headline from '@/components/layouts/Headline.vue'
import PairsTable from '@/components/layouts/PairsTable.vue'
import skills from '@/assets/data/ja/skills.json'
import Head from './layouts/Head.vue'

@Component({
  components: {
    Headline,
    PairsTable
  }
})
export default class Skills extends Vue {
  private skills = skills
}

</script>

<style lang="stylus" scoped>
#skills
  text-align: center
  //margin-top: 100px
  padding: 50px 0

  a
    color: #3344dd

  .main
    font-size: 20px
    .first
      font-weight: 500
      margin: 10px 10px
</style>
