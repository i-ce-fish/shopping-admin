<template>
      <el-form
        ref="form"
        :model="model"
        :rules="rules"
        :label-width="labelWidth"
      >
        <slot></slot>
      </el-form>
</template>

<script>
export default {
  props: {
    model: Object,
    rules: Object,
    labelWidth: { String, default: "100px" }
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    check(callback) {
      this.$refs.form.validate((valid) => {
        callback(valid)
      })
    }
  }
}
</script>
