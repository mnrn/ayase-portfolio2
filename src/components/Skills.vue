<template lang="pug">
  div#skills
    h2 Skills やれることーやっていること
    div.table
      kv-table(:items="skills")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import KVTable from '@/components/layouts/KVTable.vue'
import skills from '@/assets/data/skills.json'

@Component({
  components: {
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
