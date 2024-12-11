<!--
 * @Descripttion: 页面整体架构部分
 * @Author: luoli
 * @Date: 2024-08-09 14:15:02
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-06 17:30:35
-->
<template>
  <!-- 左侧导航 -->
  <Sidebar></Sidebar>
  <div class="main-container">
    <!-- 顶部导航 -->
    <Topbar></Topbar>
    <div class="app-container">
      <!-- 中间中体内容 -->
      <app-main></app-main>
      <!-- 底部信息 -->
      <Footbar></Footbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "./components/lay-sidebar/index.vue";
import Topbar from "./components/lay-topbar/index.vue";
import AppMain from "./components/lay-content/index.vue";
import Footbar from "./components/lay-footer/index.vue";
</script>

<style lang="scss" scoped>
</style>
