<template>
  <div class="home">
    <el-container>
      <el-aside width="200px"><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main><Main /></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import router from '../router/index' ;
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
import Main from '../components/Main.vue'

const toGo=(val)=> {
  router.push(val)
}
</script>
<style lang='less' scoped>
.el-aside {
  width: auto;
  background-color: #545c64;
  width: auto;
  overflow: hidden;
}

.el-container {
  height: 100vh;
}

.el-main {
  display: flex;
}

.el-header {
  // padding: 0 20px 0 0;
  background-color: #fff;
}
</style>