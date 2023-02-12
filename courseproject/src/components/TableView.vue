<template>
    <div class="table">

        <el-table :data="list" :row-class-name="tableRowClassName" >
          <el-table-column prop="courseImg" label="CourseImg"  >
            <template #default="scope">
              <img :src="scope.row.courseImg" class="courseImg-img" />
            </template>
          </el-table-column>
          />
          <el-table-column prop="title" label="Title"  />
          <el-table-column prop="price" label="Price" />
          <el-table-column prop="point" label="Point" />
          <el-table-column label="Action" >
            <template #default="scope">
              <el-button type="primary" @click="editClick(scope.row)">Edit</el-button>
              <el-popconfirm title="Are you sure to delete this?" @confirm="deleteClick(scope.row.id)">
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
import { ElTable } from "element-plus";
import { defineProps, toRefs } from "vue";
const props = defineProps({ list: Array, editClick: Function, couseEditItem: Object, deleteClick: Function});
const { list, editClick, deleteClick } = toRefs(props);
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

  .table-column {
  width: 20%;
}
  ::v-deep .el-table th,
  ::v-deep .el-table td {
    text-align: center !important;
  }




</style>
