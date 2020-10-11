<template>
  <div>
    <el-input :style="{width:width}">
    </el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  props: {
    width: {
      type: String,
      default: '100px',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
}
</style>
