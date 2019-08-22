<template lang="pug">
  div#footer-nav
    font-awesome-layers(class="fa-3x fa-fw")
      a(href="https://twitter.com/localhost5050" target="_blank" class="sns-link" ref="noopener")
        font-awesome-icon(:icon="twitter")
      a(href="https://github.com/mnrn" target="_blank" class="sns-link" ref="noopener")
        font-awesome-icon(:icon="github")
      a(href="https://bookmeter.com/users/1017368" target="_blank" class="sns-link" ref="noopener")
        font-awesome-icon(:icon="book")
    div.copyright-box © 2019 あやせさん
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

@Component({
  components: {
    FontAwesomeIcon
  }
})
export default class FooterNav extends Vue {
  private twitter = faTwitter
  private github = faGithub
  private book = faBook
}
</script>

<style lang="stylus" scoped>
#footer-nav
  text-align: center
  margin-top: 100px
  .copyright-box
    font-size: 11px
</style>
