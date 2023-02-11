<template>
  <div class="main">
    <Table :list="data.list" :editClick="editClick" :courseEditItem="courseEditItem" />
  </div>
  <PopEdit :popShow="popShow" :message="courseEditItem.message" :confirmClick="confirmClick" />
</template>
<script setup>
  import Table from '../components/TableView';
  import { reactive, ref } from 'vue';
  import PopEdit from './PopEdit';
  import { ElMessage } from 'element-plus';
  const courseEditItem = reactive({
  message: {}
  })
  const popShow = ref(false);
  const isPopShow = (val)=> {
    popShow.value = val
  }
  const editClick = (val) => {
    isPopShow(true)
    console.log(val)
    courseEditItem.message = val
    console.log("🚀 ~ file: Main.vue:23 ~ editClick ~ courseEditItem", courseEditItem.message)
  }

  const confirmClick=(val) => {
    if (val === "cancel") {
      popShow.value = false;
    } else if(val.title !==courseEditItem.message.title || val.price !==courseEditItem.message.price) {
      data.list.map((item)=> {
        if(item.id === val.id) {
          item.title = val.title
          item.price = val.price
        }
      })
      popShow.value = false;
    }else {
      ElMessage({
        showClose: true,
        message: "there is no change",
        type: 'warning',
      })
    }
  }
    const data = reactive({
      list: [
        {
            category: "front",
            courseImg: "https://file.xdclass.net/video/2022/77-QD/cover.jpeg",
            del: 0,
            id: 1,
            point: 9.8,
            price: "99",
            title: "22年新版【前端高级工程师】面试专题第一季"
          },
          {
            category: "front",
            courseImg: "https://file.xdclass.net/video/2022/75-Vue3/cover1.jpeg",
            del: 0,
            id: 2,
            point: 9.5,
            price: "99",
            title: "22年新版-零基础玩转vue3+开发仿美团外卖项目vue视频"
          },
          {
            category: "front",
            courseImg: "https://file.xdclass.net/video/2022/76-webpack5/cover.jpeg",
            del: 0,
            id: 3,
            point: 9.3,
            price: "59",
            title: "新版webpack5丨带你玩转时下最流行的构建工具"
          },
          {
            category: "front",
            courseImg: "https://file.xdclass.net/video/2021/74-git/WechatIMG3026.jpeg",
            del: 0,
            id: 4,
            point: 9.2,
            price: "39",
            title: "22年新版-玩转Git零基础到进阶实战 git视频急速入门"
          },
          {
            category: "front",
            courseImg: "https://file.xdclass.net/video/2021/73-ES6/cover.jpeg",
            del: 0,
            id: 5,
            point: 9.4,
            price: "49",
            title: "22年新版-玩转ECMAScript6零基础到进阶实战es6视频"
          },
      ]
    })
</script>
<style lang="less" scoped></style>
