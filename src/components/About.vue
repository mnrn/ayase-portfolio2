<template lang="pug">
  div#about
    div.header
      h2 About
    div.main
      div.table
        kv-table(:items="about.table")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import KVTable from '@/components/layouts/KVTable.vue'
import about from '@/assets/data/ja/about.json'

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
</style>
