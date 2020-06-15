
<template lang="pug">
div#works
  headline(text="Works")
  div.wrapper
    article(v-for="work in works" :key="work.id")
      div.work
        a(:href="work.url" target="_blank" rel="noopener")
          img(:src="require('@/assets/img/' + work.picture)")
        p.product(v-cloak)
          a(:href="work.url" target="_blank" rel="noopener") {{work.title}}
        p.product-text(v-cloak) {{work.text}}
        p.product-year(v-cloak) 制作日:{{work.year}}
        p.product-repository(v-cloak)
          a(:href="work.repository" target="_blank" rel="noopener") GitHubリポジトリ
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
  margin-top: 100px
  .wrapper
    margin-top: 50px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    article
      margin-left: 50px
      min-height: max-content
      .work
        img
          height: 320px
          width: auto
        .product-text
          width: 320px
</style>
