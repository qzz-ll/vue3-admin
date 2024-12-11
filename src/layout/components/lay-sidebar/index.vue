<!--
 * @Descripttion: 页面左侧导航栏部分
 * @Author: luoli
 * @Date: 2024-08-09 17:59:36
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 16:48:27
-->
<template>
  <section class="sidebar-container">
    <el-scrollbar height="100%" class="scrollbar-wrapper">
      <el-menu 
        unique-opened
        mode="vertical"
        :default-active="activeIndex"
        class="el-menu-vertical-demo" 
      >
        <div class="menu-item">
          <img class="logo-img" :src="logo" alt="myAdmin" />MyAdmin
        </div>
        <template v-for="(sideNav, sideIndex) in sideRoutes" :key="sideIndex">
          <el-sub-menu v-if="sideNav.children.length > 1" :index="sideNav.path">
            <template #title>
              <span>{{sideNav.meta.title}}</span>
            </template>
            <sidebar-item :item="sideNav"></sidebar-item>
          </el-sub-menu>
          <template v-else :index="sideNav.path">
            <sidebar-item :item="sideNav"></sidebar-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </section>
</template>
<script setup lang='ts'>
import { sideRoutes } from "@/router/index";
import logo from "@/assets/logo.png"
import { computed } from "vue";
import { useRoute } from "vue-router";
import SidebarItem from "./components/SidebarItem.vue"

const route = useRoute();
let activeIndex = computed(() =>
  route.meta?.activePath ? route.meta.activePath : route.path
);
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.menu-item {
  align-items: center;
  box-sizing: border-box;
  color: $normal-font-size;
  display: flex;
  font-size: $el-menu-text-color;
  height: 56px;
  line-height: 56px;
  list-style: none;
  padding: 0 20px;
  position: relative;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
}
.logo-img {
  width: 30px;
  margin-right: 10px;
}
</style>