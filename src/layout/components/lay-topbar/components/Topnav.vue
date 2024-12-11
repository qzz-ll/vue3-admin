<!--
 * @Descripttion: 顶部导航
 * @Author: luoli
 * @Date: 2024-08-15 16:21:15
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 17:48:00
-->
<template>
  <el-menu class="el-menu-dome" mode="horizontal" :default-active="activeIndex" :ellipsis="false">
    <div class="flex-grow" />
    <div v-for="(topItem, topIndex) in topRoutes" :key="topIndex">
      <el-sub-menu v-if="topItem.children.length > 1" :index="topItem.path">
        <template #title>
          <span>{{topItem.meta.title}}</span>
        </template>
        <item :item="topItem"></item>
        </el-sub-menu>
        <template v-else :index="topItem.path">
          <item :item="topItem"></item>
      </template>
    </div>
  </el-menu>
</template>
<script setup lang="ts">
import { topRoutes } from "@/router/index";
import { useRoute } from "vue-router";
import { computed } from "vue";
import Item from "./Item.vue"

const route = useRoute();

const activeIndex = computed(() =>
  route.meta?.activePath ? route.meta.activePath : route.path
);
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>