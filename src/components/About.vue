<template lang="pug">
  div#about
    headline(text="About")
    div.main
      div.table
        kv-table(:items="about.table")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BIconEmojiSmile } from 'bootstrap-vue'
import Headline from '@/components/layouts/Headline.vue'
import KVTable from '@/components/layouts/KVTable.vue'
import about from '@/assets/data/ja/about.json'

@Component({
  components: {
    headline: Headline,
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
