<template>
 <div>
  vue study
 
  <el-button type="primary">Primary</el-button>
  <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
div {
  text-align: center;
  P {
    background-color: blue;
  }

}
</style>
