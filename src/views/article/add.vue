<template>
  <div class="card-container">
    <el-card class="box-card">
      <div slot="header" class="">
        <el-row type="flex" justify="end">
          <el-col>
            <h3>添加article</h3>
          </el-col>
          <el-col :span="8" style="min-width: 280px">
            <el-button type="success" @click="submit('articleForm')">发布</el-button>
            <el-button type="primary" @click="submit('articleForm')">存为草稿</el-button>
            <el-button @click="back">返回</el-button>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" justify="space-between">
        <el-col :span="14">
          <y-form
            ref="articleForm"
            :model="articleForm"
            :rules="articleRules"
            label-width="100px"
          >
            <el-row type="flex" >
              <el-col :span="12">

                <el-col>
                  <el-form-item label="标题:" prop="title">
                    <y-input
                      v-model="articleForm.title"
                      placeholder="标题(可显示30字)"
                    />
                  </el-form-item>
                </el-col>

                <el-col>
                  <el-form-item label="简介:" prop="intro">
                    <y-input
                      v-model="articleForm.intro"
                      type="textarea"
                    />
                  </el-form-item>
                </el-col>

                <el-col>
                  <el-form-item label="所属栏目:" prop="catalog_id">
                    <y-select
                      v-model="articleForm.catalog_id"
                      api="/api/catalogs"
                      label-name="catalog_name"
                      value-name="id"
                    />
                  </el-form-item>
                </el-col>

                <el-col>
                  <el-form-item label="是否头条:" prop="is_header">
                    <y-radio
                      v-model="articleForm.is_header"
                    />
                  </el-form-item>
                </el-col>

                <el-col>
                  <el-form-item label="文章标签:">
                    <y-radio v-model="articleForm.tag">
                    </y-radio>
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item label="上传封面图:" prop="front_pic">

                    <y-upload-image
                      v-model="articleForm.front_pic"
                      :limit="1"
                    />
                  </el-form-item>
                </el-col>

                <el-col >
                  <el-form-item label="编辑状态:" prop="is_col_header">

                    <y-radio

                      v-model="articleForm.is_col_header"
                      :options="[{label:'编辑中',value:'1'},{label:'已完成',value:'2'}]"
                    />

                  </el-form-item>
                </el-col>

                <el-col >

                  <el-form-item label="排序: ">
                    <y-input

                      v-model="articleForm.sort"
                      tips="数值越大, 排序越前"
                    />

                  </el-form-item>
                </el-col>

                <el-col>

                  <el-form-item label="定时发布: ">

                    <y-datepicker
                      v-model="articleForm.value1123"
                      type="datetime"
                      default-time="12:00:00"
                    />
                  </el-form-item>
                </el-col>
                <el-col >

                  <el-form-item label="延后提醒: ">
                    <y-datepicker
                      v-model="articleForm.value1732"
                      type="datetime"
                      default-time="12:00:00"
                    />

                  </el-form-item>
                </el-col>

              </el-col>
              <el-col :span="12">
                <el-form-item label="" prop="body">
                  正文内容
                  <Tinymce ref="editor" v-model="articleForm.body"/>
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
import Tinymce from '@/components/Tinymce/tinymce.vue'
import { addArticle } from '@/api/article'

export default {
  components: { Tinymce },

  data() {
    return {
      articleForm: {},
      articleRules: {

        title: [

          {
            required: true,
            message: '请输入标题',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的标题',
            trigger: 'blur'
          }

        ],

        front_pic: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的首页图',
            trigger: 'blur'
          }

        ],

        author: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的作者',
            trigger: 'blur'
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
      this.$router.push({ path: '/article' })

      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.articleForm.check((valid) => {
        if (valid) {
          this.addArticle()
        }
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
    line-height: 180%;

    .el-card__body {
      padding: 15px;
    }

    .title {
      text-align: center;
      font-size: 18px;
      line-height: 3;
    }

  }
}

</style>
