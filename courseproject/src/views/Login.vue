<template>
  <div class="login">
    <div class="bgp"></div>
    <div class="login_container">
      <h1>Course Management System</h1>
      <el-form
        class="login_form"
        :model="userInfo"
        :rules="rules"
        @keyup.enter="onLogin"
        ref="ref_form"
      >
        <el-form-item prop="userName">
          <el-input type="text" placeholder="Please enter username" v-model.trim="userInfo.userName" autocomplete="off"
            ><template #prepend
              ><el-icon><User /></el-icon></template
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="Please enter password" v-model.trim="userInfo.password" autocomplete="new-password"
            ><template #prepend
              ><el-icon><Key /></el-icon></template
          ></el-input>
        </el-form-item>
        <el-button type="primary" class="login_submit" @click="onLogin">Login</el-button>
        <div class="login_register" @click="toGo">Register</div>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import router from "../router/index";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { getLogin } from "../api/index";

const ref_form=ref(null)

const userInfo = reactive({
  userName: "",
  password: "",
});

const rules = {
  userName: [
    { required: true, trigger: "blur", message: "username cannot be empty" },
  ],
  password: [
    { required: true, trigger: "blur", message: "password cannot be empty" },
    {min:3, max:6, trigger:"blur", message: "password length between 3-6"}
  ],
};

const onLogin =()=> {
  ref_form.value.validate((val)=> {
    if (val) {
      getLoginData()
    }
  })
}

const getLoginData =async ()=> {
  const res = await getLogin({name: userInfo.userName, password: userInfo.password})
  if(res?.code === 1 && res?.message.indexof("account not exist") >= 0) {
    router.push('/register')
    ElMessage({
      message:res.message,
      type: 'warning',
    })
  }
  if(res?.token) {
    localStorage.setItem('token', res?.token)
    ElMessage({
      message: "login successfully",
      type: "success",
    });
    router.push('/home')
  }
}

const toGo =()=> {
  router.push('/register')
}
</script>
<style lang="less" scoped>
// @-webkit-keyframes fadenum {
//   0% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// }

.login {
  height: 100%;

  .bgp {
    height: 100%;
    // background-image: url("../assets/bj.jpeg");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50% 50%;
  }

  .el-icon {
    height: 30px !important;
  }

  .login_container {
    // animation: fadenum 1s ease;
    position: absolute;
    z-index: 1;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s;
    min-height: 273px;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;

    h1 {
      font-size: 24px;
      transition: all 1s;
      font-weight: bold;
      margin-bottom: 36px;
    }

    .el-card {
      border-radius: 20px;
    }

    .login_form {
      .login_submit {
        width: 100%;
        height: 50px;
        border-radius: 20px;
        margin-bottom: 10px;
      }

      .login_register {
        width: 70%;
        font-size: 0.875rem;
        margin: 0 auto;
      }

      :deep(.el-input-group__prepend) {
        padding: 0 10px;
      }
    }
  }
}
</style>
