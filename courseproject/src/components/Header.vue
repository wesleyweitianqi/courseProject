<template>
  <div class="header">
    <div class="home-icon">
      <el-icon
        size="30px"
        @click="handleCollapse"
        :style="{ transform: isCollapse ? '' : 'rotate(180deg)' }"
        ><Expand
      /></el-icon>
      <span >Home</span>
    </div>
    <div
      class="user"
      @mouseenter="isShownUserInfo('show')"
      @mouseleave="isShownUserInfo('leave')"
    >
      <img
        :src="userInfo.headImg"
      />
      <div v-show="show" class="userInfo">
        <div>{{ userInfo.name }}</div>
        <div @click="logout">Logout</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
import { ref, defineProps, toRefs, onMounted, reactive } from "vue";
import { getUserInfo } from "../api/index";
const show = ref(false);
const isShownUserInfo = (val) => {
  val === "show" ? (show.value = true) : (show.value = false);
};
const props = defineProps(["handleCollapse", "isCollapse"]);
const { handleCollapse, isCollapse } = toRefs(props);

const userInfo = reactive({
  name: "",
  headImg: "",
});

const getUserInfoData = async ()=> {
  const res = await getUserInfo()
  if(res?.data.name && res?.data.head_image) {
    userInfo.name = res.data.name;
    userInfo.headImg = res.data.head_image;
  }
}

const logout =()=> {
  router.push('/login');
  localStorage.removeItem('token')
}

onMounted(()=> {
  getUserInfoData()
})

</script>
<style lang="less" scoped>
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

  .home-icon {
    display: flex;
    align-items: center;
    

    span {
      margin-left: 10px;
      font-weight: bold;
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
