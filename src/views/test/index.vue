<template>
  <div class="form">
    <div class="name">
      name
      <!--      <el-input type="text" v-model="username"/>-->
      <el-input v-model="username" placeholder="请输入内容"></el-input>
      <!--       : => v-bind-->
      <!--      @ => v-on -->
    </div>
    <div class="pswd">
      密码
      <el-input type="text" v-model="password" show-password/>
    </div>
    <el-button @click="submit">提交</el-button>
    token: {{token}}

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/api/login'

export default {
  data() {
    return {
      username: '',
      password: '',
      token: '',
      form: {}
    }
  },
  methods: {
    // 异步请求
    async submit() {
      const formData = {
        username: this.username,
        password: this.password
      }
      const res = await login(formData)
      this.token = res.data.token

      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  .name {
    color: red;
  }
  .pswd {
    color: #00feff;
  }
}

</style>
