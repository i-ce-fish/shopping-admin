<template>
  <el-form
    ref="form"
    :model="model"
    :rules="rules"
    :label-width="labelWidth"
    :label-position="labelPosition"
    :label-suffix="labelSuffix"
    :inline-message="inlineMessage"
    :status-icon="statusIcon"
    :show-message="showMessage"
    :size="size"
    :disabled="disabled"
    :validate-on-rule-change="validateOnRuleChange"
    :hide-required-asterisk="hideRequiredAsterisk"
  >
    <slot/>
  </el-form>
</template>

<script>
export default {
  props: {
    model: Object,
    rules: Object,
    labelWidth: {
      String,
      default: '100px'
    },
    inline: {
      Boolean,
      default: false
    },

    labelPosition: {
      type: String,
      default: ''
    },
    labelSuffix: {
      type: String,
      default: ''
    },
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    }

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
