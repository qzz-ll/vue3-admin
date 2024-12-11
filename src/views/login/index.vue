<!--
 * @Descripttion: 登录页面
 * @Author: luoli
 * @Date: 2024-09-10 17:11:25
 * @LastEditors: luoli
 * @LastEditTime: 2024-09-24 20:29:09
-->
<template>
  <section class="login-section">
    <img class="login-img-backgroud" :src="logoBackgroud" alt="首页背景" />
    <div class="login-box">
      <div class="login-form">
        <h2 class="login-title">MYADMIN</h2>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="auto" class="demo-ruleForm login-form-group">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名" clearable :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码" clearable autocomplete="off" :prefix-icon="Lock" show-password />
          </el-form-item>
          <el-form-item style="margin-top: 40px;">
            <el-button type="primary" class="w-360" @click="submitForm(ruleFormRef)">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button class="w-360" @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import  { type FormInstance, type FormRules, ElMessage } from "element-plus";
import { User, Lock } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import logoBackgroud from "@/assets/logo-backgroud.jpeg"

const ruleFormRef = ref<FormInstance>();
// 请输入至少8位必须包含小写字母和数字的密码
const regPass = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
// 检测用户名
const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
// 检测密码
const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (!regPass.test(value)) {
    callback(new Error('请输入至少8位必须包含小写字母和数字的密码'))
  } else {
    callback();
  }
};

const ruleForm = reactive({
  username: "admin",
  password: "admin123"
});
// 设置form中字段的rule
const rules = reactive<FormRules<typeof ruleForm>>({
  username: [{ validator: validateUsername, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }]
});

// 如果token存在，就清除
if (localStorage.getItem('token')) {
  localStorage.removeItem('token')
}
const router = useRouter();
// 登录提交
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (!valid) {
      ElMessage.warning('请正确输入登录信息')
      return
    }
    // 设置token
    localStorage.setItem('token', 'token')
    // 跳转到首页
    router.push({ path: '/' })
  });
};

// 重置登录项
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  ruleForm.username = ""
  ruleForm.password = ""
};
</script>

<style lang="scss" scoped>
.login-section {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  .login-img-backgroud {
    position: fixed;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  .login-box {
    display: flex;
    justify-content: right;
    align-items: center;
    .login-form {
      .login-title {
        color: #999;
        font: bold 200% Consolas, Monaco, monospace;
        text-align: center;
        margin-right: 200px;
      }
      .login-form-group ::v-deep {
        width: 360px;
        margin-right: 200px;
        .el-input__wrapper {
          padding: 6px 11px;
        }
      }
    }
  }
}
</style>