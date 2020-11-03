<template>
  <y-tooltip :tips="tips">

    <el-input-number
      v-model="result"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </y-tooltip>
</template>
<script>
export default {
  props: {
    value: Number,
    // 输入提示
    tips: {
      type: String,
      default: ''
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
</style>
