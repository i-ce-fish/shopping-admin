<template>
    <div class="card-container">
        <el-card class="box-card">
            <h3>添加供货商通讯录</h3>
            <y-form
                    ref="suppliercontactForm"
                    :model="suppliercontactForm"
                    :rules="suppliercontactRules"
                    label-width="100px"
            >
                <el-row :gutter="20">

                    <el-col :span="12">
                        <el-form-item
                            label="老板手机:"
prop="phone"

                        >

                            <y-input
                                v-model="suppliercontactForm.phone"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="老板微信:"
prop="wechat"

                        >

                            <y-input
                                v-model="suppliercontactForm.wechat"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="微信昵称:"
prop="wechat_alias"

                        >

                            <y-input
                                v-model="suppliercontactForm.wechat_alias"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="老板姓名:"
prop="name"

                        >

                            <y-input
                                v-model="suppliercontactForm.name"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="接待人手机:"
prop="agent_phone"

                        >

                            <y-input
                                v-model="suppliercontactForm.agent_phone"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="接待人姓名:"
prop="agent_name"

                        >

                            <y-input
                                v-model="suppliercontactForm.agent_name"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="接待人微信:"
prop="agent_wechat"

                        >

                            <y-input
                                v-model="suppliercontactForm.agent_wechat"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="接待人微信昵称:"
prop="agent_alias"

                        >

                            <y-input
                                v-model="suppliercontactForm.agent_alias"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="单位名称:"
prop="company"

                        >

                            <y-input
                                v-model="suppliercontactForm.company"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="供货商编码:"
prop="supplier_code"

                        >

                            <y-input
                                v-model="suppliercontactForm.supplier_code"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="所在省:"
prop="province"

                        >

                            <y-input
                                v-model="suppliercontactForm.province"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="所在市:"
prop="city"

                        >

                            <y-input
                                v-model="suppliercontactForm.city"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="所在区:"
prop="district"

                        >

                            <y-input
                                v-model="suppliercontactForm.district"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="所在市场:"
prop="market"

                        >

                            <y-input
                                v-model="suppliercontactForm.market"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="详细地址:"
prop="address"

                        >

                            <y-input
                                v-model="suppliercontactForm.address"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="随手拍:"
prop="photo"

                        >

                            <y-upload-multiple
                                v-model="suppliercontactForm.photo"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col :span="12">
                        <el-form-item
                            label="备注:"
prop="memo"

                        >

                            <y-input
                                v-model="suppliercontactForm.memo"

                            />

                        </el-form-item>
                    </el-col>

                    <el-col>
                      <el-row type="flex" justify="end">
                        <el-form-item>
                              <el-button @click="submit('suppliercontactForm')" type="primary">提交</el-button>
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
import { addSuppliercontact } from '@/api/suppliercontact'

export default {

  data() {
    return {
      suppliercontactForm: {},
      suppliercontactRules: {

        phone: [

          {
            required: true,
            message: '请输入老板手机',
            trigger: 'blur'
          }

        ],

        supplier_code: [

          {
            required: true,
            message: '请输入供货商编码',
            trigger: 'blur'
          }

        ]

      }

    }
  },
  created() {
  },
  methods: {
    async addSuppliercontact() {
      await addSuppliercontact(this.suppliercontactForm)
      this.$router.push({ path: '/suppliercontact' })

      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.suppliercontactForm.check((valid) => {
        if (valid) {
          this.addSuppliercontact()
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
