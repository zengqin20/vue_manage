<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name: 'home',
  methods: {
    logout () {
      // 清空token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style  scoped>
</style>
