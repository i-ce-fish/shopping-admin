<template>
  <el-date-picker
    v-model="result"
    type="date"
    placeholder="选择日期"
    @change="change"
  />
</template>
<script>
export default {
  props: { value: Date },
  data() {
    return { result: this.value }
  },
  watch: {
    value(val) {
      this.result = val
    }
  },
  methods: {
    change() {
      this.$emit("input", this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ydatepicker {
  }
</style>
