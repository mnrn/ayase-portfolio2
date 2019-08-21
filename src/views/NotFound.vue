<template lang="pug">
  div#not-found
    main
      h1 ページが見つかりません
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NotFound extends Vue {}
</script>
