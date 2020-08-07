<template>
  <div class="dashboard app-container">
    <el-row type="flex">
      <el-col v-for="i in 4" :key="i">
        <el-card class="box-card">
          <el-row class="card-header">
            <el-col :span="18" class="title">title</el-col>
            <el-col :span="6" class="icon">icon</el-col>
          </el-row>
          <el-row>
            <el-col class="num">$123.456</el-col>
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
    <el-row>
      <el-col>
        <!--        <el-card class="box-card">-->
        <!--          <div v-for="o in 4" :key="o" class="text item">-->
        <!--            {{ "列表内容 " + o }}-->
        <!--          </div>-->
        <Tinymce ref="editor" v-model="content" :height="400"/>
        <!--        </el-card>-->

      </el-col>
    </el-row>
    <!--    问卷收集  todo  api  -->
    <!--    <div class="">-->
    <!--      <el-card>-->
    <!--        <el-form-->
    <!--          ref="questionForm"-->
    <!--          :model="questionForm"-->
    <!--          label-width="100px"-->
    <!--        >-->

    <!--          <el-row>-->

    <!--            <el-col :span="12">-->
    <!--              <el-form-item label="请输入问题" prop="address">-->
    <!--                <component-->
    <!--                  v-bind:is="YInput"-->
    <!--                  v-model="questionForm.address"-->
    <!--                />-->
    <!--              </el-form-item>-->
    <!--            </el-col>-->

    <!--            <el-col :span="12">-->
    <!--              <el-form-item label="选项类型:" prop="coupon">-->
    <!--                <component-->
    <!--                  v-bind:is="YSelect"-->
    <!--                  v-model="questionForm.coupon"-->
    <!--                  :options='[{value: "选项1",label: "单选"}, {value: "选项2", label: "多选"}, {value: "选项3",label: "填空"}]'-->
    <!--                />-->
    <!--              </el-form-item>-->
    <!--            </el-col>-->

    <!--            <el-col :span="12">-->
    <!--              <el-form-item label="是否单选:" prop="status">-->
    <!--                <component-->
    <!--                  v-bind:is="YRadio"-->
    <!--                  v-model="questionForm.status"-->
    <!--                />-->
    <!--              </el-form-item>-->
    <!--            </el-col>-->

    <!--            <el-col :span="12" v-for="(o,i) in options" v-bind:key="i">-->
    <!--              <el-form-item label="选项:" prop="status">-->
    <!--                <component-->
    <!--                  v-bind:is="YInput"-->
    <!--                  v-model="questionForm.status"-->
    <!--                />-->
    <!--              </el-form-item>-->
    <!--            </el-col>-->

    <!--            <el-col :span="24">-->
    <!--              <el-form-item>-->
    <!--                <el-button @click="submit('questionForm')">添加问题</el-button>-->
    <!--              </el-form-item>-->
    <!--              <el-form-item>-->
    <!--                <el-button @click="submit('questionForm')">添加选项</el-button>-->
    <!--              </el-form-item>-->
    <!--              <el-form-item>-->
    <!--                <el-button @click="submit('questionForm')">提交</el-button>-->
    <!--              </el-form-item>-->
    <!--            </el-col>-->
    <!--          </el-row>-->

    <!--        </el-form>-->

    <!--      </el-card>-->

    <!--    </div>-->
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce/tinymce.vue"

export default {
  components: { Tinymce },
  data() {
    return {
      content: "",
      questionForm: {},
      options: ["0"]

    }
  },
  created() {
    // test lodash
    const a = this._.range(3)
    console.log(a)
  }
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
