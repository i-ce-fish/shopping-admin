<template>
  <el-dialog
      :title="title"
      :visible.sync="visible"
      :width="width"
      :before-close="beforeClose"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <slot/>
    <span slot="footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
      <slot name="footer"></slot>
    </span>
  </el-dialog>

</template>

<script>

export default {
  props: {
    visible: {
      Boolean,
      default: false
    },
    title: {
      String,
      default: '对话框'
    },
    // 宽度
    width: {
      type: String,
      default: '70%',
      required: false
    }
  },
  data() {
    return {}
  },
  watch: {},
  created() {
  },
  methods: {
    beforeClose() {
      this.close()
    },
    close() {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    confirm() {
      // 父组件控制是否添加成功后决定是否隐藏
      this.$emit('cfm')
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
