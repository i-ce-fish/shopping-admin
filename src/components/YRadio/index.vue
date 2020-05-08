<template>
  <el-radio-group v-model="result" @change="change">
    <el-radio v-for="item of options" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
  </el-radio-group>
</template>
<script>

export default {
  props: {
    value: [Boolean, String],
    options:
        {
          type: Array,
          require: false,
          default: () => [
            { value: true, label: "是" },
            { value: false, label: "否" }
          ]
        }
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
  created() {
  },
  methods: {
    change() {
      this.$emit("input", this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
  .yradio {
  }
</style>
