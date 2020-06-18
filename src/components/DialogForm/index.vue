<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogShow"
    width="50%"
    :before-close="handleClose"
    :modal="false"
  >
    <div class="dialogForm">
      <y-form
        ref="dialogForm"
        :model="dialogForm"
        :rules="dialogRules"
        label-width="100px"
      >
        <el-row>
          <slot name="body"></slot>

        </el-row>
      </y-form>

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
      default: "对话框"
    }
  },
  data() {
    return {
      dialogForm: {},
      dialogRules: {},
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
      console.log("guanbiqian ")
      console.log(this.dialogShow)
      this.$emit("test", this.dialogShow)

      this.$confirm("确认关闭？")
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
      this.$emit("input", this.dialogShow)
      this.$emit("close")
    },
    confirm() {
      this.dialogShow = false

      this.$emit("input", this.dialogShow)
      this.$emit("confirm")
    }
  }

}
</script>
<style lang='scss' scope>

</style>
