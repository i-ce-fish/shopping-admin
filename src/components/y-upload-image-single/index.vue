<template>
  <y-tooltip :tips="tips">
    <div class="">
      <el-upload
        class="avatar-uploader"
        :action="UPLOAD_URL"
        :show-file-list="false"
        :on-success="onSuccess"
        :on-Remove="onRemove"
      >
        <div v-if="imageUrl">
          <img :src="imageUrl"  style="object-fit: contain;" :width="width" :height="height" class="avatar"/>

        </div>
        <div v-else>
          <i
            :style="{height,width,'line-height':height} "
            class="el-icon-plus avatar-uploader-icon"></i>
        </div>
      </el-upload>
      <div v-if="imageUrl" class="y-flex y-align-around" :style="{width}">
        <y-tooltip tips="查看大图">
          <i
            style="font-size: 20px"
            class="el-icon-zoom-in y-hover y-m-r-10"
            @click="onPictureCardPreview"></i>
        </y-tooltip>
        <y-tooltip tips="删除图片">
          <i
            style="font-size: 20px;"
            class="el-icon-delete y-hover y-m-r-10"
            @click="onRemove"></i>
        </y-tooltip>
      </div>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="imageUrl" alt="">
      </el-dialog>
    </div>

  </y-tooltip>
</template>
<script>
import { UPLOAD_URL, SERVE } from '@/settings'

export default {

  props: {
    value: {
      type: String
    },
    // 输入提示
    tips: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '200px',
      required: false
    },
    height: {
      type: String,
      default: '200px',
      required: false
    }
  },
  computed: {},
  data() {
    return {
      imageUrl: '',
      // fileList: this.value,
      result: this.value,
      dialogVisible: false,
      UPLOAD_URL,
      SERVE
    }
  },
  watch: {
    value(val) {
      this.result = val
    }
  },
  methods: {
    onRemove() {
      this.imageUrl = ''
    },
    onPictureCardPreview() {
      this.dialogVisible = true
    },
    onSuccess(res, file, fileList) {
      // 保存绝对路径
      // this.fileList.push({ name: file.name, url: this.serve + res.data })
      // this.fileList.push(file)
      this.imageUrl = this.SERVE + res.data
    }

  }

}
</script>
<style lang="scss" scoped>

// 显示下面的icon
/deep/ .el-upload-list--picture-card .el-upload-list__item {
  overflow: visible;
}

.avatar-uploader /deep/ .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader /deep/ .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}

</style>
