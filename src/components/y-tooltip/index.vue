<template>
  <el-tooltip :content="tips" :disabled="!tips" :placement="placement">
    <slot />
  </el-tooltip>
</template>
<script>
export default {
  props: {
    // 内容
    tips: {
      type: String,
      value: ''
    },
    // 位置
    placement: {
      type: String,
      default: 'top-start'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

