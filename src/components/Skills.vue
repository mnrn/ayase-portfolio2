<template lang="pug">
  div#skills
    headline(text="Skills")
    div.table
      kv-table(:items="skills")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Headline from '@/components/layouts/Headline.vue'
import KVTable from '@/components/layouts/KVTable.vue'
import skills from '@/assets/data/ja/skills.json'
import Head from './layouts/Head.vue'

@Component({
  components: {
    headline: Headline,
    kvTable: KVTable
  }
})
export default class Skills extends Vue {
  private skills = skills
}

</script>

<style lang="stylus" scoped>
#skills
  text-align: center
  margin-top: 100px
</style>
