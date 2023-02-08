<template>
  <div>
    <div>Home</div>
  </div>
  <el-button type="primary" @click="toGo('login')">Login</el-button>
</template>
<script setup>
import router from '../router/index' ;
const toGo=(val)=> {
  router.push(val)
}
</script>
<style lang='less' scoped>
</style>