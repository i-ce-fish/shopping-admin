<template>
  <el-slider
    v-model="result"
    :min="min"
    :max="max"
    @change="change"
    :step="step"
    :show-input="showInput"
    :show-input-controls="showInputControls"
    :input-size="inputSize"
    :show-stops="showStops"
    :show-tooltip="showTooltip"
    :format-tooltip="formatTooltip"
    :disabled="disabled"
    :range="range"
    :vertical="vertical"
    :height="height"
    :debounce="debounce"
    :label="label"
    :tooltip-class="tooltipClass"
    :marks="marks"

  />
</template>
<script>
export default {
  props: {
    value: {
      type: [Number, Array],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showInputControls: {
      type: Boolean,
      default: true
    },
    inputSize: {
      type: String,
      default: "small"
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
    },
    debounce: {
      type: Number,
      default: 300
    },
    label: {
      type: String
    },
    tooltipClass: String,
    marks: Object

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
