<template>
  <div class="Register">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>注册</span>
      </div>
      <div class="">
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" placeholder="请输入密码" show-password />
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.passwordConfirm" placeholder="请输入密码" show-password />
          </el-form-item>
        </el-form>
        <div class="center">
          <el-checkbox v-model="form.checked">我同意《用户注册协议》</el-checkbox>
        </div>
        <el-divider />
        <div class="center">
          <el-button type="primary" @click="submit">注册</el-button>
          <el-button type="primary" @click="$router.push('/login')">返回</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { register } from '../api/login'

export default {
  components: {},
  data() {
    return {
      form: {
        name: 'test 1',
        password: 'test',
        passwordConfirm: '',
        checked: true,
        email: 'maxazure1@gmail.com',
        avatar: 'https://source.unsplash.com/random'
      },
      rules: {
        email: [
          {
            required: true,
            message: '请输入正确的邮箱',
            trigger: 'blur'
          },
          // {
          // min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur',
          // },
          {
            required: true,
            pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
            message: '请输入正确的邮箱',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    goHome() {

    },

    submit() {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          const res = await register(this.form)
          this.$router.push('/login')
          console.log(res)
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.Register {

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  .box-card {
    height: 450px;
  }
}

.center {
  display: flex;
  justify-content: space-around;

}
</style>
