<template>
<div class="pagination">
  <div class="pre" @click="currentChange('pre')">Prev</div>
  <div class="next" @click="currentChange('next')">Next</div>
</div>
</template>
<script setup>
  import { defineProps, toRefs } from 'vue';
  const props = defineProps({currentChange: Function,})
  const { currentChange } = toRefs(props);

</script>
<style lang='less' scoped>
  .pagination {
    margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-top: 20px auto;
  color: #fff;

  .pre {
    background-color: #409eff;
    margin-right: 10px;
    padding: 5px;
  }

  .next {
    padding: 5px;
    background-color: #409eff;
  }
}
</style>