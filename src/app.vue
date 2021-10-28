<template>
  <div id="app">
    welcome qing
    <IconPicture></IconPicture>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private test = 1
}
</script>
<style lang="scss" scoped>
#app {
  background-color: #fff;
}
</style>
