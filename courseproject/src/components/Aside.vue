<template>
<div>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="white"
    :collapse="isCollapse"
  >
    <div class="coding-icon">
      <img src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg" />
      <span >Course Study</span>
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Document /></el-icon>
        <span>Couse Select</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">Front-end Course</el-menu-item>
        <el-menu-item index="1-2">Back-end Course</el-menu-item>
        <el-menu-item index="1-3">Full-stack Course</el-menu-item>
      </el-menu-item-group>
      
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>User Setting</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
      </el-menu-item-group>
      
    </el-sub-menu>
   
  </el-menu>
</div>
</template>
<script setup>
import { Document } from '@element-plus/icons-vue';
import { defineProps, toRefs } from "vue";
const props = defineProps({
  "isCollapse": Boolean
})
let { isCollapse }= toRefs(props)

</script>
<style lang='less' scoped>

.el-radio-button__inner {
  padding: 0;
}

.el-menu--collapse {
  border: none;
}

.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  border: none;
}

.coding-icon {
  display: flex;
  align-items: center;
  font-weight: 600;
  height: 60px;
  background-color: #fff;
  white-space: nowrap;
  padding-left: 15px;
  span {
    font-size: 1.2rem;
  }
  img {
    width: 45px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
}
</style>