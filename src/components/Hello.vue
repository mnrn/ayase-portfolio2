<template lang="pug">
  div#first
    div.content
      div.browser-bar
        span(class="close button")
        span(class="min button")
        span(class="max button")
      div.text
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Typed from 'typed.js'

@Component
export default class Hello extends Vue {
  private mounted () {
    const typed = new Typed('.text',
      {
        strings: [
          'Hello! Thanks for the view. <br /><br /> ^1000' +
          "I'm one who enjoys development! <br /><br />  ^1000" +
          'This is my portfolio! <br /> ^1000' +
          "Below you'll find some of my recent developments. <br /><br /> ^1000" +
          'Please make yourself at home!'
        ],
        typeSpeed: 0,
        showCursor: false
      })
  }
}
</script>

<style lang="stylus" scoped>

/*!
  Copyright (c) Dan Gold
  Released under the MIT license
  http://opensource.org/licenses/mit-license.php
  https://codepen.io/danielcgold
  pug と stylus に対応させる点やホームページ用にもろもろ改変させていただきました。
 */

#first
  margin: 100px 0
  background: #000
  color: #fff
  font-family: 'Inconsolata', Monaco, monospace
  font-size: 18px
  line-height: 1.5

  a
    color: #fff
    text-decoration: none
    border-bottom: solid 2px

  @media (min-width: 640px)
    background-image: url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?dpr=2&fit=crop&fm=jpg&h=960&ixlib=rb-0.3.5&q=50&w=1440)
    background-size: cover
    background-repeat: no-repeat
    background-position: center
    min-height: 50vh

    .content
      width: 550px
      height: 330px
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      -webkit-transform: translate(-50%, -50%)
      -ms-transform: translate(-50%, -50%)
      background-color: #333
      padding: 45px 20px 20px
      box-sizing: border-box
      box-shadow: 0 0 25px rgba(0, 0, 0, .5)
      border-radius: 5px 5px 0 0

    .browser-bar
      background: #f9f9f3
      position: absolute
      top: 0
      left: 0
      right: 0
      padding: 5px
      overflow: hidden
      border-radius: 5px 5px 0 0

    .button
      display: inline-block
      float: left
      border-radius: 50%
      width: 15px
      height: 15px
      margin-right: 5px

    .close
      background: #fc635d

    .min
      background: #fdbc40

    .max
      background: #34c84a
</style>
