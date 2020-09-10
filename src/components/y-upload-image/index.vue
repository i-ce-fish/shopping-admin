<template>
  <!--todo 删除图片-->

  <y-tooltip :tips="tips">
    <div class="">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :limit="limit"
        :on-exceed="onExceed"
        :file-list="fileList"
        :multiple="limit>1||limit===0"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"/>

        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
          >
          <div>
            <y-tooltip tips="查看大图">
              <i
                style="font-size: 20px"
                class="el-icon-zoom-in y-hover y-m-r-10"
                @click="handlePictureCardPreview(file)"></i>
            </y-tooltip>
            <y-tooltip tips="删除图片">
              <i style="font-size: 20px" class="el-icon-delete y-hover" @click="handleRemove(file)"></i>
            </y-tooltip>
          </div>
        </div>

      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
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
      dialogVisible: false,
      fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file)
      console.log(fileList)
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
// fix 图片不占满方框
/deep/ .el-upload-list__item > div {
  height: 100%;
}

// 显示下面的icon
/deep/ .el-upload-list--picture-card .el-upload-list__item {
  overflow: visible;
}

</style>
