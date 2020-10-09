<!-- 可添加可删除的tag标签-->
<template>
  <div>
    <el-tag
        v-for="(o,i) in options"
        :key="i"
        closable
        :disable-transitions="false"
        @close="handleClose(o)"
        effect="plain"
    >
      {{ o.label }}
    </el-tag>
    <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="$event.target.blur"
        @blur="handleInputConfirm"
        :style="{width:inputWidth+'rem'}"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 自定义</el-button>

  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [{
        id: 1,
        value: 1,
        label: 'tag1'
      }, {
        id: 2,
        value: 2,
        label: 'tag2'
      }, {
        id: 3,
        value: 3,
        label: 'tag3'
      }]
    },
    // 输入框的宽度随输入文本变化,宽度随文字变化是1:1
    autoWidth: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      inputVisible: false,
      inputValue: '',
      inputWidth: 7
    }
  },
  watch: {
    inputValue(val) {
      this.inputWidth = val.length
    }
  },
  methods: {
    handleClose(o) {
      this.$emit('del', o)
      // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      const { inputValue } = this

      this.inputVisible = false
      this.inputValue = ''

      this.$emit('cfm', { label: inputValue })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  min-width: 7rem;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
