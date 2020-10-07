<template>
  <y-form
      ref="goodbrandForm"
      :model="goodbrandForm"
      :rules="goodbrandRules"
      label-width="100px"
  >
    <el-row>

      <el-row :gutter="10" type="flex">
        <el-col>
          <el-form-item
              label="品牌中文名:"
              prop="brand_name"
          >
            <y-input
                v-model="goodbrandForm.brand_name"
            />
          </el-form-item>
        </el-col>
        <el-col>
          <el-alert
              type="info">
            1、请填写全名并核对每个字是否正确。<br/>
            2、填入后电脑会记住，你也得记住，不然搜不到
          </el-alert>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="12">
          <el-form-item
              label="品牌英文名:"
              prop="brand_eng"

          >

            <y-input

                v-model="goodbrandForm.brand_eng"

                placeholder='如果没有就不用填'

            />

          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10" type="flex">
        <el-col>
          <el-form-item
              label="品牌名称简写:"
              prop="brand_abbr"
          >
            <y-input
                v-model="goodbrandForm.brand_abbr"
            />
          </el-form-item>
        </el-col>
        <el-col>
          <el-alert
              type="info">
            请填写惯用的简称，方便查找
          </el-alert>
        </el-col>
      </el-row>

      <el-row :gutter="10" type="flex">
        <el-col :span="12">
          <el-form-item
              label="品牌编码:"
              prop="fieldname"

          >

            <y-input

                v-model="goodbrandForm.fieldname"

                placeholder='请输入两位数字。示范: 66'

            />

          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-alert
              type="info">
            1、请输入两位数字，比如：66<br/>
            2、多品牌的门店，商品款号编码中，得加入品牌编码，做到一看款号，就知道是哪家品牌。
          </el-alert>
        </el-col>
      </el-row>

    </el-row>
  </y-form>

</template>

<script>
import { addGoodbrand } from '@/api/goodbrand'

export default {

  data() {
    return {
      goodbrandForm: {},
      goodbrandRules: {

        brand_name: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的品牌中文名',
            trigger: 'change'
          }

        ],

        brand_eng: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的品牌英文名',
            trigger: 'change'
          }

        ],

        brand_abbr: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的品牌名称简写',
            trigger: 'change'
          }

        ],

        fieldname: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的品牌编码',
            trigger: 'change'
          }

        ]

      }

    }
  },
  created() {
  },
  methods: {
    async addGoodbrand() {
      await addGoodbrand(this.goodbrandForm)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit(cb) {
      this.$refs.goodbrandForm.check((valid) => {
        if (valid) {
          this.addGoodbrand()
          cb()
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
}
</style>
