<template>
  <y-tooltip :tips="tips">
    <el-input
        v-model="result"
        :size="size"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="$listeners"
    />
  </y-tooltip>

</template>
<script>
export default {
  components: {},
  props: {
    value: [String, Number],
    size: {
      type: String,
      // default: 'small',
      required: false
    },
    placeholder: {
      type: String,
      default: '请输入',
      required: false
    },

    // 输入提示
    tips: {
      type: String,
      default: ''
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
  }
}
</script>

<style scoped lang="scss">
</style>
