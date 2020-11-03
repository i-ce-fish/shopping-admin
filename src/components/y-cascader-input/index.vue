<!--可以输入可以搜索的级联选择器-->
<template>
  <el-cascader
      :key="key"
      v-model="model"
      :options="options"
      :props="{multiple: true,checkStrictly: true,emitPath: false,...props}"
      :show-all-levels="showAllLevels"
      :filterable="filterable"
      :filter-method="filterMethod"
      :clearable="clearable"
      @visible-change="onShow"
      @change="emit"
      v-bind="$attrs"
      v-on="$listeners"
  ></el-cascader>
</template>
<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
      required: true
    },
    // 设置了几个默认值, 并写在template里,以便传一个新对象时无需重复写相同的属性
    props: {
      type: Object,
      default: () => ({})
    },
    // 各种默认值
    filterable: {
      type: Boolean,
      default: true
    },
    showAllLevels: {
      type: Boolean,
      default: false
    },

    clearable: {
      type: Boolean,
      default: true
    },

    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // 作为内部变量使用
      model: this.value,
      // 当前输入的值
      currentInput: '',
      // options中是否含有当前输入值
      isContainInput: false,
      // 用于重新触发组件渲染的key
      key: Date.now()
    }
  },
  watch: {
    value(val) {
      this.model = val
    }
  },
  methods: {

    // BUG: 回车/点击 过快(小于100ms, 与遍历时间有关)会导致无法输入, 因为函数遍历还没有执行完
    // 每次输入都会遍历所有元素
    filterMethod(node, keyword) {
      // 判断输入值是否存在options中,
      // // ps: 由于所有元素都会被遍历一次, 所以当设置为true以后 后续不应该被修改为false
      this.isContainInput = node.text === keyword || this.isContainInput

      // 如果currentInput为空, 就进行一次赋值(只赋值一次, 以保证后续不被修改)
      if (!this.currentInput) {
        //  将最后输入的值到中间变量
        this.currentInput = keyword
      }
      // 如果输入值与选项值相等, 就将可选项的值赋值给中间变量
      if (node.text === keyword) {
        this.currentInput = node.value
      }

      return node.text.indexOf(keyword) !== -1
    },

    /**
     * 下拉框打开/关闭时触发
     * @param show [ Boolean ]
     */
    onShow(show) {
      // 关闭下拉框时添加当前输入的值到options中, 并添加到value中
      if (!show && this.currentInput) {
        const newItem = {
          value: this.currentInput,
          label: this.currentInput
        }

        // 如果不包含当前输入的选项, 就添加到可选项的第一个
        if (!this.isContainInput) {
          this.options.unshift(newItem)
        }

        const idx = this.value.indexOf(newItem.value)

        // 如果未勾选就添加, 已勾选就删除
        if (idx === -1) {
          this.value.push(newItem.value)
        } else {
          this.value.splice(idx, 1)
        }

        // 手动修改key重新渲染组件
        this.key = Date.now()

        // 触发事件
        this.emit()
      } else {
        // 打开下拉框时重置当前输入的值, 重置状态
        this.currentInput = ''
        this.isContainInput = false
      }
    },

    emit() {
      this.$emit('input', this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
