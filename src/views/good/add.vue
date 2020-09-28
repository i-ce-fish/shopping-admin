<template>
  <div class="card-container">
    <el-card class="box-card">
      <div slot="header">
        <el-row type="flex" justify="space-between" align="middle">

          <el-col>
            <el-alert :closable="false" type="info">
              1. 有同款或类似货品，录入过商品资料的，请输入款号编码，调出商品资料，在这个基础上修改，可以省事。<br/>
              2. 同款下的每个颜色，视为不同货品，需要制作商品资料。
            </el-alert>
          </el-col>
          <el-col>
            <el-row type="flex" justify="end">
              <el-col :span="12" class="y-p-r-10">
                <y-input prefix-icon="el-icon-search" placeholder="请输入款号编码"></y-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary">确定</el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <y-form
          ref="goodForm"
          :model="goodForm"
          :rules="goodRules"
          label-width="100px"
      >
        <el-collapse v-model="activeName1">
          <el-collapse-item name="1">
            <div slot="title" style="width: 100%" class="y-flex y-align-between">
              <div class=" y-flex ">
                <div class="coll-item-title">上传商品图片</div>
                <el-button @click.stop="showTips1=!showTips1" icon="el-icon-thumb" plain>点我, 教你做
                </el-button>
              </div>
              <div>已选择信息3 已选择信息2 已选择信息1</div>
            </div>
            <el-row :gutter="20" type="flex" justify="space-between">
              <el-col>
                <div><span style="color: red">*</span>&nbsp;上传商品主图</div>
                <el-form-item label="" prop="main_pic" label-width="">
                  <y-upload-image-single
                      v-model="goodForm.main_pic"
                      width="400px"
                      height="400px"
                  />
                </el-form-item>
                <el-alert
                    v-if="showTips1"
                    type="info">
                  小贴士: <br/>
                  1. 上传的第1张图片，叫主图。相当于货品的“身份证照片”。<br/>
                  2. 主图只能是 1 张图，若上传 2 张图，后一张图将替换掉前一张。<br/>
                  3. 若更换主图，请点击图片，按提示操作。
                </el-alert>
              </el-col>
              <el-col>

                <el-form-item label="详情轮播图:" prop="carousels">

                  <div style="width:485px;max-height:420px;overflow-y: scroll;">
                    <y-upload-image
                        v-model="goodForm.carousels"
                        class="upload-carousels"
                    />

                  </div>
                </el-form-item>
                <el-alert
                    v-if="showTips1"
                    type="info"
                    style="max-width: 485px;"
                >
                  建议上传商品的：侧面图、背后图、模特搭配穿法图、细节图等等。
                </el-alert>
              </el-col>
            </el-row>

          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeName2" accordion>
          <el-collapse-item name="1">
            <div slot="title" style="width: 100%" class="y-flex y-align-between">
              <div class=" y-flex ">
                <div class="coll-item-title">选择品牌</div>
                <el-button @click.stop="showTips2=!showTips2" icon="el-icon-thumb" plain>点我, 教你做
                </el-button>
              </div>
              <div>已选择信息3 已选择信息2 已选择信息1</div>
            </div>
            <div>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="进货品牌" prop="brand" label-width="100px">
                    <y-select
                        v-model="goodForm.brand"
                        :options="brandOptions"
                        filterable
                        class="y-p-r-10"
                    ></y-select>
                    <el-button type="primary" plain>新增品牌名称</el-button>

                  </el-form-item>
                  <el-alert
                      v-if="showTips2"
                      type="info"
                  >
                    小贴士:<br/>
                    1. 把进货品牌换掉后的品牌叫展示品牌。<br/>
                    2. 若进货商品没有品牌，请选择“无品牌”。<br/>
                    3. 若下拉框中没有要的品牌，请点“新增品牌名称”。
                  </el-alert>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="品牌说头" prop="value15" label-width="100px">
                    <y-input
                        v-model="goodForm.value132"
                        placeholder="请输入（举例：美国新起的潮牌）"
                    ></y-input>
                  </el-form-item>
                  <el-alert
                      v-if="showTips2"
                      type="info"
                  >
                    小贴士:<br/>
                    1. 随手输入简短的几个字，为编写产品故事提供灵感。<br/>
                    2. 这些字会被保存在“卖点备忘录”中供你随时调用。
                  </el-alert>
                </el-col>
              </el-row>

            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </y-form>
    </el-card>

  </div>
</template>
<script>
import YUploadImageSingle from '@/components/y-upload-image-single'

export default {
  components: {
    YUploadImageSingle
  },
  data() {
    return {
      // 图片上传项默认展开
      activeName1: '1',
      // 手风琴效果默认展开项
      activeName2: '1',

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
            trigger: 'blur',
            required: true
          }

        ],
        brand: [
          {
            required: true,
            message: '请选择进货品牌'
          }
        ]

      },
      showTips1: false,
      // 因为手风琴每次只打开一个, 所以一个值就可以控制所有的 tips
      showTips2: false,
      brandOptions: [{
        value: '01',
        label: '美邦01'
      }, {
        value: '02',
        label: '森马02'
      }, {
        value: '03',
        label: '以纯03'
      }]
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss">

.coll-item-title {
  font-weight: 700;
  width: 150px
}
</style>
