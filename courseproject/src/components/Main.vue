<template>
  <div class="main">
    <el-form>
      <el-input
        v-model.trim="inputValue"
        palceholder="enter to search"
      ></el-input>
      <el-button type="primary" @click="handleClick">Search</el-button>
    </el-form>

    <Table
      :courseList="courseList"
      :list="data.list"
      :editClick="editClick"
      :deleteClick="deleteClick"
      :courseEditItem="courseEditItem"
      style="width: 100%"
    />
    <Pagination :currentChange="currentChange" />
  </div>
  <PopEdit
    :popShow="popShow"
    :message="courseEditItem"
    :confirmClick="confirmClick"
  />
</template>
<script setup>
import Table from "../components/TableView";
import { reactive, ref, computed } from "vue";
import PopEdit from "./PopEdit";
import Pagination from "./PaginationView";
import { ElMessage } from "element-plus";
let courseEditItem;
let popShow = ref(false);
const isPopShow = (val) => {
  popShow.value = val;
};

const initCourseEditItem = (val) => {
  courseEditItem = reactive({
    title: val.title,
    price: val.price,
    id: val.id,
  });
};
const editClick = (val) => {
  isPopShow(true);
  initCourseEditItem(val);
};

const deleteClick = (val) => {
  console.log(val);
  if (val) {
    data.list = data.list.filter((item) => item.id !== val);
  }
};

const confirmClick = (val) => {
  if (val === "cancel") {
    popShow.value = false;
  } else if (
    val.title !== courseEditItem.title ||
    val.price !== courseEditItem.price
  ) {
    data.list.map((item) => {
      if (item.id === val.id) {
        item.title = val.title;
        item.price = val.price;
      }
    });
    popShow.value = false;
  } else {
    ElMessage({
      showClose: true,
      message: "there is no change",
      type: "warning",
    });
  }
};

const inputValue = ref("");
const courseList = computed(() => {
  return data.list?.filter((item) => {
    return item.title.indexOf(inputValue.value) >= 0;
  });
});

const handleClick = () => {
  if (inputValue.value) {
    ElMessage({
      message: "search successfully",
      type: "success",
    });
  } else {
    ElMessage({
      message: "Please enter search key word",
      type: "error",
    });
  }
};
const data = reactive({
  list: [
    {
      category: "front",
      courseImg: "https://file.xdclass.net/video/2022/77-QD/cover.jpeg",
      del: 0,
      id: 1,
      point: 9.8,
      price: "99",
      title: "22年新版【前端高级工程师】面试专题第一季",
    },
    {
      category: "front",
      courseImg: "https://file.xdclass.net/video/2022/75-Vue3/cover1.jpeg",
      del: 0,
      id: 2,
      point: 9.5,
      price: "99",
      title: "22年新版-零基础玩转vue3+开发仿美团外卖项目vue视频",
    },
    {
      category: "front",
      courseImg: "https://file.xdclass.net/video/2022/76-webpack5/cover.jpeg",
      del: 0,
      id: 3,
      point: 9.3,
      price: "59",
      title: "新版webpack5丨带你玩转时下最流行的构建工具",
    },
    {
      category: "front",
      courseImg:
        "https://file.xdclass.net/video/2021/74-git/WechatIMG3026.jpeg",
      del: 0,
      id: 4,
      point: 9.2,
      price: "39",
      title: "22年新版-玩转Git零基础到进阶实战 git视频急速入门",
    },
    {
      category: "front",
      courseImg: "https://file.xdclass.net/video/2021/73-ES6/cover.jpeg",
      del: 0,
      id: 5,
      point: 9.4,
      price: "49",
      title: "22年新版-玩转ECMAScript6零基础到进阶实战es6视频",
    },
  ],
  page: 1,
  total: 5,
});

const currentChange = (val) => {
  console.log(val)
  if(val === "pre") {
    if(data.page > 1) {
      data.page--
    }else {
      ElMessage({
        message: 'current is first page',
        type: 'warning',
        showClose: true,
      })
    }
  }
  if(val === 'next') {
    if(data.page < Math.ceil(data.total / 5)) {
      console.log(data.page)
      data.page++
    }else {
      console.log(data.page)
      ElMessage({
        message: 'current is last page',
        type: 'warning',
        showClose: true,
      })
    }
  }
}

</script>
<style lang="less" scoped>
.el-form {
  display: flex;
  width:30%;
  margin-bottom: 30px;
}

.main {
  background-color: #fff;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .input-with-select {
    width: 400px;
    margin-bottom: 40px;
  }
}

:deep(.el-table__header-wrapper) {
  position: fixed;
  z-index: 20;
}

:deep(.el-table__inner-wrapper) {
  overflow: hidden;
}

:deep(.el-table__body-wrapper) {
  margin-top: 40px;
}

:deep(.el-input__inner) {
  width: 300px;
  margin-right: 10px;
}

:deep(.warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9) !important;
  height: 140px !important;
}

.table {
  height: 80vh;
  width: 85vw;
  overflow: hidden;
  overflow-y: scroll;
}

.table::-webkit-scrollbar {
  display: none;
}
</style>
