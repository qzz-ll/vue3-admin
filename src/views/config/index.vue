<!--
 * @Descripttion: 配置
 * @Author: luoli
 * @Date: 2024-08-16 18:23:37
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-12 11:10:24
-->
<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">配置</span>
      </div>
    </template>
    <el-alert :title="title" type="warning" />
  </el-card>
</template>
<script setup lang='ts'>
let title = "此功能目前暂不支持，请等待后续更新"
</script>