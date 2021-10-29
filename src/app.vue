<template>
  <Editor></Editor>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Editor from './views/editor/index.vue'

@Component({
  components:{
    Editor
  }
})
export default class App extends Vue {
  private test = 1
}
</script>
<style lang="scss" scoped>
#app {
  background-color: #fff;
}
</style>
