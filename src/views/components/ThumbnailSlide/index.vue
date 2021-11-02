<template>
  <div
    class="thumbnail-slide"
    :style="{
      width: size + 'px',
      height: size * viewportRatio + 'px'
    }"
  >
    <div
      class="elements"
      :style="{
        width: VIEWPORT_SIZE + 'px',
        height: VIEWPORT_SIZE * viewportRatio + 'px',
        transform: `scale(${scale})`
      }"
    >
      <div class="background" :style="backgroundStyle"></div>
      <ThumbnailElement v-for="(element, index) in slide.elements" :key="element.id" :elementInfo="element" :elementIndex="index + 1" />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { VIEWPORT_SIZE } from '../../../configs/canvas'
import { Component, Prop } from 'vue-property-decorator'
import { Slide } from '@/types/slide'
import { slideBackgroundStyle } from '@/utils/index'
import ThumbnailElement from './ThumbnailElement.vue'
@Component({
  components: {
    ThumbnailElement
  }
})
export default class ThumbnailSlide extends Vue {
  @Prop() slide!: Slide
  @Prop() size!: number
  private VIEWPORT_SIZE = VIEWPORT_SIZE

  get viewportRatio(): number {
    return this.$store.state.viewportRatio
  }

  get background() {
    return this.slide.background
  }

  get scale() {
    return this.size / this.VIEWPORT_SIZE
  }

  get backgroundStyle() {
    return slideBackgroundStyle(this.background)
  }
}
</script>
<style lang="scss" scoped>
.thumbnail-slide {
  background-color: #fff;
  overflow: hidden;
}
.elements {
  transform-origin: 0 0;
}
.background {
  width: 100%;
  height: 100%;
  background-position: center;
  position: absolute;
}
</style>
