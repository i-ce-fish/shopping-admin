<template>
  <y-tooltip :tips="tips">

    <el-date-picker
      v-model="result"
      :type="type"

      :size="size"
      :format="format"
      :value-format="valueFormat"
      :readonly="readonly"
      :placeholder="placeholder"
      :start-placeholder="startPlaceholder"
      :end-placeholder="endPlaceholder"
      :prefix-icon="prefixIcon"
      :clear-icon="clearIcon"
      @change="change"
      :name="name"
      :disabled="disabled"
      :clearable="clearable"
      :id="id"
      :popper-class="popperClass"
      :editable="editable"
      :align="align"
      :default-value="defaultValue"
      :range-separator="rangeSeparator"
      :default-time="defaultTime"
      :picker-options="pickerOptions"
      :unlink-panels="unlinkPanels"
      :validate-event="validateEvent"
    />
  </y-tooltip>
</template>
<script>
export default {
  props: {
    value: Date,
    type: {
      type: String,
      value: 'date'
    },
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: {
      String,
      default: '选择日期'
    },
    startPlaceholder: String,
    endPlaceholder: String,
    prefixIcon: String,
    clearIcon: {
      type: String,
      default: 'el-icon-circle-close'
    },
    name: {
      default: ''
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: ''
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: true
    },
    align: {
      type: String,
      default: 'left'
    },
    defaultValue: {},
    defaultTime: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean,
    validateEvent: {
      type: Boolean,
      default: true
    },
    // 输入提示
    tips: {
      type: String,
      default: '请输入'
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
.ydatepicker {
}
</style>
