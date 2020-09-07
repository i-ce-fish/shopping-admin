<template>
  <y-tooltip :tips="tips">

    <el-select
      v-model="result"
      placeholder="请选择"
      filterable
      :multiple="multiple"
      @change="change"
      @keyup.enter.native="changeInput"
      @blur="changeInput"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </y-tooltip>
</template>
<script>

export default {
  components: {},
  props: {
    // 单选时为字符串, 多选为数组
    value: {
      type: [String, Array],
      require: true

    },
    config: Object,
    options: {
      type: Array,
      default: () => [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    },
    // 输入提示
    tips: {
      type: String,
      default: ''
    },
    // 多选
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      result: this.value
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
  },
  methods: {
    change() {
      this.$emit('input', this.result.toString())
    },
    changeInput(e) {
      // todo tab键无效
      this.result = e.target.value
      this.$emit('input', this.result.toString())
    }
  }
}
</script>

<style scoped lang="scss">
.base-select {
}
</style>
