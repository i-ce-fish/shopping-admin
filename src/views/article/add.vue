<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加article</h3>
      <el-row type="flex" justify="space-between">
        <el-col :span="14">

          <y-form
            ref="articleForm"
            :model="articleForm"
            :rules="articleRules"
            label-width="100px"
          >
            <el-row>

              <el-col :span="12">
                <el-form-item label="标题:" prop="title">

                  <y-input

                    v-model="articleForm.title"

                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="首页图:" prop="front_pic">

                  <y-upload-single

                    v-model="articleForm.front_pic"

                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="作者:" prop="author">

                  <y-input

                    v-model="articleForm.author"

                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="首页头条:" prop="is_header">

                  <y-radio

                    v-model="articleForm.is_header"

                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="栏目显示:" prop="is_col_header">

                  <y-radio

                    v-model="articleForm.is_col_header"

                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="栏目ID:" prop="catalog_id">

                  <y-select

                    v-model="articleForm.catalog_id"

                    api="/api/catalogs"
                    labelName="catalog_name"
                    valueName="id"

                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="简介:" prop="intro">

                  <y-input

                    v-model="articleForm.intro"

                    type="textarea"

                  />
                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item label="正文:" prop="body">

                  <Tinymce ref="editor" v-model="articleForm.body"/>

                </el-form-item>
              </el-col>

              <el-col :span="24">
                <el-form-item>
                  <el-button @click="submit('articleForm')">提交</el-button>
                  <el-button @click="back">返回</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </y-form>

        </el-col>
        <el-col :span="8">
          <div class="preview-box-title">
            模拟小程序展示效果
          </div>
          <el-card class="preview-box">
            <div class="title">
              {{ articleForm.title }}
            </div>
            <div v-html="articleForm.body"/>
          </el-card>
        </el-col>
      </el-row>

    </el-card>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce/tinymce.vue"
import { addArticle } from "../../api/article"

export default {
  components: { Tinymce },

  data() {
    return {
      articleForm: {},
      articleRules: {

        title: [

          {
            required: true,
            message: "请输入标题",
            trigger: "blur"
          },

          {
            type: "string",
            max: 255,
            message: "请输入长度小于255的标题",
            trigger: "blur"
          }

        ],

        front_pic: [

          {
            type: "string",
            max: 255,
            message: "请输入长度小于255的首页图",
            trigger: "blur"
          }

        ],

        author: [

          {
            type: "string",
            max: 80,
            message: "请输入长度小于80的作者",
            trigger: "blur"
          }

        ]

      },

      catalog_idOptions: []

    }
  },
  created() {
  },
  methods: {
    async addArticle() {
      await addArticle(this.articleForm)
      this.$router.push({ path: "/article" })

      this.$message({
        message: "添加成功",
        type: "success"
      })
    },

    async submit() {
      this.$refs.articleForm.check((valid) => {
        if (valid) {
          this.addArticle()
        } else {
          return false
        }
        return undefined
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

  .preview-box-title {
    font-size: 14px;
    font-weight: 700;
    color: #606266;
    line-height: 40px;

  }

  .preview-box {
    width: 375px;
    min-height: 667px;
    font-size: 14px;
    //line-height: 20px;

    .el-card__body {
      padding: 15px;
    }

    .title {
      text-align: center;
      font-size: 18px;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

</style>
