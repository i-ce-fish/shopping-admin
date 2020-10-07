<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加品牌名称</h3>
      <add-form ref="form"></add-form>
      <el-row type="flex" justify="end">
          <el-button @click="submit" type="primary">提交</el-button>
          <el-button @click="back">返回</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import addForm from '@/views/goodbrand/addForm'

export default {
  components: {
    addForm
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {
    submit() {
      this.$refs.form.submit(() => {
        this.$router.push({ path: '/category' })
      })
    }
  }
}
</script>
<style lang='scss' scope>
.card-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: 100vh;

}
</style>
