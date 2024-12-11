<!--
 * @Descripttion: 分页组件
 * @Author: luoli
 * @Date: 2024-09-05 21:02:16
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-05 22:50:17
-->
<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="pageSizes"
    :size="size"
    :background="background"
    :layout="layout"
    :total="total"
    class="mt-4 pagination-box"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
<script setup lang='ts'>
import { PropType, ref, defineProps, defineEmits } from 'vue'
import { useVModel } from "@vueuse/core"
import { type ComponentSize } from 'element-plus'

const props = defineProps({
  total: {
    type: Number, 
    required: true,
    default: 0
  },
  page: {
    type: Number,
    required: true,
    default: ref(1)
  },
  limit: {
    type: Number,
    required: true,
    default: ref(15)
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    required: true,
    default: () => {
      return [10, 15, 30, 50, 100]
    }
  },
  layout: {
    type: String,
    required: true,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  background: {
    type: Boolean,
    required: true,
    default: true
  },
  size: {
    type: String,
    required: true,
    default: () => {
      return ref<ComponentSize>('default')
    }
  }
})
const emits = defineEmits(['size-change', 'current-change'])
// 更新当前页数
const currentPage: any = useVModel(props, 'page', emits)
// 更新每页显示条数
const pageSize: any = useVModel(props, 'limit', emits)

// 点击每页条数函数
const handleSizeChange = (val: number) => {
  emits('size-change', { page: 1, limit: val })
}
// 点击当前页数函数
const handleCurrentChange = (val: number) => {
  currentPage.value = val
  emits('current-change', { page: val, limit: props.limit })
}
</script>
<style lang="scss" scoped>
  .pagination-box {
    justify-content: right;
    padding: 20px 10px 0 0;
  }
</style>