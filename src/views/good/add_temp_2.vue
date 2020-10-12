<template>

  <div class="card-container">
    <el-card class="box-card">
      <!--      <h3>添加商品</h3>-->
      <div slot="header">
        <el-row type="flex" justify="start" align="middle">
          <el-col :span="6" class="y-p-r-10">
            <y-input prefix-icon="el-icon-search" placeholder="请输入款号编码"></y-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" plain>确定</el-button>
          </el-col>
          <el-col :span="6">
            <el-alert :closable="false" type="info">
              小贴士:<br/>
              1.同款下的每种颜色，系统支持建各自颜色的商品资料。<br/>
              2.有同款其他颜色货品，录入过商品资料的，请输入款号编码。
            </el-alert>
          </el-col>
        </el-row>

      </div>
      <y-form
        ref="goodForm"
        :model="goodForm"
        :rules="goodRules"
        label-width="100px"
      >
        <el-row>

          <el-col :span="6">
            <el-alert
              type="info">
              上传商品主图(正面图)
            </el-alert>
            <el-form-item label="" prop="main_pic" label-width="0">
              <y-upload-image
                v-model="goodForm.main_pic"
                :limit="1"
                tips="上传1张商品正面图"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-alert
              type="info">
              上传商品侧面图、背后图、模特图、细节图(用于轮播,请排好顺序, 商品主图为第1张轮播图)
            </el-alert>
            <el-form-item label="详情轮播图:" prop="carousels">

              <div style="width:485px;max-height:420px;overflow-y: scroll;">
                  <y-upload-image
                    v-model="goodForm.carousels"
                    class="upload-carousels"
                  />

              </div>
            </el-form-item>
            <el-divider></el-divider>
          </el-col>

          <el-col :span="24">
            <el-form-item label="商品性别:" prop="gender">

              <y-radio
                :options="[{value: '1',label: '男'},{value: '0',label: '女'},{value:'2',label:'中性'}]"
                tips="可多选"
              />
            </el-form-item>
          </el-col>

          <!--          todo   可搜索  旁边添加品类  只能3级-->
          <el-col :span="24">
            <el-form-item
              label="商品类别:"
              prop="vip_price">
              <!--              <y-select-->
              <!--                v-model="goodForm.value45678"-->
              <!--              />-->
              <div class="">

                <el-row :gutter="10">
                  <el-col :span="3">
                    <y-input v-model="categoryBig" readonly></y-input>
                  </el-col>
                  <el-col :span="3">
                    <y-input v-model="categorySmall" readonly></y-input>
                  </el-col>
                  <el-col :span="3">
                    <y-input v-model="categoryName" readonly></y-input>
                  </el-col>
                </el-row>
              </div>
              <div class="y-flex ">

                <el-cascader
                  v-model="goodForm.value45678"
                  :options="categoryList"
                  :props="{ expandTrigger: 'hover' }"
                  separator='     '
                  @change="test"></el-cascader>

                <el-button
                  class="y-m-l-10"
                  type="primary"
                  size="small"
                  @click="showDialog('showCategoryFrom')">添加品类
                </el-button>

              </div>
              <y-dialog
                v-model="showCategoryFrom"
                @cfm="submitDialogForm('categoryFrom','showCategoryFrom','getCategoryList')"
              >
                <categoryFrom ref="categoryFrom"/>
              </y-dialog>
            </el-form-item>
          </el-col>

          <el-card>
            <div slot="header">
              商品颜色
            </div>
            <div class="">

              <el-col :span="12">
                <el-form-item label="颜色选择:" prop="code">

                  <el-color-picker
                    class="color-picker"
                    v-model="colorForm.color"
                    color-format="hsl"
                  ></el-color-picker>

                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="色系(主色):" prop="group">

                  <!--              todo 色系名称不能改, 色系代码区间可以自定义, -->
                  <y-select
                    v-model="colorForm.group"
                    :options="[
                {label:'红色系',value:'0-9'},
                {label:'橙色系',value:'10-19'},
                {label:'蓝色系',value:'20-29'},
                {label:'绿色系',value:'30-39'},
                {label:'黄色系',value:'40-49'},
                {label:'紫色系',value:'50-59'},
                {label:'黑色系',value:'60-69'},
                {label:'白色系',value:'70-79'},
                ]"
                  />

                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item label="色系代码:" prop="color_name">

                  <y-input
                    v-model="colorForm.group"
                    placeholder=""
                    readonly
                  />
                </el-form-item>
              </el-col>

              <!--              todo 记录主色的历史记录-->
              <el-col :span="6">
                <el-form-item label="主色名称:" prop="color_name">

                  <y-select-input
                    v-model="colorForm.color_name"
                    tips="请选择或直接输入名称"
                    :multiple="false"
                    :options="[
                {label:'正红',value:'0'},
                {label:'大红',value:'1'},
                {label:'浅红',value:'2'},
                {label:'玫瑰红',value:'3'},
                {label:'辣椒红',value:'4'}
                ]"
                  />

                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="主色代码:" prop="code">
                  <y-select
                    v-model="colorForm.code"
                    tips="请输入该色系范围内的数字"
                    :options="[{value:0,label:0},{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5}]"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="辅色:" prop="code">
                  <el-tag
                    class="y-m-r-10"
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                    {{ tag }}
                  </el-tag>
                  <el-input
                    class="input-new-tag"
                    v-if="inputVisible"
                    v-model="inputValue"
                    ref="saveTagInput"
                    size="small"
                    @keyup.enter.native="handleInputConfirm"
                    @blur="handleInputConfirm"
                  >
                  </el-input>
                  <el-button v-else class="button-new-tag" size="small" @click="showInput">添加辅色</el-button>
                </el-form-item>
              </el-col>

            </div>
          </el-card>
          <el-col :span="24">
            <el-form-item label="商品颜色:" prop="vip_price">

              <y-select
                v-model="goodForm.value4561"
              />

              <el-button class="y-m-l-10" type="primary" size="small">添加颜色</el-button>

              <!--              <el-select-->
              <!--                v-model="goodForm.value4561"-->
              <!--                multiple-->
              <!--                allow-create-->
              <!--                filterable-->
              <!--                default-first-option-->
              <!--                placeholder="请选择版型标签">-->
              <!--                <el-option-->
              <!--                  v-for="item in [{value: '1',label: '黄色'},
              {value: '0',label: '绿色'},{value:'2',label:'红色'}]"-->
              <!--                  :key="item.value"-->
              <!--                  :label="item.label"-->
              <!--                  :value="item.value">-->
              <!--                </el-option>-->
              <!--              </el-select>-->
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

          <!--          todo  加个表-->
          <!--          todo  加个品牌表-->
          <el-col :span="12">
            <el-form-item label="图案:" prop="type_sn">

              <!--              只有一个字段才能直接添加-->
              <!--              <y-select-->
              <!--                v-model="goodForm.value45161"-->
              <!--              >-->
              <!--              </y-select>-->
              <!--              <el-button class="y-m-l-10" type="primary" size="small">添加颜色</el-button>-->

              <y-select-input
                v-model="goodForm.value45161"
                :multiple="false"
                tips="请输入或选择图案"
              />
              <!--              <el-select-->
              <!--                v-model="goodForm.value422561"-->
              <!--                multiple-->
              <!--                allow-create-->
              <!--                filterable-->
              <!--                default-first-option-->
              <!--                placeholder="请选择版型标签">-->
              <!--                <el-option-->
              <!--                  v-for="item in [{value: '1',label: '黄色'},{value: '0',label: '绿色'},{value:'2',label:'红色'}]"-->
              <!--                  :key="item.value"-->
              <!--                  :label="item.label"-->
              <!--                  :value="item.value">-->
              <!--                </el-option>-->
              <!--              </el-select>-->

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
              <y-input/>
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

          <el-col :span="24">

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
                          placeholder="请选择版型标签"
                        >
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
                            :value="item.value"
                          />
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
                        placeholder="请选择风格元素标签"
                      >
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
                          :value="item.value"
                        />
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
                        placeholder="请选择细节特征标签"
                      >
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
                          :value="item.value"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>

                </el-row>
              </div>
            </el-card>
          </el-col>

          <!--          商品说明-->
          <el-card>
            <div slot="header">
              <span>商品说明</span>
            </div>
            <div class="">
              <el-card>
                <div slot="header" class="">款式/风格:</div>
                <div class="">
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="介绍视频:" prop="vip_price">
                        <el-tooltip content="请上传1段视频 " placement="top-start">
                          <y-upload-file>
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
                        <y-input/>
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
            <div slot="header" class="">关联近似款:</div>
            <div class="">

              <el-tree
                :data="categoryList"
                :props="categoryProp"
                show-checkbox
              />
            </div>

          </el-card>

          <!--          自定义属性-->

          <!--          添加尺码-->

          <el-card>
            <div slot="header" class="">给各个颜色添加尺码:</div>
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
import { objToJson } from '@/utils/index'
import categoryFrom from '@/views/category/addForm.vue'
import YDialog from '@/components/y-dialog/index.vue'
import { addGood } from '../../api/good'
import { addGoodsize } from '../../api/goodsize'

export default {
  components: {

    categoryFrom,
    YDialog
  },

  data() {
    return {
      colorForm: {},

      tags: [
        {
          name: '标签一',
          type: ''
        },
        {
          name: '标签二',
          type: 'success'
        },
        {
          name: '标签三',
          type: 'info'
        },
        {
          name: '标签四',
          type: 'warning'
        },
        {
          name: '标签五',
          type: 'danger'
        }
      ],

      goodForm: {},
      goodRules: {

        product_name: [

          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的商品名称',
            trigger: 'blur'
          }

        ],

        product_sn: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的商品编号',
            trigger: 'blur'
          }

        ],

        type_sn: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的款式编号',
            trigger: 'blur'
          }

        ],

        main_pic: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的页面主图',
            trigger: 'blur'
          }

        ]

      },

      categoryList: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],

      categoryProp: {
        label: 'label',
        children: 'children'
      },
      //    dialogFrom
      showCategoryFrom: false,
      // el-tag
      //  todo 需要封装
      dynamicTags: ['红色', '绿色', '黄色'],
      inputVisible: false,
      inputValue: '',

      categoryBig: '男装',
      categorySmall: '裤子',
      categoryName: '牛仔裤'
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.categoryList = [{
        label: '男装 1',
        children: [{
          label: '裤子 1-1',
          children: [{
            label: '牛仔裤 1-1-1',
            value: '6545'
          }]
        }]
      }, {
        label: '男装 2',
        children: [{
          label: '裤子 2-1',
          children: [{
            label: '牛仔裤 2-1-1',
            value: '6544535'

          }]
        }, {
          label: '裤子 2-2',
          children: [{
            label: '牛仔裤 2-2-1',
            value: '654554'

          }]
        }]
      }, {
        label: '男装 3',
        children: [{
          label: '裤子 3-1',
          children: [{
            label: '牛仔裤 3-1-1',
            value: '65454115'

          }]
        }, {
          label: '裤子 3-2',
          children: [{
            label: '牛仔裤 3-2-1',
            value: '65450'

          }]
        }]
      }]
    },
    async addGood() {
      // 提交数据之前先序列化部分需要转成json 的字段
      const postForm = objToJson(this.goodForm, ['material', 'colors', 'carousels', 'product_parameter', 'sizes'])
      const res = await addGood(postForm)

      console.log(res)

      // put color & put size
      await addGoodsize()

      this.$router.push({ path: '/good' })

      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.goodForm.check((valid) => {
        if (valid) {
          this.addGood()
        }
      })
    },

    // 打开弹窗
    showDialog(prop) {
      this[prop] = true
    },
    /**
     * 调用表单子组件的提交方法,
     * 提交成功后关闭窗口 ,
     * 更新该列表的数据
     * @param ref 子组件ref
     * @param show 要关闭的窗口
     * @param list 更新列表的方法
     */
    submitDialogForm(ref, show, list) {
      this.$refs[ref].submit(() => {
        this[show] = false
        //  todo update list
        this[list]()
      })
    },
    getCategoryList() {
      console.log('getCategoryList')
    },
    //  el-tag
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      const { inputValue } = this
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
<style lang='scss' scoped>
.card-container {

  .box-card {

  }

  .table-grey {
    background: #f0f9eb;
  }

  //加大颜色选择组件尺寸
  //.color-picker /deep/ .el-color-picker__trigger {
  //  width: 500px;
  //  height: 200px;
  //}

  /**
  * 增加商品详情轮播图的介绍, 组件已清除overflow:hidden
  * 类选择器+深度选择器+子元素选择器+伪元素+scss数组循环(基1)
   */
  //$contents: '正面图', '侧面图', '背面图';
  //@each $c in $contents {
  //  $i: index($contents, $c);
  //  .upload-carousels /deep/ .el-upload-list--picture-card .el-upload-list__item:nth-child(#{$i}):before {
  //    content: $c;
  //    position: absolute;
  //    bottom: -30px;
  //    right: 50px;
  //    height: 25px;
  //  }
  //}
}
</style>
