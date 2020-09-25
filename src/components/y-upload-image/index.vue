<template>
  <y-tooltip :tips="tips">
    <div class="">
      <!--      todo  多图片上传-->
<!--      {{ fileList }}-->
      <el-upload
        :action="serve"
        list-type="picture-card"
        :limit="limit"
        :file-list="fileList"
        :multiple="multiple"
        :on-exceed="onExceed"
        :on-preview="onPictureCardPreview"
        :on-remove="onRemove"
        :on-success="onSuccess"
      >
        <i class="el-icon-plus"/>

        <div slot="file" slot-scope="{file}">
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url"
            alt=""
          >
          <div class="y-flex y-align-around">
            <y-tooltip tips="向左移动" v-if="limit!==1">
              <i style="font-size: 20px" class="el-icon-arrow-left y-hover y-m-r-10" @click="onLeft(file)"></i>
            </y-tooltip>
            <y-tooltip tips="查看大图">
              <i
                style="font-size: 20px"
                class="el-icon-zoom-in y-hover y-m-r-10"
                @click="onPictureCardPreview(file)"></i>
            </y-tooltip>
            <y-tooltip tips="删除图片">
              <i style="font-size: 20px" class="el-icon-delete y-hover y-m-r-10" @click="onRemove(file)"></i>
            </y-tooltip>
            <y-tooltip tips="向右移动" v-if="limit!==1">
              <i style="font-size: 20px" class="el-icon-arrow-right y-hover" @click="onRight(file)"></i>
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
import { UPLOAD_URL } from '@/settings'

export default {

  props: {

    value: {
      type: Array,
      default: () => []
    },
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
  computed: {
    // 单图片还是多图片
    multiple() {
      return this.limit !== 1
    }
  },
  data() {
    return {
      fileList: this.value,
      uploadList: [], // 自定义的数组，用于处理fileList，fileList是只读的
      // fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      // 上传文件的服务器路径  todo  加入到webpack中
      serve: UPLOAD_URL
    }
  },
  watch: {
    value(val) {
      this.fileList = val
    }
  },
  methods: {
    onRemove(file) {
      const index = this.fileList.indexOf(file)
      this.fileList.splice(index, 1)
    },
    onPictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    onExceed() {
      this.$message({
        type: 'warning',
        message: `最多只能上传${this.limit}张图片`
      })
    },
    onSuccess(res, file, fileList) {
      // todo pre
      // 保存绝对路径
      // this.fileList.push({ name: file.name, url: this.serve + res.data })
      this.uploadList.push(file)
      this.emitData(this.uploadList)
    },
    /**
     * 交换index及index-1的元素
     * @param file
     */
    onLeft(file) {
      const curI = this.fileList.indexOf(file)
      const preI = curI === 0 ? curI : curI - 1// index ===0 保持不变
      const preO = this.fileList[preI]
      const curO = this.fileList[curI]
      this.fileList.splice(preI, 1, curO)
      this.fileList.splice(curI, 1, preO)
    },
    /**
     *  交换index 与index +1 的元素
     * @param file
     */
    onRight(file) {
      const curI = this.fileList.indexOf(file)
      const nexI = curI === this.fileList.length - 1 ? curI : curI + 1 // index = len -1 保持不变
      const nexO = this.fileList[nexI]
      const curO = this.fileList[curI]
      this.fileList.splice(nexI, 1, curO)
      this.fileList.splice(curI, 1, nexO)
    },
    emitData(list) {
      this.$emit('input', list)
    }
  }

}
</script>
<style lang="scss" scoped>
// fix 图片无法占满方框
/deep/ .el-upload-list__item > div {
  height: 100%;
}

// 显示下面的icon
/deep/ .el-upload-list--picture-card .el-upload-list__item {
  overflow: visible;
}

</style>
