<template>
  <div>
    <div>Home</div>
    <el-button type="primary" @click="toGo('/login')">Login</el-button>
  </div>
</template>
<script setup>
  import router from '../router/index' ;
  const toGO = (val)=> {
    router.push(val);
  }
</script>
<style lang='less' scoped>
</style>