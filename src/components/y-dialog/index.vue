<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogShow"
    :width="width"
    :before-close="beforeClose"
    :modal="modal"
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
    value: {
      Boolean,
      default: false
    },
    title: {
      String,
      default: '对话框'
    },
    // 遮罩
    modal: {
      type: Boolean,
      default: true
    },
    // 宽度
    width: {
      type: String,
      default: '70%',
      required: false
    }
  },
  data() {
    return {
      dialogShow: this.value
    }
  },
  watch: {
    value(val) {
      this.dialogShow = val
    }
  },
  created() {
  },
  methods: {
    beforeClose() {
      this.close()
    },
    close() {
      this.dialogShow = false
      this.$emit('input', this.dialogShow)
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
