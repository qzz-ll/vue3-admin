<!--
 * @Descripttion: 页面顶部部分
 * @Author: luoli
 * @Date: 2024-08-09 15:19:06
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 18:34:29
-->
<template>
  <div class="topbar-container">
    <!-- <Breadcrumb class="bread-crumb"></Breadcrumb> -->
    <topnav class="navbar-section"></topnav>
    <user-center></user-center>
  </div>
</template>
<script setup lang='ts'>
// import Breadcrumb from "./components/Breadcrumb.vue"
import Topnav from "./components/Topnav.vue"
import UserCenter from "./components/UserCenter.vue"
</script>
