<!--
 * @Descripttion: 
 * @Author: luoli
 * @Date: 2024-09-24 21:25:54
 * @LastEditors: luoli
 * @LastEditTime: 2024-10-25 22:52:52
-->
<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">Dialog</span>
      </div>
    </template>
    <el-space wrap>
      <el-button plain @click="dialogVisible = true">基本用法</el-button>

      <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
          </div>
        </template>
      </el-dialog>
    </el-space>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);

const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>