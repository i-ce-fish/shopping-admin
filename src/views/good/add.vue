<template>
  <div class="card-container">
    <el-card class="box-card">
      <div slot="header">
        <el-row type="flex" justify="space-between" align="middle">

          <el-col>
            <el-alert :closable="false" type="info">
              小贴士:<br/>
              1.同款下的每种颜色，系统支持建各自颜色的商品资料。<br/>
              2.有同款其他颜色货品，录入过商品资料的，请输入款号编码。
            </el-alert>
          </el-col>
          <el-col>
            <el-row type="flex" justify="end">
              <el-col :span="12" class="y-p-r-10">
                <y-input prefix-icon="el-icon-search" placeholder="请输入款号编码"></y-input>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" plain>确定</el-button>
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
        <el-collapse v-model="activeName">
          <el-collapse-item title="上传商品图片" name="1">
            <div>
              <el-col :span="8" class="y-p-r-10">

                <el-form-item label="" prop="main_pic" label-width="0">
                  <y-upload-image-single
                    v-model="goodForm.main_pic"
                    tips="上传1张商品正面图"
                  />
                  <!--                  <el-upload-->
                  <!--                    class="avatar-uploader"-->
                  <!--                    :action="require('@/settings').UPLOAD_URL"-->
                  <!--                    :show-file-list="false"-->
                  <!--                    type="picture-card"-->
                  <!--                    :on-success="handleAvatarSuccess"-->
                  <!--                    :before-upload="beforeAvatarUpload">-->
                  <!--                    <img v-if="imageUrl" :src="imageUrl" width="300px" height="300px" class="avatar">-->
                  <!--                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
                  <!--                  </el-upload>-->
                </el-form-item>
                <el-alert
                  type="info">
                  上传商品主图(正面图)
                </el-alert>
              </el-col>
              <el-col :span="16">

                <el-form-item label="详情轮播图:" prop="carousels">

                  <div style="width:485px;max-height:420px;overflow-y: scroll;">
                    <y-upload-image
                      v-model="goodForm.carousels"
                      class="upload-carousels"
                    />

                  </div>
                </el-form-item>
                <el-alert
                  type="info">
                  上传商品侧面图、背后图、模特图、细节图(用于轮播,请排好顺序, 商品主图为第1张轮播图)
                </el-alert>
              </el-col>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="activeName1" accordion>
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
  components: { YUploadImageSingle },
  data() {
    return {
      activeName: '1',
      activeName1: '1',
      imageUrl: '',
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

      }
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2
      //
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
.add {
}
</style>
