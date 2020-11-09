<template>
  <div>
    <el-form-item :label="label">
<!--      <keep-alive>-->
        <el-radio-group v-model="OptionResult" style="display: inline-block">
          <el-tag
            class="tag"
            style="display: inline-block"
            effect="plain"
            v-for="(item, index) in DynamicOptions"
            :key="index"
            :disable-transitions="false"
            closable
            @close="confirm(item)"
          >
            <el-radio :label="item" ></el-radio>
          </el-tag>
        </el-radio-group>
<!--      </keep-alive>-->
      <el-input
        v-if="inputVisible"
        style="display: inline-block;width: 300px"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button
        v-else
        style="display: inline-block"
        class="button-new-tag"
        size="small"
        @click="showInput"
      >
        自定义
      </el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    label: String
  },

  data() {
    return {
      OptionResult: '',
      DynamicOptions: this.options,
      inputVisible: false,
      inputValue: ''
    }
  },

  methods: {
    handleInputConfirm() {
      const { inputValue } = this
      if (inputValue) {
        this.DynamicOptions.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    confirm(item) {
      this.$confirm('删除选项, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.DynamicOptions.splice(this.DynamicOptions.indexOf(item), 1)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style scoped>
.tag {
  margin: 5px;
}
</style>
