<template>
  <div class="dashboard app-container">
    {{value}}
    <test v-model="value" :options="options"  ></test>
    爷组件
    <father></father>
    <el-row type="flex">
      <el-col v-for="i in 4" :key="i">
        <el-card class="box-card">
          <el-row class="card-header">
            <el-col :span="18" class="title">title</el-col>
            <el-col :span="6" class="icon">icon</el-col>
          </el-row>
          <el-row>
            <el-col class="num">$0123.456</el-col>
          </el-row>
          <el-row class="card-desc">
            <el-col>
              <div class="test">
                周同比12%
              </div>
            </el-col>
          </el-row>
          <el-row class="card-ft">
            <el-col>日销售额</el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <div></div>
      <div class="">
        <wx-home></wx-home>
      </div>
    </el-row>
    <!--    <el-row>-->
    <!--      <el-col>-->
    <!--        <Tinymce ref="editor" v-model="content" :height="400"/>-->
    <!--      </el-col>-->
    <!--    </el-row>-->

    <!--    <el-row>-->
    <!--      <el-col>-->
    <!--        <el-card class="box-card">-->
    <!--          <div slot="header" class="clearfix">-->
    <!--            <span>商城首页设置</span>-->
    <!--          </div>-->

    <!--          <y-form-->
    <!--            ref="settingForm"-->
    <!--            :model="settingForm"-->
    <!--            :rules="settingRules"-->
    <!--            label-width="100px"-->
    <!--          >-->
    <!--            <el-row>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="店铺名称:" prop="product_name">-->

    <!--                  <el-tooltip content="建议3-5个字" placement="top-start">-->
    <!--                    <y-input-->
    <!--                      v-model="settingForm.shopName"-->
    <!--                    />-->
    <!--                  </el-tooltip>-->

    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="店铺地址:" prop="product_sn">-->

    <!--                  <y-input-->
    <!--                    v-model="settingForm.shopAddress"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="经度:" prop="type_sn">-->
    <!--                  <el-tooltip class="item" content="用于顾客导航到店铺" placement="top-start">-->
    <!--                    <y-input-->
    <!--                      v-model="settingForm.longitude"-->
    <!--                    />-->
    <!--                  </el-tooltip>-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="纬度:" prop="gender">-->
    <!--                  <el-tooltip content="用于顾客导航到店铺" placement="top-start">-->
    <!--                    <y-input-->
    <!--                      v-model="settingForm.latitude"-->
    <!--                    />-->
    <!--                  </el-tooltip>-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="轮播图:" prop="carousels">-->

    <!--                  <y-upload-multiple-->
    <!--                    v-model="settingForm.carousels"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="宣传视频:" prop="detail">-->
    <!--                  <y-upload-single-->
    <!--                    v-model="settingForm.video"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="宣传简介:" prop="detail">-->
    <!--                  <y-input-->
    <!--                    v-model="settingForm.videoIntro"-->
    <!--                    type="textarea"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="微信二维码图片:" prop="detail">-->
    <!--                  <y-upload-single-->
    <!--                    v-model="settingForm.wxQRcode"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->
    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="微信id:" prop="detail">-->
    <!--                  <y-input-->
    <!--                    v-model="settingForm.wxid"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->
    <!--              <el-col :span="12">-->
    <!--                <el-form-item label="联系电话:" prop="detail">-->
    <!--                  <y-input-->
    <!--                    v-model="settingForm.mobile"-->
    <!--                  />-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->

    <!--              <el-col :span="24">-->
    <!--                <el-form-item>-->
    <!--                  <el-button @click="submit('settingForm')">提交</el-button>-->
    <!--                  <el-button @click="back">返回</el-button>-->
    <!--                </el-form-item>-->
    <!--              </el-col>-->
    <!--            </el-row>-->
    <!--          </y-form>-->
    <!--        </el-card>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
  </div>
</template>

<script>
import Tinymce from '@/components/tinymce/tinymce.vue'
import wxHome from '@/views/mock-wx/home.vue'
import father from '@/views/test/demo/father'
import test from '@/views/test/demo/test'

export default {
  components: {
    Tinymce,
    wxHome,
    father,
    test
  },
  data() {
    return {
      settingForm: {},
      settingRules: {},
      content: '',
      questionForm: {},
      options: [{ value: '1', label: '23' }, { value: '12', label: '223' }],

      value: []
    }
  },
  created() {
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
//@import "~@/styles/variables.scss";

.dashboard {
  background-color: $colorBgGrey;
  min-height: 100vh;

  .box-card {
    margin: 10px;

    .num {
      font-size: 30px;
    }
  }
}

</style>
