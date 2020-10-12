<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加图案</h3>
      <add-form ref="form" :children="$route.meta.children"></add-form>
      <el-row type="flex" justify="end">
        <el-button @click="submit" type="primary">提交</el-button>
        <el-button @click="back">返回</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import addForm from '@/views/goodpattern/addForm'

export default {
  components: { addForm },
  data() {
    return {}
  },
  created() {
  },
  methods: {
    submit() {
      this.$refs.form.submit(() => {
        this.$router.push({ path: '/goodpattern' })
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.card-container {
  .box-card {

  }
}
</style>
