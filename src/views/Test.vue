<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>新论文</h3>
      {{paperForm}}
      <y-form
        ref="paperForm"
        :model="paperForm"
        :rules="paperRules"
        label-width="100px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="标题:" prop="name">
              <YInput
                v-model="paperForm.name"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="摘要" prop="abstract">
              <YInput
                v-model="paperForm.abstract"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="作者" prop="authors">
              <YInput
                v-model="paperForm.authors"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="关键字:" prop="keywords">
              <YInput
                v-model="paperForm.keywords"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="类别:" prop="order">
              <YInput
                v-model="paperForm.order"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="课程:" prop="catalog_id">
              <YSelect
                v-model="paperForm.course"
                api="/api/selects"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item>
              <el-button @click="submit('paperForm')">提交</el-button>
              <el-button @click="back">返回</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </y-form>
    </el-card>
  </div>
</template>

<script>

import { addPaper } from "@/api/paper"
import { regular, validateOrder } from "../utils/validate"

export default {

  data() {
    return {
      paperForm: {},
      paperRules: {
        name: [
          { pattern: regular.cnEnSpace2to100, message: regular.cnEnSpace2to100Msg, trigger: "blur" }
        ],
        order: [
          { type: "string", validator: validateOrder, trigger: "blur" }
        ]
      },
      course_options: []
    }
  },
  created() {
  },
  methods: {
    async api() {
      await addPaper(this.paperForm)
      this.$router.push({ path: "/paper" })

      this.$message({
        message: "添加成功",
        type: "success"
      })
    },

    async submit() {
      this.$refs.paperForm.check((valid) => {

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

    .box-card {

    }
  }
</style>
