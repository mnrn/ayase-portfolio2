<template lang="pug">
  div#about
    headline(text="About")
    div.main
      div(class="flexbox d-flex justify-content-center align-items-center flex-wrap flex-sm-nowrap")
        img(:src="require('@/assets/img/icon.webp')" width="8%" height="auto" class="icon")
        p.text {{about.text}}
      div.table
        pairs-table(:items="about.table")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BIconEmojiSmile } from 'bootstrap-vue'
import Headline from '@/components/layouts/Headline.vue'
import PairsTable from '@/components/layouts/PairsTable.vue'
import about from '@/assets/data/ja/about.json'

@Component({
  components: {
    Headline,
    PairsTable
  }
})
export default class About extends Vue {
  private about = about
}
</script>

<style lang="stylus" scoped>
#about
  .flexbox
    .text
      width: 500px
    text-align: left
  text-align: center
</style>
