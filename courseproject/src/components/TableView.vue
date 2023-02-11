<template>
    <div class="table">

        <el-table :data="list" :row-class-name="tableRowClassName">
          <el-table-column prop="courseImg" label="CourseImg" width="180">
            <template #default="scope">
              <img :src="scope.row.courseImg" class="courseImg-img" />
            </template>
          </el-table-column>
          />
          <el-table-column prop="title" label="Title"  width="180"/>
          <el-table-column prop="price" label="Price" width="180"/>
          <el-table-column prop="point" label="Point" />
          <el-table-column label="Action" width="180">
            <template #default="scope">
              <el-button type="primary" @click="editClick(scope.row)">Edit</el-button>
              <el-popconfirm title="Are you sure to delete this?">
                <template #reference>
                  <el-button type="danger">Delete</el-button>
                </template>
              </el-popconfirm>
            </template> </el-table-column
          >/>
        </el-table>
    </div>
</template>
<script setup>
import { defineProps, toRefs } from "vue";
const props = defineProps({ list: Array, editClick: Function, couseEditItem: Object });
const { list, editClick, couseEditItem } = toRefs(props);
const tableRowClassName = (rowIndex) => {
  if (rowIndex % 2 === 0) {
    return "warning-row";
  }
  return "";
};
</script>
<style lang="less" scoped>
.courseImg-img {
  width: 150px;
  height: 100px;
}
</style>
