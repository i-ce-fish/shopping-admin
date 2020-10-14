<template>
  <y-tooltip :tips="tips" class="y-radio">

    <el-radio-group
        v-model="result"
        :size="size"
        :fill="fill"
        :text-color="textColor"
        :disabled="disabled"
        @change="change"
    >
      <el-radio
          v-for="item of options"
          :key="item.value"
          :label="item.value"

          :disabled="item.disabled"
          :name="item.name"
          :border="item.border"
          :size="item.size"
      >{{ item.label }}
      </el-radio>
    </el-radio-group>
  </y-tooltip>
</template>
<script>
import { JUDGE } from '@/utils/const'

export default {
  props: {
    value: [Boolean, String, Number],
    options:
        {
          type: [Array, Object],
          require: false,
          default: () => JUDGE
        },
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean,
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
  watch: {
    value(val) {
      this.result = val
    }
  },
  created() {
  },
  methods: {
    change() {
      this.$emit('input', this.result)
    }
  }
}
</script>

<style lang="scss" scoped>
.y-radio {
}

</style>
