<template>
    <div class="card-container">
        <el-card class="box-card">
            <h3>修改品牌</h3>
            <y-form
                    ref="goodbrandForm"
                    :model="goodbrandForm"
                    :rules="goodbrandRules"
                    label-width="100px"
            >
                <el-row>

                    <el-col :span="12">
                        <el-form-item label="品牌中文名:" prop="brand_name">

                                <y-input

                            v-model="goodbrandForm.brand_name"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="品牌类型:" prop="brand_type">

                                <y-select

                            v-model="goodbrandForm.brand_type"

                              :options="[{value: '1',label: '1'},{value: '0',label: '2'}]"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="品牌英文名:" prop="brand_eng">

                                <y-input

                            v-model="goodbrandForm.brand_eng"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="价格定位:" prop="price_object">

                                <y-input

                            v-model="goodbrandForm.price_object"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="品牌简写:" prop="brand_abbr">

                                <y-input

                            v-model="goodbrandForm.brand_abbr"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="客群年龄:" prop="age_object">

                                <y-input

                            v-model="goodbrandForm.age_object"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="品牌所属:" prop="brand_belonged">

                                <y-input

                            v-model="goodbrandForm.brand_belonged"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item label="风格定位:" prop="style_object">

                                <y-input

                            v-model="goodbrandForm.style_object"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col >
                      <el-row type="flex" justify="end">

                      <el-form-item>
                            <el-button @click="submit('goodbrandForm')">提交</el-button>
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

import { putGoodbrand, getGoodbrand } from '@/api/goodbrand'

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
            trigger: 'blur'
          }

        ],

        brand_type: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的品牌类型',
            trigger: 'blur'
          }

        ],

        brand_eng: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的品牌英文名',
            trigger: 'blur'
          }

        ],

        price_object: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的价格定位',
            trigger: 'blur'
          }

        ],

        brand_abbr: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的品牌简写',
            trigger: 'blur'
          }

        ],

        age_object: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的客群年龄',
            trigger: 'blur'
          }

        ],

        brand_belonged: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的品牌所属',
            trigger: 'blur'
          }

        ],

        style_object: [

          {
            type: 'string',
            max: 45,
            message: '请输入长度小于45的风格定位',
            trigger: 'blur'
          }

        ]

      }

    }
  },
  created() {
    this.getGoodbrand()
  },
  methods: {
    async getGoodbrand() {
      const res = await getGoodbrand(this.$route.query.id)
      this.goodbrandForm = res.data
    },

    async putGoodbrand() {
      await putGoodbrand(this.$route.query.id, this.goodbrandForm)
      this.$router.push({ path: '/goodbrand' })

      this.$message({
        message: '修改成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.goodbrandForm.check((valid) => {
        if (valid) {
          this.putGoodbrand()
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
