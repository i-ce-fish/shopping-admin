<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogShow"
    width="70%"
    :before-close="handleClose"
    :modal="modal"
  >
    <div class="dialogForm">

      <slot />

      <!--      <y-form-->
      <!--        ref="dialogForm"-->
      <!--        :model="dialogForm"-->
      <!--        :rules="dialogRules"-->
      <!--        label-width="100px"-->
      <!--      >-->
      <!--        <el-row>-->
      <!--        </el-row>-->
      <!--      </y-form>-->

    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
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
    }
  },
  data() {
    return {
      // dialogForm: {},
      // dialogRules: {},
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
    handleClose(done) {
      this.$emit('test', this.dialogShow)

      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {
        })
    },
    beforeClose() {
      // this.$emit("input", this.dialogShow)
    },
    close() {
      this.dialogShow = false
      this.$emit('input', this.dialogShow)
      this.$emit('close')
    },
    confirm() {
      // 父组件控制是否添加成功, 然后关闭
      this.$emit('input', this.dialogShow)
      this.$emit('confirm')
    }
  }

}
</script>
<style lang='scss' scope>

</style>
