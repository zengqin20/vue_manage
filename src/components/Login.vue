<template>
  <div class="login_container">
    <!-- 登录弹框提示 -->

    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- 登录表单 -->
      <el-form ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm" :rules="rules">
        <!-- username -->
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" prefix-icon="el-icon-s-custom" v-model="loginForm.username">
          </el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input placeholder="请输入用户密码" prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      // 登录数据表单的数据绑定
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 10, message: '长度为3-9', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 重置按钮
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const result = await this.$http.post('login', this.loginForm)
        const { data: res } = result
        if (res.meta.status !== 200) return this.$message.error('登录失败,请检查输入是否正确')
        this.$message.success('登录成功,正在跳转...')
        console.log(res)
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }

  }
}
</script>

<style  scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.btns {
  display: flex;
  justify-content: space-around;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 430px;
  padding: 0 10px;
}
</style>
