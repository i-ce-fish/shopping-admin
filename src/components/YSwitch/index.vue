<template>
  <y-tooltip :tips="tips">
    <el-switch
      v-model="result"
      :disabled="disabled"
      :width="width"
      :active-icon-class="activeIconClass"
      :inactive-icon-class="inactiveIconClass"
      :active-text="activeText"
      :inactive-text="inactiveText"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :active-value="activeValue"
      @change="change"
      :inactive-value="inactiveValue"
      :name="name"
      :validate-event="validateEvent"
      :id="id"
    />
  </y-tooltip>
</template>
<script>
export default {
  props: {

    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    id: String,
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
    change() {
      this.$emit('input', this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
.ySwitch {
}
</style>
