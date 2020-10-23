<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>新增面料后整理名称</h3>
      <y-form
        ref="goodtrimForm"
        :model="goodtrimForm"
        :rules="goodtrimRules"
        label-width="100px"
      >
        <el-row>

          <el-col :span="12">
            <el-form-item
              label="后整理名称"
              prop="trimmed_name"

            >

              <y-input

                v-model="goodtrimForm.trimmed_name"

              />

            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="后整理别名"
              prop="trimmed_alias"

            >

              <y-input

                v-model="goodtrimForm.trimmed_alias"

              />

            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item
              label="功能效果"
              prop="intro"

            >

              <y-input

                v-model="goodtrimForm.intro"

              />

            </el-form-item>
          </el-col>

          <el-col>
            <el-row type="flex" justify="end">
              <el-form-item>
                <el-button @click="submit('goodtrimForm')" type="primary">提交</el-button>
                <el-button @click="back">返回</el-button>
              </el-form-item>
            </el-row>
          </el-col>
        </el-row>
      </y-form>
    </el-card>
  </div>
</template>

<script>
import { addGoodtrim } from '@/api/goodtrim'

export default {

  data() {
    return {
      goodtrimForm: {},
      goodtrimRules: {

        trimmed_name: [

          {
            required: true,
            message: '请输入后整理名称',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的后整理名称',
            trigger: 'change'
          }

        ],

        trimmed_alias: [

          {
            required: true,
            message: '请输入后整理别名',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的后整理别名',
            trigger: 'change'
          }

        ],

        intro: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的功能效果',
            trigger: 'change'
          }

        ]

      }

    }
  },
  created() {
  },
  methods: {
    async addGoodtrim() {
      await addGoodtrim(this.goodtrimForm)
      this.$router.push({ path: '/goodtrim' })

      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.goodtrimForm.check((valid) => {
        if (valid) {
          this.addGoodtrim()
        }
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
