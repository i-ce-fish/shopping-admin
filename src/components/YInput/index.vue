<template>
  <el-input v-model="result" :size="size" :placeholder="placeholder" :disabled="disabled" @input="input" />
</template>
<script>
export default {
  components: {},
  props: {
    value: [String, Number],
    size: { type: String, default: "small", required: false },
    disabled: { type: Boolean, default: false, required: false },
    placeholder: {
      type: String,
      default: "请输入",
      required: false
    }
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
