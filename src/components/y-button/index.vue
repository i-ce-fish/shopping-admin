<template>
  <y-tooltip :tips="tips">
    <el-button
      :size="size"
      :type="type"
      :icon="icon"
      :nativeType="nativeType"
      :loading="loading"
      :disabled="disabled"
      :plain="plain"
      :autofocus="autofocus"
      :round="round"
      :circle="circle"
      @click="handleClick"
    >
      <slot></slot>
    </el-button>
  </y-tooltip>
</template>
<script>
export default {

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    tips: {
      type: String,
      default: ''
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
