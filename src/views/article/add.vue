<template>
  <div class="card-container">
    <el-card class="box-card">
      <!--      <div slot="header" class="">-->
      <!--        <el-row type="flex" justify="end">-->
      <!--          <el-col>-->
      <!--            <h3>添加article</h3>-->
      <!--          </el-col>-->
      <!--          <el-col :span="8" style="min-width: 280px">-->
      <!--            <el-button type="success" @click="submit('articleForm')">发布</el-button>-->
      <!--            <el-button type="primary" @click="submit('articleForm')">存为草稿</el-button>-->
      <!--            <el-button @click="back">返回</el-button>-->
      <!--          </el-col>-->
      <!--        </el-row>-->
      <!--      </div>-->
      <el-row type="flex" justify="space-between">
        <el-col :span="14">
          <y-form
            ref="articleForm"
            :model="articleForm"
            :rules="articleRules"
            label-width="100px"
          >
            <el-row type="flex">
              <el-col :span="12">
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
                  <el-form-item label="简介:" prop="intro">
                    <y-input
                      v-model="articleForm.intro"
                      type="textarea"
                      :rows="4"
                      placeholder="介绍最新的上海流行穿法，中学生的最潮穿法，哈佛等等常青藤名校的学生，非常阳光帅气，非常值得模仿等等等"
                    />
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-form-item label="标题:" prop="title">
                    <y-input
                      v-model="articleForm.title"
                      placeholder="标题(可显示30字)"
                    />
                  </el-form-item>
                </el-col>

                <el-col>
                  <el-form-item label="文章标签:">
                    <y-radio v-model="articleForm.tag" :options="ARTICLE.TAG">
                    </y-radio>
                    <div>添加标签</div>
                  </el-form-item>
                </el-col>
                <el-col>

                  <el-form-item label="拟发布日期: ">

                    <y-datepicker
                      v-model="articleForm.post_date"
                      :picker-options="datePickerOptions"
                      type="date"
                    />
                  </el-form-item>
                </el-col>

                <el-col>
                  <el-form-item label="上传文章配图:" prop="front_pic">

                    <y-upload-image
                      v-model="articleForm.front_pic"
                      :limit="1"
                    />
                  </el-form-item>
                </el-col>

              </el-col>
              <el-col >
                <el-form-item label="" prop="body">
                  <div class="preview-box-title">
                    编辑正文
                  </div>
                  <Tinymce ref="editor" v-model="articleForm.body"/>
                  <el-row  type="flex" justify="space-around" class="y-p-t-10 width-phone" >
                      <el-button type="danger">未完成</el-button>
                      <el-button type="primary">待发布</el-button>
                      <el-button type="success">立即发布</el-button>
                  </el-row>
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
          <el-row  type="flex" justify="end" class="y-p-t-10 width-phone" >
            <el-button >返回</el-button>
          </el-row>
        </el-col>
      </el-row>

    </el-card>
  </div>
</template>

<script>
import Tinymce from '@/components/tinymce/tinymce.vue'
import { addArticle } from '@/api/article'
import { ARTICLE } from '@/utils/options'

export default {
  components: { Tinymce },

  data() {
    return {
      datePickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        }
      },
      ARTICLE,
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
.width-phone{
  width: 375px;
}

</style>
