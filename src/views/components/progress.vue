<!--
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-10-29 10:45:17
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 18:43:44
-->
<script setup lang="ts">
defineOptions({
  name: "PureProgress",
});

const format = (percentage) => (percentage === 100 ? "Full" : `${percentage}%`);
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header"><span class="content-title">进度条</span></div>
    </template>
    <p class="mb-4">直线进度条动画</p>
    <div class="w-1/4">
      <el-progress indeterminate :percentage="50" class="mb-4" />
      <el-progress indeterminate :percentage="100" :format="format" class="mb-4" />
      <el-progress indeterminate :percentage="100" status="success" class="mb-4" />
      <el-progress indeterminate :percentage="100" status="warning" class="mb-4" />
      <el-progress indeterminate :percentage="50" status="exception" class="mb-4" />
    </div>

    <p class="mb-4">进度条内显示百分比标识</p>
    <div class="w-1/4">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="70" class="mb-4" />
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" striped striped-flow :duration="70" class="mb-4" />
      <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" class="mb-4" />
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception" striped striped-flow class="mb-4" />
    </div>

    <p class="mb-4">自定义内容</p>
    <div class="w-1/4 demo-progress">
      <el-progress :percentage="50">
        <el-button text>自定义内容</el-button>
      </el-progress>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
        <span>自定义内容</span>
      </el-progress>
      <el-progress type="circle" :percentage="100" status="success">
        <el-button type="success" circle />
      </el-progress>
      <el-progress type="dashboard" :percentage="80">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label">上升率</span>
        </template>
      </el-progress>
    </div>
  </el-card>
</template>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

.demo-progress .el-progress--line {
  width: 350px;
  margin-bottom: 15px;
}

.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
