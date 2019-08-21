<template lang="pug">
  div#about
    h2 About 基本情報
    div.table
      kv-table(:items="about")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import KVTable from '@/components/layouts/KVTable.vue'
import about from '@/assets/data/about.json'

@Component({
  components: {
    kvTable: KVTable
  }
})
export default class About extends Vue {
  private about = about
}
</script>

<style lang="stylus" scoped>
#about
  text-align: center
  margin-top 100px
</style>
