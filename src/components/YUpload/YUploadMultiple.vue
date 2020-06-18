<template>
  <div class="YUploadMultiple">
    <el-row type="flex" :gutter="10">
      <el-col>
        <span class="img" v-for="(o,i) in result" :key="i">
          <el-image
            style="width: 100px; height: 100px;padding-right: 10px"
            :src="o.url"
            fit="contain"></el-image>

        </span>
      </el-col>
      <el-col :span="6">
        <YUpload
          :value="result"
          @success="onSuccess"
          :multiple="true"
          :modal="modal"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    value: Array,
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
      result: this.value
      // resultList: this.value

    }
  },
  computed: {},
  watch: {
    value(val) {
      this.result = val
      // this.resultList = val
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    input() {
      // this.$emit("input", this.result)
    },
    onSuccess(res) {
      this.result = res
      this.$emit("input", this.result)
    }

  }
}
</script>

<style scoped lang="scss">
  .YUploadSingle {
  }
</style>
