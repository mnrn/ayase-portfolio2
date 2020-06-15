<template lang="pug">
  div#app
    router-view
</template>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700&family=Roboto+Mono:wght@500;700&display=swap')

#app
  font-family 'Roboto Mono', monospace, 'M PLUS Rounded 1c', 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  [v-clock]
    display: none
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
