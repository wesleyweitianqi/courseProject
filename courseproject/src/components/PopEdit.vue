<template>
  <div>
    <el-dialog
      :message="message"
      title="Course Edit"
      v-model="popShow"
      width="30%"
      center
      :show-close="false"
      :close-on-click-modal="false"
    >
      <el-form :model="editData" ref="ruleFormRef">
        <el-form-item label="Title" prop="title" required>
          <el-input v-model="editData.title" width="70%" />
        </el-form-item>
        <el-form-item label="Price" prop="price" required>
          <el-input v-model="editData.price" width="70%" />
        </el-form-item>

        <el-form-item>
          <el-button @click="confirmClick('cancel')">Cancel</el-button>
          <el-button type="primary" @click="confirmClick(editData)"
            >Confirm</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script setup>
import { reactive, defineProps, toRefs, ref, watch } from "vue";
const props = defineProps({
  popShow: Boolean,
  message: Object,
  confirmClick: Function,
});

const { popShow, message, confirmClick } = toRefs(props);
const editData = reactive({
  title: message.value ? message.value.title : "",
  price: message.value ? message.value.price : "",
  id: message.value ? message.value.id : "",
});

watch(
  () => message.value,
  (newVal) => {
    editData.title = newVal.title;
    editData.price = newVal.price;
    editData.id = newVal.id;
  }
);
const ruleFormRef = ref(null);
const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      confirmClick({
        title: editData.title,
        price: editData.price,
        id: editData.id,
      });
    } else {
      console.log("error", fields);
    }
  });
};
</script>
<style lang="less" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

:deep(.el-form-item__label) {
  width: 80px !important;
}

:deep(.el-form-item__content) {
  justify-content: center;
  margin-left: 0 !important;
}
</style>
