<template>
  <y-tooltip :tips="tips">

    <el-date-picker
      v-model="result"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </y-tooltip>
</template>
<script>
export default {
  props: {
    value: Date,
    placeholder: {
      String,
      default: '选择日期'
    },
    // 输入提示
    tips: {
      type: String,
      default: '请输入'
    }
  },
  data() {
    return { result: this.value }
  },
  watch: {
    value(val) {
      this.result = val
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.ydatepicker {
}
</style>
