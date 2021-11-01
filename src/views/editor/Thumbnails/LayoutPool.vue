<template>
  <div class="layout-pool">
    <div class="layout-item" v-for="slide in 10" :key="slide">
      <!-- <ThumbnailSlide class="thumbnail" :slide="slide" :size="180" /> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class LayoutPool extends Vue {}
</script>
<style lang="scss" scoped>
.layout-pool {
  width: 394px;
  height: 500px;
  padding: 2px;
  margin-right: -12px;
  padding-right: 12px;
  overflow: auto;

  @include flex-grid-layout();
}
.layout-item {
  @include flex-grid-layout-children(2, 48%);

  .thumbnail {
    outline: 1px solid $borderColor;
    cursor: pointer;

    &:hover {
      outline-color: $themeColor;
    }
  }
}
</style>
