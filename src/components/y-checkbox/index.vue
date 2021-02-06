<template>
    <el-checkbox-group
        v-model="model"
        v-on="$listeners"
        v-bind="$attrs"
    >
      <el-checkbox
          v-for="(item,index) of options"
          v-bind="item"
          :key="index"
      >
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
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
        value: 1,
        label: '是'
      }, {
        value: 0,
        label: '否'
      }]
    },
    // key:{type:String},
    // label:{type:String}
  },
  created() {
  },
  data() {
    return { model: this.value }
  },
  //todo 删了会怎样
  // watch: {
  //   value(val) {
  //     this.model = val
  //   }
  // },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
