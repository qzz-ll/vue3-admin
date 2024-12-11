<!--
 * @Descripttion: 折线图
 * @Author: luoli
 * @Date: 2024-09-04 15:15:26
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-04 20:28:49
-->
<script setup lang="ts">
import echarts from "@/plugins/echarts"
import { type PropType, ref, onMounted } from "vue";

const props = defineProps({
  data: {
    type: Array as PropType<Array<number>>,
    default: () => []
  },
  color: {
    type: String,
    default: "#41b6ff"
  }
});

  const options = {
    container: ".line-card",
    xAxis: {
      type: "category",
      show: false,
      data: props.data
    },
    grid: {
      top: "15px",
      bottom: 0,
      left: 0,
      right: 0
    },
    yAxis: {
      show: false,
      type: "value"
    },
    series: [
      {
        data: props.data,
        type: "line",
        symbol: "none",
        smooth: true,
        color: props.color,
        lineStyle: {
          shadowOffsetY: 3,
          shadowBlur: 7,
          shadowColor: props.color
        }
      }
    ]
  }

const chartRef = ref();
// echarts 需要在mounted中获取到dom元素再init
onMounted(() => {
  const chart = echarts.init(chartRef.value);

  
  chart.setOption(options);
})
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 60px" />
</template>
