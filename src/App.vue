<template lang="pug">
  div#app
    router-view
</template>

<style lang="stylus">
#app
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
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
