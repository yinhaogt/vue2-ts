<template>
  <div class="editor-header">
    <div class="left">
      <a-dropdown :trigger="['click']">
        <div class="menu-item"><IconFolderClose /> <span class="text">文件</span></div>
        <template #overlay>
          <a-menu>
            <a-menu-item>导出 JSON</a-menu-item>
            <a-menu-item>导出 PPTX</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown :trigger="['click']">
        <div class="menu-item"><IconEdit /> <span class="text">编辑</span></div>
        <template #overlay>
          <a-menu>
            <a-menu-item>撤销</a-menu-item>
            <a-menu-item>重做</a-menu-item>
            <a-menu-item>添加页面</a-menu-item>
            <a-menu-item>删除页面</a-menu-item>
            <a-menu-item>打开网格线</a-menu-item>
            <a-menu-item>重置幻灯片</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown :trigger="['click']">
        <div class="menu-item"><IconPpt /> <span class="text">演示</span></div>
        <template #overlay>
          <a-menu>
            <a-menu-item>从头开始</a-menu-item>
            <a-menu-item>从当前页开始</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown :trigger="['click']">
        <div class="menu-item"><IconHelpcenter /> <span class="text">帮助</span></div>
        <template #overlay>
          <a-menu>
            <a-menu-item>意见反馈</a-menu-item>
            <a-menu-item>快捷键</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div class="right">
      <a-tooltip :mouseLeaveDelay="0" title="幻灯片放映">
        <div class="menu-item" @click="enterScreening()">
          <IconPpt size="18" fill="#666" style="margin-top: 2px;" />
        </div>
      </a-tooltip>
      <a href="https://github.com/yinhaogt/vue2-ts/tree/myPPT" target="_blank">
        <div class="menu-item"><IconGithub size="18" fill="#666" /></div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class EditorHeader extends Vue {}
</script>
<style lang="scss" scoped>
.editor-header {
  background-color: #fff;
  user-select: none;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding: 0 10px;
    transition: background-color 0.2;
    cursor: pointer;

    .text {
      margin-left: 4px;
    }
  }
  .left .menu-item:hover {
    background-color: #f9f9f9;
  }
}
</style>
