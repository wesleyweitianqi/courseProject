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
import { reactive, ref, computed, onMounted } from "vue";
import PopEdit from "./PopEdit";
import Pagination from "./PaginationView";
import { ElMessage } from "element-plus";
import { getCourse } from "../api/index";
import axios from "axios";


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
  list: [],
  page: 1,
  total: 15,
  sideCategory: 'front',
});

const getCourseData = async (query)=> {
  const category = query?.category || data.sideCategory;
  const page = query?.page || 1;
  const size = query?.size || 5;
  const res = await getCourse({category: category, page:page, size:size});
  // const res = await axios.get('http://localhost:3000/api/v1/course/find', {category: category, page:page, size:size}, {headers: localStorage.getItem('token')})
  //filter courses by category
  data.list = res?.data.list.filter((item)=> (item.category === category));
  data.total = res?.data.total;
}

onMounted(() => {
  getCourseData()
})

const currentChange = (val) => {
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
      data.page++
    }else {
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
