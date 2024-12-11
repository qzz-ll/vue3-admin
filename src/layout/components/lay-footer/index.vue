<!--
 * @Descripttion: 底部
 * @Author: luoli
 * @Date: 2024-08-09 15:18:25
 * @LastEditors: luoli
 * @LastEditTime: 2024-10-25 22:13:40
-->
<template>
  <footer class="foot-bar">
    Copyright © 2024-present
    <a class="hover:text-primary" href="https://github.com/vue3-admin" target="_blank">{{title}}</a>
  </footer>
</template>
<script lang="ts" setup>
let title = "MyAdmin";
</script>

<style lang="scss" scoped>
  .foot-bar {
    // position: absolute;
    // bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    color: #0009;
    a {
      margin-left: 8px;
    }
  }
</style>
