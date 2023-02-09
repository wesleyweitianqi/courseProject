<template>
<div class="header">
  <div class="Home-icon">
    <el-icon @click="handleCollapse" :style="{ transform: isCollapse ? '' : 'rotate(180deg)' }"
    ><Expand /></el-icon>
    <span>Home</span>
  </div>
  <div class="user"
  @mouseenter="isShownUserInfo('show')"
  @mouseleave="isShownUserInfo('leave')"
  >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvd0ZOVSlgwSE1XldJPB0oVTI-xL1jj1DMvg&usqp=CAU" />
    <div v-show="show" class="userInfo"> 
      <div>Wesley</div>
      <div>Logout</div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref, defineProps, toRefs } from 'vue';
const show = ref(false)
const isShownUserInfo=(val)=> {
  val === 'show' ? show.value = true : show.value = false;
}
const props = defineProps(['handleCollapse', 'isCollapse'])
const { handleCollapse, isCollapse} = toRefs(props)

</script>
<style lang='less' scoped>
.userInfo {
  z-index: 22;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5px;
  bottom: -70px;
  background-color: white;
  border: 5px;
  box-shadow: 0 4px 8px 0 rgb(7 17 27 / 10%);
  text-align: center;

  div:hover {
    color: #409eff;
  }

  div {
    padding: 10px;
  }
}

.header {
  position: relative;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;

  .homeIcon {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }

  .user {
    display: flex;
    justify-content: center;
    width: 80px;

    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
}
</style>