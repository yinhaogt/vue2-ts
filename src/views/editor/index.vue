<template>
  <div class="pptist-editor">
    <EditorHeader class="layout-header"></EditorHeader>
    <div class="layout-content">
      <Thumbnails class="layout-content-left" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import EditorHeader from './editorHeader/index.vue'
import Thumbnails from './Thumbnails/index.vue'
@Component({
  components: {
    EditorHeader,
    Thumbnails
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
.layout-content {
  height: calc(100% - 40px);
  display: flex;
}
.layout-content-left {
  width: 160px;
  height: 100%;
  flex-shrink: 0;
}
</style>
