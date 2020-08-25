<template>
  <y-tooltip :tips="tips" >

  <el-input-number
    v-model="result"
    controls-position="right"
    @change="handleChange"
    :min="min"
    :max="max"
    :step="step"
    :step_strictly="stepStrictly"
    :disabled="disabled"
    :size="size"
    :controls="controls"
    :controls_position="controlsPosition"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :precision="precision"
  />
  </y-tooltip>
</template>
<script>
export default {
  props: {
    value: Number,

    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 1
    },
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ""
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10)
      }
    },
    // 输入提示
    tips: {
      type: String,
      default: ""
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
    handleChange() {
      this.$emit("input", this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
.ynumber {
}
</style>
