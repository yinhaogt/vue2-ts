<template>
  <div class="thumbnails">
    <div class="add-slide">
      <div class="btn"><IconPlus class="icon" />添加幻灯片</div>
      <a-popover trigger="click" placement="bottomLeft">
        <template #content>
          <LayoutPool />
        </template>
        <div class="select-btn"><IconDown /></div>
      </a-popover>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import LayoutPool from './LayoutPool.vue'
@Component({
  components: {
    LayoutPool
  }
})
export default class Thumbnails extends Vue {}
</script>
<style lang="scss" scoped>
.thumbnails {
  border-right: solid 1px #eee;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  user-select: none;
}
.add-slide {
  height: 40px;
  font-size: 12px;
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  .btn {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #f9f9f9;
    }
  }
  .select-btn {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #eee;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  .icon {
    margin-right: 3px;
    font-size: 14px;
  }
}
.thumbnail-list {
  padding: 5px 0;
  flex: 1;
  overflow: auto;
}
.thumbnail-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;

  .thumbnail {
    outline: 1px solid rgba($color: #d14424, $alpha: 0.15);
  }

  &.active {
    .label {
      color: #d14424;
    }
    .thumbnail {
      outline-color: #d14424;
    }
  }
  &.selected {
    .thumbnail {
      outline-color: #d14424;
    }
  }
}
.label {
  font-size: 12px;
  color: #999;
  width: 20px;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}
</style>
