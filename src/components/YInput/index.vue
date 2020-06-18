<template>
  <el-input
    v-model="result"
    :size="size"
    @input="input"
    :placeholder="placeholder"
    :disabled="disabled"
    :resize="resize"
    :form="form"
    :readonly="readonly"
    :type="type"
    :autosize="autosize"
    :autocomplete="autocomplete"
    :validate-event="validateEvent"
    :suffix-icon="suffixIcon"
    :prefix-icon="prefixIcon"
    :label="label"
    :clearable="clearable"
    :show-password="showPassword"
    :show-word-limit="showWordLimit"
    :tabindex="tabindex"

  />
</template>
<script>
export default {
  components: {},
  props: {
    value: [String, Number],
    size: {
      type: String,
      default: "small",
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    placeholder: {
      type: String,
      default: "请输入",
      required: false
    },

    resize: String,
    form: String,
    readonly: Boolean,
    type: {
      type: String,
      default: "text"
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String

  },
  data() {
    return {
      result: this.value
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.result = val
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    input() {
      this.$emit("input", this.result)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
