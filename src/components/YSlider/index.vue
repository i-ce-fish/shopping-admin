<template>
  <el-slider v-model="result" :min="min" :max="max" @change="change" />
</template>
<script>
export default {
  props: {
    value: Number,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 }
  },
  data() {
    return {
      result: this.value
    }
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
  .yslider {
  }
</style>
