<template>
  <div class="YUploadSingle">
    <el-row type="flex" :gutter="10">
      <el-col>
        <y-input
          v-model="result"
          placeholder="请点击上传图片"
          :disabled="true"
        />
      </el-col>
      <el-col :span="6">
        <YUpload
          :value="resultList"
          @success="onSuccess"
          :multiple="false"
          :modal="modal"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    // 是否显示遮罩层
    modal: {
      type: Boolean,
      default: true,
      required: false
    }

  },
  components: {},
  data() {
    return {
      result: this.value,
      // 初始化传入yupload 的数据
      resultList: [{ url: this.value }]
    }
  },
  computed: {},
  watch: {
    value(val) {
      // 处理没有图片的情况
      if (val) {
        this.result = val
        this.resultList = [{ url: val }]
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onSuccess(res) {
      // 单个图片上传 ，取出上传文件数组中的url
      // 可选链运算符
      // todo 删除后设置成啥
      this.result = (res?.[0]?.url) ?? null
      console.log("result", this.result)
      this.$emit("input", this.result)
    }
  }
}
</script>

<style scoped lang="scss">
.YUploadSingle {
}
</style>
