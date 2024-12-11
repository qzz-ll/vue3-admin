<!--
 * @Descripttion: 表格
 * @Author: luoli
 * @Date: 2024-09-04 21:41:15
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-05 22:53:27
-->
<script setup lang="ts">
import { reactive } from "vue"
/* import { useColumns } from "./columns.ts";
const { loading, columns, dataList, pagination, Empty, onCurrentChange } =useColumns(); */
import Pagination from "@/components/Pagination/index.vue"

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const pagination = reactive({
  page: 1,
  limit: 15,
  total: tableData.length
})
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <Pagination :total="pagination.total" :page="pagination.page" :limit="pagination.limit"></Pagination>
</template>

<style lang="scss">
.pure-table-filter {
  .el-table-filter__list {
    min-width: 80px;
    padding: 0;

    li {
      line-height: 28px;
    }
  }
}
</style>

<style lang="scss" scoped>
:deep(.el-table) {
  --el-table-border: none;
  --el-table-border-color: transparent;

  .el-empty__description {
    margin: 0;
  }

  .el-scrollbar__bar {
    display: none;
  }
}
</style>
