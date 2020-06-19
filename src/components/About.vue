<template lang="pug">
  div#about
    headline(text="About")
    div.main
      div(class="d-flex justify-content-center align-items-center flex-wrap flex-sm-nowrap")
        picture
          source(type="image/webp" :srcset="require('@/assets/img/icon.webp')")
          img(:src="require('@/assets/img/icon.png')" width="50%" height="auto" class="icon" alt="This is my about icon.")
        itemize(:texts="about")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Headline from '@/components/layouts/Headline.vue'
import PairsTable from '@/components/layouts/PairsTable.vue'
import Itemize from '@/components/layouts/Itemize.vue'
import about from '@/assets/data/ja/about.json'

@Component({
  components: {
    Headline,
    Itemize,
    PairsTable
  }
})
export default class About extends Vue {
  private about = about
}
</script>

<style lang="stylus" scoped>
#about
  font-size: 18px
  text-align: center

  /*!
  おそらく元ネタは https://blog.minimal-green.com/entry/2017/01/14/211630 になります。
  */
  .main
    position: relative
    background: #fffde7
    width: 50%
    margin: 2em auto
    padding: 1.5em 1em
    box-shadow: 1px 1px 4px rgba(0,0,0,0.2)
    color: #795548
    ::after
      content: ''
      position: absolute
      left: 50%
      top: -15px
      margin-left: -75px
      width: 150px
      height: 30px
      background: rgba(245,245,245,0.7)
      box-shadow: 1px 1px 4px rgba(0,0,0,0.2)
      transform: rotate(-4deg)
    .icon
      margin-right: 50px
</style>
