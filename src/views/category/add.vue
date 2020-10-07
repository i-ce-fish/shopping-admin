<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加品类</h3>

      <add-form ref="form" />

      <el-row>
        <el-col>
          <el-button @click="submit">提交</el-button>
          <el-button @click="back">返回</el-button>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>

<script>
import addForm from '@/views/category/addForm.vue'

export default {
  components: { addForm },
  data() {
    return {}
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

  .box-card {

  }
}
</style>
