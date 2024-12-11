<!--
 * @Descripttion: 面包屑
 * @Author: luoli
 * @Date: 2024-11-01 17:18:17
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 18:33:38
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item>
      <a href="/">首页</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang='ts'>
  import { ArrowRight } from '@element-plus/icons-vue';
  import { useRoute, useRouter } from "vue-router";
  import { watch } from "vue"

  const route = useRoute();
  const router = useRouter();
  const levelList = ref([]);
  console.log(route, router)
  watch(
    () => route,
    (newVal, oldVal) => {
      console.log(newVal, oldVal)
    },
    { deep: true }
  )
</script>