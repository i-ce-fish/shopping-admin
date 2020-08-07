<template>
  <div class="Login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <div class="">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <div class="login">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="goReg">注册</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import { login } from "../api/login"

export default {
  components: {},
  data() {
    return {
      form: {
        username: "maxazure",
        password: "test"
      }
    }
  },
  computed: {
    ...mapGetters([
      "token"
    ])
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    goReg() {
      this.$router.push("/Register")
    },
    async login() {
      const res = await login(this.form)
      if (res.data.token) {
        this.$store.dispatch("user/setToken", res.data.token)
        this.$router.push("/")
      }
    }
  }
}
</script>

<style scoped lang="scss">
.Login {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .box-card {
    height: 300px;
  }
}

.login {
  display: flex;
  justify-content: space-around;

}
</style>
