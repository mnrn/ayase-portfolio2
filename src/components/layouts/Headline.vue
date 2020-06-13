<template lang="pug">
  div#headline
    h2(v-cloak) {{text}}&nbsp&nbsp
    p(class="h2 mb-2")
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
  display: -webkit-flex
  display: flex
  -webkit-justify-content: center
  justify-content: center
  -webkit-align-items: stretch
  align-items: stretch
  text-align: center
  padding-top: 10px
  margin-top: 20px
</style>
