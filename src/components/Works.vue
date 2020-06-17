
<template lang="pug">
div#works
  headline(text="Works")
  div.card-deck(class="d-flex justify-content-center align-items-center")
    div.card(v-for="work in works" :key="work.id")
      div.card-img(class="border-bottom d-flex justify-content-center align-items-center flex-wrap flex-sm-nowrap")
        a.card-link(:href="work.url !== '' ? work.url : work.repo" target="_blank" rel="noopener")
          img.card-img-top(v-if="work.pic.endsWith('.webp')" :src="require('@/assets/img/' + work.pic)" alt="My work image.")
          img(v-else :src="work.pic" alt="My work image." height="300px" width="auto")
      div.card-body
        p.card-title(v-cloak) {{work.title}}
        div(v-for="(text, index) in work.texts" :key="index")
          p.card-text(v-cloak) {{text}}
      div.card-footer(class="d-flex justify-content-start")
        a.card-link(v-if="work.url !== ''" class="btn btn-link" :href="work.url" target="_blank" rel="noopener") URL
        a.card-link(class="btn btn-link" :href="work.repo" target="_blank" rel="noopener") GitHub
        a.card-link(class="btn btn-link" :href="work.repo" target="_blank" rel="noopener") 詳細 (予定)
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Headline from '@/components/layouts/Headline.vue'
import works from '@/assets/data/ja/works.json'

@Component({
  components: {
    Headline
  }
})
export default class Works extends Vue {
  private works = works
}
</script>

<style lang="stylus" scoped>
#works
  margin: 100px
  a
    color: #3344dd
  .card
    min-width: 500px
    .card-body
      min-height: 170px
    .card-img
      height: 350px
    .card-title
      font-size: 20px
      font-weight: bold
</style>
