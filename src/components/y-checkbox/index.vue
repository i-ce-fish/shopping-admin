<template>
  <y-tooltip :tips="tips">

    <el-checkbox-group
        v-model="result"
        :disabled="disabled"
        :min="min"
        :max="max"
        :size="size"
        :fill="fill"
        :text-color="textColor"
        @change="change"
    >
      <el-checkbox
          v-for="item of options"
          :id="item.id"
          :key="item.value"
          :label="item.label"
          :indeterminate="item.indeterminate"
          :disabled="item.disabled"
          :checked="item.checked"
          :name="item.name"
          :true-label="item.trueLabel"
          :false-label="item.falseLabel"
          :controls="item.controls"
          :border="item.border"
          :size="item.size"
      />
    </el-checkbox-group>
  </y-tooltip>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: [Array, Object],
      default: () => [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    },
    label: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String,

    // 输入提示
    tips: {
      type: String,
      default: ''
    }
  },
  created() {
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
.ycheckbox {
}
</style>
