<!--
 * @Descripttion: 展示card的顶部
 * @Author: luoli
 * @Date: 2024-09-05 23:11:03
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-05 23:16:53
-->
<template>
  <el-card shadow="never" class="box-card box-space g-card--isheader">
    <div slot="header">
      <slot name="header">
        <div class="page-title">
          <span>{{title}}</span>
        </div>
      </slot>
    </div>
  </el-card>
</template>
<script setup lang='ts'>
  defineOptions({
    name: "BaseCard"
  });
  
  defineProps({
    title: {
      type: String,
      default: ''
    },
  })
</script>
<style scoped>
.box-card {
  margin-bottom: 0;
}
</style>