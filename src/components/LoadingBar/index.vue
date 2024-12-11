<!--
 * @Descripttion: 进度条
 * @Author: luoli
 * @Date: 2024-09-24 15:33:38
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-24 16:45:01
-->
<template>
  <section class="wraps">
    <div ref="bar" class="bar"></div>
  </section>
</template>
<script setup lang='ts'>
import { ref } from "vue";
let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>()
const startLoading = () => {
  let dom = bar.value as HTMLElement;
  speed.value = 1;
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1;
      dom.style.width = speed.value + "%";
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1;
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = bar.value as HTMLElement;
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100;
      dom.style.width = speed.value + "%";
    })
  }, 500)
}
defineExpose({
  startLoading,
  endLoading
})
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
  .wraps {
    position: fixed;
    top: 0;
    width: 100%;
    .bar {
      height: inherit;
      width: 0;
      height: 2px;
      background: $blue;
    }
  }
</style>
