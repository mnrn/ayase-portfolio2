<template lang="pug">
  div#app
    router-view
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Ubuntu:wght@500&display=swap')
#app
  font-family 'Ubuntu', sans-serif, 'M PLUS Rounded 1c', sans-serif, 'Avenir', Helvetica, Arial, sans-serif
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
</style>
