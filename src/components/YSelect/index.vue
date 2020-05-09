<template>
  <div class="">

    <el-select
      v-model="result"
      placeholder="请选择"
      :disabled="disabled"
      @change="change"
      :size="size"
    >
      <el-option v-for="item in innerOptions" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>
<script>
import request from "@/utils/request"

export default {
  components: {},
  props: {
    // 接口地址
    api: String,
    disabled: { type: Boolean, default: false },
    // 数字类型的value有bug，导致选中后label不显示
    value: String,
    config: Object,
    // 初始化数据
    options: {
      type: Array,
      default: () => [{
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }]
    },
    size: { type: String, default: "small", required: false }
  },
  data() {
    return {
      result: this.value,
      // 作为内部数据使用
      innerOptions: this.options
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.result = val
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    change() {
      this.$emit("input", this.result.toString())
    },
    async initData() {
      if (this.api) {
        const res = await request({
          url: this.api,
          method: "get"
        })
        this.innerOptions = res.data.map((item) => ({
          label: item.name,
          value: item.id.toString()
        }))
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .base-select {
  }
</style>
