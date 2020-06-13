<template lang="pug">
  div#app
    router-view
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&family=Ubuntu+Mono&display=swap')
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  font-family 'M PLUS Rounded 1c', sans-serif
  font-family 'Ubuntu Mono', monospace
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  [v-clock]
    display: none
  h1
    font-size: 36px
    color: black
  h2
    font-size: 32px
    color: black
  h3
    font-size: 24px
  h4
    font-size: 18px
  h5
    font-size: 14px
  h6
    color: #777777
    font-size: 14px
  a
    color: #4183C4
    text-decoration: none
    .absent
      color: #cc0000
      text-decoration: none
      .anchor
        display: block
        padding-left: 30px
        margin-left: -30px
        cursor: pointer
        position: absolute
        top: 0
        left: 0
        bottom: 0
  table
    display: block
    overflow: auto
    width: 100%
    border-collapse: collapse
    border-spacing: 0
    padding: 0
    tr
      border-top: 1px solid #cccccc
      background-color: white
      margin: 0
      padding: 0
      :nth-child(2n)
        background-color: #f8f8f8
      th
        font-weight: bold
        border: 1px solid #cccccc
        text-align: left
        margin: 0
        padding: 10px 30px
        :first-child
          margin-top: 0
        :last-child
          margin-bottom: 0
      td
        border: 1px solid #cccccc
        text-align: left
        margin: 0
        padding: 10px 30px
        :first-child
          margin-top: 0
        :last-child
          margin-bottom: 0
</style>
