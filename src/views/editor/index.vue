<template>
  <div class="pptist-editor">
    <EditorHeader class="layout-header"></EditorHeader>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import EditorHeader from './editorHeader/index.vue'
@Component({
  components: {
    EditorHeader
  }
})
export default class Editor extends Vue {}
</script>
<style lang="scss" scoped>
.pptist-editor {
  height: 100%;
}
.layout-header {
  height: 40px;
}
</style>
