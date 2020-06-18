<template>
  <div class="upload-container">
    <el-button
      :style="{background:color,borderColor:color}"
      icon="el-icon-upload"
      size="mini"
      type="primary"
      @click=" dialogVisible=true"
    >上传图片
    </el-button>
    <!--        :multiple="multiple"-->
    <el-dialog
      :visible.sync="dialogVisible"
      :modal="modal"
    >
      <el-upload
        ref="upload"
        name="file"
        :file-list="fileList"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
        :on-change="handleChange"
        :on-error="handleError"
        :before-upload="beforeUpload"
        :show-file-list="true"
        class="editor-slide-upload"
        :action="uploadUrl"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>

      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </el-dialog>
  </div>
</template>
<script>

export default {
  name: "EditorSlideUpload",
  props: {
    value: Array,
    color: {
      type: String,
      default: "#1890ff"
    },
    // todo bug 多选时不能同时上传
    multiple: {
      type: Boolean,
      default: false,
      required: true
    },
    // 是否显示遮罩层
    modal: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  data() {
    return {
      dialogVisible: false,
      // 上传路径
      uploadUrl: "http://shop.cdb99.com:8088/api/upload",
      // 访问路径
      readFileUrl: "http://shop.cdb99.com",
      result: [],
      // has bug 上传框默认值 fileList: this.value
      fileList: []
    }
  },
  watch: {
    value(val) {
      this.fileList = val
    }
  },
  methods: {
    checkAllSuccess() {
      return Object.keys(this.listObj)
        .every((item) => this.listObj[item].hasSuccess)
    },
    handleSubmit() {
      this.$emit("success", this.result)
      this.dialogVisible = false
    },
    handleSuccess(response, file) {
      if (this.multiple) {
        this.result.push({ url: this.readFileUrl + response.data })
      } else {
        this.result = [{ url: this.readFileUrl + response.data }]
        this.fileList = this.result
      }
    },
    handleRemove(file, fileList) {
      this.result = fileList
    },
    beforeUpload(file) {
    },
    handleChange(file, fileList) {
    },
    handleError() {
      console.log("上传失败,设置假路径")
      this.result.push({ url: "https://www.uniqlo.cn/hmall/test/u0000000005575/chip/22/COL00.jpg" })
      if (!this.multiple) {
        this.result = [{ url: "https://www.uniqlo.cn/hmall/test/u0000000005575/chip/22/COL00.jpg" }]
        this.fileList = this.result
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .editor-slide-upload {
    margin-bottom: 20px;

    /deep/ .el-upload--picture-card {
      width: 100%;
    }
  }
</style>
