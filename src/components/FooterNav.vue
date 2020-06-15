<template lang="pug">
  div#footer-nav
    nav(class="nav justify-content-center fa-3x")
      a(class="nav-item nav-link" href="https://twitter.com/localhost5050" target="_blank" class="sns-link" rel="noopener"): font-awesome-icon(:icon="twitter")
      a(class="nav-item nav-link" href="https://github.com/mnrn" target="_blank" class="sns-link" rel="noopener"): font-awesome-icon(:icon="github")
      a(class="nav-item nav-link" href="https://bookmeter.com/users/1017368" target="_blank" class="sns-link" rel="noopener"): font-awesome-icon(:icon="book")
    div.copyright-box {{ copyRightText }}
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
  private copyRightText = '© ' + new Date().getFullYear() + ' あやせさん'
}
</script>

<style lang="stylus" scoped>
#footer-nav
  text-align: center
  margin-top: 100px
  .copyright-box
    font-size: 16px
</style>
