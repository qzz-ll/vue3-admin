<!--
 * @Descripttion: 用户
 * @Author: luoli
 * @Date: 2024-08-15 16:21:37
 * @LastEditors: luoli
 * @LastEditTime: 2024-11-01 17:16:54
-->
<template>
  <div class="user-center">
    <!-- 分割线 -->
    <el-divider direction="vertical" />
    <!-- 用户个人信息 -->
    <el-dropdown @command="handleCommand">
      <span>
        <span>{{user.name}}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang='ts'>
import { ArrowDown } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter()
const handleCommand = (command: string) => {
  if (command === 'logout') {
    localStorage.removeItem('token')
    router.push('/login')
  }
}
// 用户信息
let user = {
  userId: 1,
  name: 'admin'
}
</script>
