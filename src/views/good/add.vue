<template>

  <!--  todo  商品分类  : 增加1个别名   品类编码   上一级分类 -->
  <!--  todo  颜色  : 颜色编码-->
  <!--  todo 尺码表-->
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加商品</h3>

      <y-form
        ref="goodForm"
        :model="goodForm"
        :rules="goodRules"
        label-width="100px"
      >
        <el-row>

          <el-col :span="12">
            <el-form-item label="商品列表图:" prop="main_pic">

              <y-upload-image
                :limit="1"
                tips="上传1张商品正面图"
                v-model="goodForm.main_pic"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="详情轮播图:" prop="carousels">

              <y-upload-image
                tips="建议上传1.正面图 2.背后面 3.侧面图 4.模特(明星)穿法图 5.各种货品细节图"
                v-model="goodForm.carousels"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="货品性别:" prop="gender">

              <y-radio
                :options="[{value: '1',label: '男'},{value: '0',label: '女'},{value:'2',label:'中性'}]"
              />
            </el-form-item>
          </el-col>

          <!--          todo   可搜索  旁边添加品类  只能3级-->
          <el-col :span="12">
            <el-form-item label="品类:" prop="vip_price">
              <y-select
                v-model="goodForm.value45678"

                tips="当无可选项时请输入"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <!--            todo 生成   品牌  年龄 季节 风格  性别 第3级品类  -->
            <el-form-item label="商品名称:" prop="product_name">

              <y-input
                v-model="goodForm.product_name"
              />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="颜色:" prop="vip_price">

              <el-select
                v-model="goodForm.value4561"
                multiple
                allow-create
                filterable
                default-first-option
                placeholder="请选择版型标签">
                <el-option
                  v-for="item in [{value: '1',label: '黄色'},{value: '0',label: '绿色'},{value:'2',label:'红色'}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <!--          todo  加个表-->
          <!--          todo  加个品牌表-->
          <el-col :span="6">
            <el-form-item label="图案:" prop="type_sn">

              <el-select
                v-model="goodForm.value422561"
                multiple
                allow-create
                filterable
                default-first-option
                placeholder="请选择版型标签">
                <el-option
                  v-for="item in [{value: '1',label: '黄色'},{value: '0',label: '绿色'},{value:'2',label:'红色'}]"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <!--          todo 生成一半-->
          <el-col :span="12">
            <el-form-item label="款号:" prop="type_sn">

              <y-input

                v-model="goodForm.type_sn"

              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="上市季节:" prop="type_sn">

              <y-input

                v-model="goodForm.value11234213"

              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="材质成分:" prop="type_sn">

              <y-input

                v-model="goodForm.value1123123"

              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="洗涤信息:" prop="type_sn">

              <y-input

                v-model="goodForm.value1123"

              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="吊牌价:" prop="original_price">

              <y-input
                v-model="goodForm.original_price"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="内购价:" prop="onsale_price">
              <y-input
                v-model="goodForm.onsale_price"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="引导语:" prop="vip_price">
              <y-input

              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="尊享价:" prop="vip_price">
              <y-input
                v-model="goodForm.vip_price"
              />
            </el-form-item>
          </el-col>

          <!--          颜色-->

          <!--          商品参数-->

          <el-card>
            <div slot="header">
              <span>商品参数</span>
            </div>
            <div class="">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="版型:" prop="vip_price">
                    <el-tooltip content="请选择或直接输入标签" placement="top-start">

                      <el-select
                        v-model="goodForm.value1"
                        multiple
                        allow-create
                        filterable
                        default-first-option
                        placeholder="请选择版型标签">
                        <el-option
                          v-for="item in [{
                                    value: 'HTML',
                                    label: '超级紧身'
                                  }, {
                                    value: 'CSS',
                                    label: '紧身'
                                  }, {
                                    value: 'JavaScript',
                                    label: '修身'
                                  }]"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-tooltip>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="风格元素:" prop="vip_price">
                    <el-select
                      v-model="goodForm.value2"
                      multiple
                      allow-create
                      filterable
                      default-first-option
                      placeholder="请选择风格元素标签">
                      <el-option
                        v-for="item in [{
                                    value: 'HTML',
                                    label: '少淑'
                                  }, {
                                    value: 'CSS',
                                    label: '简约'
                                  }, {
                                    value: 'JavaScript',
                                    label: '北欧'
                                  }]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                  <el-form-item label="细节特征:" prop="vip_price">
                    <el-select
                      v-model="goodForm.value3"
                      multiple
                      allow-create
                      filterable
                      default-first-option
                      placeholder="请选择细节特征标签">
                      <el-option
                        v-for="item in [{
                                    value: 'HTML',
                                    label: '高腰'
                                  }, {
                                    value: 'CSS',
                                    label: '泡泡袖'
                                  }, {
                                    value: 'JavaScript',
                                    label: '拼接'
                                  }]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

              </el-row>
            </div>
          </el-card>
          <!--          商品说明-->
          <el-card>
            <div slot="header">
              <span>商品说明</span>
            </div>
            <div class="">
              <el-card>
                <div class="" slot="header">款式/风格:</div>
                <div class="">
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="介绍视频:" prop="vip_price">
                        <el-tooltip content="请上传1段视频 " placement="top-start">
                          <y-upload-file
                          >
                            <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                          </y-upload-file>
                        </el-tooltip>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="轮播图:" prop="vip_price">
                        <y-upload-image
                          :limit="1"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="风格类型:" prop="vip_price">
                        <y-input
                          type="textarea"

                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="时尚度:" prop="vip_price">
                        <y-input
                          type="textarea"

                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="设计来历:" prop="vip_price">
                        <y-input
                          type="textarea"

                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="创意细节:" prop="vip_price">
                        <y-input
                          type="textarea"

                        />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="细节图:" prop="vip_price">
                        <y-upload-image
                          :limit="3"
                        />
                      </el-form-item>
                    </el-col>

                    <el-col :span="12">
                      <el-form-item label="自定义:" prop="vip_price">
                        <y-input
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>

              </el-card>
              <el-row>

                <el-col :span="12">
                  <el-form-item label="面料/做工:" prop="vip_price">
                    <y-input
                      type="textarea"

                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="适穿人群/场合:" prop="vip_price">
                    <y-input
                      type="textarea"

                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="穿着效果:" prop="vip_price">
                    <y-input
                      type="textarea"

                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <!--          -->
          <!--          -->
          <!--          -->
          <!--          -->

          <!--          关联近似款-->
          <el-card>
            <div class="" slot="header">关联近似款:</div>
            <div class="">

              <el-tree
                :data="categoryList"
                :props="categoryProp"
                show-checkbox
              >
              </el-tree>
            </div>

          </el-card>

          <!--          自定义属性-->

          <!--          添加尺码-->

          <el-card>
            <div class="" slot="header">给各个颜色添加尺码:</div>
            <div class="">
              123
            </div>

          </el-card>

          <el-col :span="24">
            <el-form-item>
              <el-button @click="submit('goodForm')">提交</el-button>
              <el-button @click="back">返回</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </y-form>
    </el-card>
  </div>
</template>

<script>
import { objToJson } from "@/utils/index"
import { addGood } from "../../api/good"
import { addGoodsize } from "../../api/goodsize"

export default {
  components: {},

  data() {
    return {
      tags: [
        {
          name: "标签一",
          type: ""
        },
        {
          name: "标签二",
          type: "success"
        },
        {
          name: "标签三",
          type: "info"
        },
        {
          name: "标签四",
          type: "warning"
        },
        {
          name: "标签五",
          type: "danger"
        }
      ],

      goodForm: {},
      goodRules: {

        product_name: [

          {
            required: true,
            message: "请输入商品名称",
            trigger: "blur"
          },

          {
            type: "string",
            max: 255,
            message: "请输入长度小于255的商品名称",
            trigger: "blur"
          }

        ],

        product_sn: [

          {
            type: "string",
            max: 80,
            message: "请输入长度小于80的商品编号",
            trigger: "blur"
          }

        ],

        type_sn: [

          {
            type: "string",
            max: 80,
            message: "请输入长度小于80的款式编号",
            trigger: "blur"
          }

        ],

        main_pic: [

          {
            type: "string",
            max: 255,
            message: "请输入长度小于255的页面主图",
            trigger: "blur"
          }

        ]

      },

      categoryList: [{
        label: "一级 1",
        children: [{
          label: "二级 1-1",
          children: [{
            label: "三级 1-1-1"
          }]
        }]
      }, {
        label: "一级 2",
        children: [{
          label: "二级 2-1",
          children: [{
            label: "三级 2-1-1"
          }]
        }, {
          label: "二级 2-2",
          children: [{
            label: "三级 2-2-1"
          }]
        }]
      }, {
        label: "一级 3",
        children: [{
          label: "二级 3-1",
          children: [{
            label: "三级 3-1-1"
          }]
        }, {
          label: "二级 3-2",
          children: [{
            label: "三级 3-2-1"
          }]
        }]
      }],

      categoryProp: {
        label: "label",
        children: "children"
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.categoryList = [{
        label: "男装 1",
        children: [{
          label: "裤子 1-1",
          children: [{
            label: "牛仔裤 1-1-1"
          }]
        }]
      }, {
        label: "男装 2",
        children: [{
          label: "裤子 2-1",
          children: [{
            label: "牛仔裤 2-1-1"
          }]
        }, {
          label: "裤子 2-2",
          children: [{
            label: "牛仔裤 2-2-1"
          }]
        }]
      }, {
        label: "男装 3",
        children: [{
          label: "裤子 3-1",
          children: [{
            label: "牛仔裤 3-1-1"
          }]
        }, {
          label: "裤子 3-2",
          children: [{
            label: "牛仔裤 3-2-1"
          }]
        }]
      }]
    },
    async addGood() {
      // 提交数据之前先序列化部分需要转成json 的字段
      const postForm = objToJson(this.goodForm, ["material", "colors", "carousels", "product_parameter", "sizes"])
      const res = await addGood(postForm)

      console.log(res)

      // put color & put size
      await addGoodsize()

      this.$router.push({ path: "/good" })

      this.$message({
        message: "添加成功",
        type: "success"
      })
    },

    async submit() {
      this.$refs.goodForm.check((valid) => {
        if (valid) {
          this.addGood()
        } else {
          return false
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

  .table-grey {
    background: #f0f9eb;
  }
}
</style>
