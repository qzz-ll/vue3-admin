<!--
 * @Descripttion: 首页
 * @Author: luoli
 * @Date: 2024-08-09 17:35:05
 * @LastEditors: luoli
 * @LastEditTime: 2024-10-30 17:30:44
-->
<template>
  <div>
    <el-row :gutter="24" justify="space-around">
      <!-- 第一模块 -->
      <!-- 顶部总数 -->
      <el-col v-for="(item, index) in chartData" :key="'card_' + index" class="mb-[20px]" :span="6" :md="6" :sm="12" :xs="24">
        <el-card class="line-card" shadow="never">
          <div class="flex justify-between">
            <span class="card-name">{{ item.name }}</span>
            <div class="w-8 h-8 flex justify-center items-center rounded-md" :style="{backgroundColor: item.bgColor}"></div>
          </div>
          <div class="flex justify-between">
            <div class="d-1/2">
              <p class="font-medium font-size-large">{{ item.value }}</p>
              <p class="font-medium text-green-500">{{ item.percent }}</p>
            </div>
            <ChartLine v-if="item.data.length > 1" class="!d-1/2" :color="item.color" :data="item.data" />
            <ChartRound v-else class="!d-1/2" />
          </div>
        </el-card>
      </el-col>
      <!-- 第二模块 -->
      <!-- 分析概览 -->
      <el-col class="mb-[20px]" :span="18" :xs="24">
        <el-card class="bar-card" shadow="never">
          <div class="flex justify-between">
            <span class="page-title">分析概览</span>
            <el-radio-group v-model="curWeek" size="small" @change="changeWeek">
              <el-radio-button v-for="item in optionsBasis" :key="item.value" :label="item.label" :value="item.value" />
            </el-radio-group>
          </div>
          <div class="flex justify-between">
            <ChartBar :requireData="barChartData[curWeek].requireData" :questionData="barChartData[curWeek].questionData" />
          </div>
        </el-card>
      </el-col>
      <!-- 解决概率 -->
      <el-col class="mb-[20px]" :span="6" :xs="24">
        <el-card shadow="never">
          <div class="flex justify-between">
            <span class="page-title">解决概率</span>
          </div>
          <div v-for="(item, index) in progressData" :key="'progress' + index" class="progress-group">
            <el-progress
              :text-inside="true"
              :percentage="item.percentage"
              :stroke-width="21"
              :color="item.color"
              striped
              striped-flow
              :duration="item.duration"
              class="progress"
            />
            <span class="text-nowrap">{{ item.week }}</span>
          </div>
        </el-card>
      </el-col>

      <!-- 第三模块 -->
      <!-- 数据统计表格 -->
      <el-col v-motion class="mb-[20px]" :span="18" :xs="24">
        <el-card shadow="never" class="h-[580px]">
          <div class="flex justify-between">
            <span class="page-title">数据统计</span>
          </div>
          <WelcomeTable class="mt-3" />
        </el-card>
      </el-col>

      <el-col v-motion class="mb-[20px] latest-news" :span="6" :xs="24">
        <el-card shadow="never">
          <div class="flex justify-between">
            <span class="page-title">最新动态</span>
          </div>
          <el-scrollbar max-height="498" class="mt-3">
            <el-timeline>
              <el-timeline-item v-for="(item, index) in latestNewsData" :key="'timeline' + index" center placement="top" color="#30B08F" :timestamp="item.date">
                <p class="text-text_color_regular text-sm">
                  {{
                  `新增 ${item.requiredNumber} 条问题，${item.resolveNumber} 条已解决`
                  }}
                </p>
              </el-timeline-item>
            </el-timeline>
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang='ts'>
import { ref } from "vue";
import { chartData, barChartData, progressData, latestNewsData } from "./data";
import ChartLine from "./components/echarts/ChartLine.vue";
import ChartRound from "./components/echarts/ChartRound.vue";
import ChartBar from "./components/echarts/ChartBar.vue";
import WelcomeTable from "./components/table/index.vue";

let curWeek = ref(1); // 0上周、1本周
let optionsBasis = ref([
  { value: 0, label: '上周' },
  { value: 1, label: '本周' },
])
// 选择本周上周
function changeWeek(week) {
  curWeek.value = week
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.card-name {
  font-weight: 600;
  color: $font-color;
}
.progress-group {
  &::after {
    content: ""; /* 添加内容 */
    clear: both; /* 清楚两侧浮动 */
    display: block; /* 转换元素类型为块元素 */
    height: 0;
    overflow: hidden; /* 溢出隐藏属性 */
    visibility: hidden; /* 隐藏属性 */
  }
  .progress {
    width: 80%;
    float: left;
    margin-top: 1.94rem;
  }
  .text-nowrap {
    float: left;
    width: 15%;
    margin-left: 4px;
    margin-top: 1.94rem;
  }
}
.latest-news {
  .el-timeline {
    margin-left: -36px;
  }
}
</style>