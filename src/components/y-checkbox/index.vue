<template>
  <y-tooltip :tips="tips">

    <el-checkbox-group
        v-model="result"
        v-on="$listeners"
        v-bind="$attrs"
    >
      <el-checkbox

          v-for="item of options"
          :id="item.id"
          :key="item.value"
          v-bind="item"
      >
        {{item.label}}
      </el-checkbox>
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
  }
}
</script>

<style lang="scss" scoped>
.ycheckbox {
}
</style>
