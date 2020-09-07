<template>
  <y-tooltip :tips="tips">

    <div class="">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :limit="limit"
        :on-exceed="onExceed"
        :multiple="limit>1||limit===0"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus" />
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" >
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>

    </div>

  </y-tooltip>
</template>
<script>
export default {

  props: {

    // 上传图片数量限制, 0 为无限制
    limit: {
      type: Number,
      default: 0
    },
    // 输入提示
    tips: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    onExceed() {
      this.$message({
        type: 'warning',
        message: `最多只能上传${this.limit}张图片`
      })
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
