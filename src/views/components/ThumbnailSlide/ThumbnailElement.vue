<template>
  <div
    class="base-element"
    :class="`base-element-${elementInfo.id}`"
    :style="{
      zIndex: elementIndex
    }"
  >
    <!-- <component
      :is="currentElementComponent"
      :elementInfo="elementInfo"
      target="thumbnail"
    ></component> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { PPTElement } from '@/types/slide'
@Component
export default class LayoutPool extends Vue {
  @Prop() elementInfo!: PPTElement
  @Prop() elementIndex!: number
}
</script>
