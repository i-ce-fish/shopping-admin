<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb, .el-breadcrumb {
  height: 50px;
  line-height: 50px;

}
</style>
