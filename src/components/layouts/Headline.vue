<template lang="pug">
  div#headline
    div(class="d-flex justify-content-center align-items-center flex-wrap flex-sm-nowrap")
      h2(v-cloak) {{text}}&nbsp
      p(class="h1 mb-2")
        about(v-if='text==="About"')
        skills(v-else-if='text==="Skills"')
        works(v-else-if='text==="Works"')
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { BIconEmojiSmile, BIconGraphUp, BIconBrush } from 'bootstrap-vue'

@Component({
  components: {
    about: BIconEmojiSmile,
    skills: BIconGraphUp,
    works: BIconBrush
  }
})
export default class Headline extends Vue {
  @Prop() private text!: string
}
</script>

<style lang="stylus" scoped>
#headline
  h2
    font-size: 48px
    font-weight: bold
  text-align: center
  padding-top: 10px
  margin-top: 20px
</style>
