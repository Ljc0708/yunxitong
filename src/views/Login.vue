<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">云系统后台管理系统</div>
      <el-form
        :model="loginFrom"
        :rules="rules"
        ref="loginFromRef"
        label-width="0px"
        class="ms-content"
      >
        <el-form-item prop="userName">
          <el-input v-model="loginFrom.userName" placeholder="用户名" clearable>
            <template #prepend>
            <el-icon :size="18"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="loginFrom.password"
            @keyup.enter="submitForm(loginFromRef)"
            clearable
          >
            <template #prepend>
             <el-icon :size="18"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm(loginFromRef)"
            >登录</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import type { FormInstance } from "element-plus";
import { useRouter } from "vue-router";
// import { ElMessage } from "element-plus";
import { IntData } from "../type/login";
import { login } from "../http/api"
export default defineComponent({
  setup() {
    const router = useRouter();
    const data = reactive(new IntData());
    const rules = {
      userName: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    const submitForm = (loginFromRef: FormInstance | undefined) => {
      loginFromRef.validate((valid: boolean) => {
        if (valid) {
          login(data.loginFrom).then(res=>{
            console.log(res)
            sessionStorage.setItem("token",res.token)
            sessionStorage.setItem("ms_username",res.login.userName)
            router.push("/")
          })
        }
      });
    };
    return {
      ...toRefs(data),
      rules,
      submitForm,
    };
  },
});
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
</style>
