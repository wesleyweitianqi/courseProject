<template>
<div>
  <el-dialog title="Course Edit" v-model="popShow" width="30%" center :show-close="false">
    <el-form :model="editData" ref="ruleFormRef">
      <el-form-item label="Title" prop="title" required>
        <el-input v-model="editData.title" width="70%"/>
      </el-form-item>
      <el-form-item label="Price" prop="price" required>
        <el-input v-model="editData.price" width="70%"/>
      </el-form-item>
      <el-form-item >
        <el-button @click="confirmClick('cancel')">Cancel</el-button>
        <el-button type="primary">Confirm</el-button>
      </el-form-item>
      <el-form-item >
        <p>{{ editData }}</p>
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>
<script setup>
 import { reactive, defineProps, toRefs, ref} from 'vue';
 const props = defineProps({
  'popShow': Boolean,
  'message': Object,
  'confirmClick': Function,
 })

 const { popShow, message, confirmClick } = toRefs(props)
 const editData = reactive({
  title: message.value.title,
  price: message.value.price,
  id: message.value.id,
 })

const ruleFormRef = ref(null);
const submitForm = async (formEl)=> {
  if (!formEl) return 
  await formEl.validate((valid, fields)=> {
    if(valid) {
      confirmClick({title: editData.title, price: editData.price, id: editData.id})
    } else {
      console.log("error", fields)
    }
  })
}


</script>
<style lang='less' scoped>
</style>