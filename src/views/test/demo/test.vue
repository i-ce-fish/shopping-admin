<template>
  <div><span class="demonstration">{{isContainInput}}当前输入: {{currentInput}}多选选择任意一级选项{{value}}</span>
    <div>{{options}}</div>
    <el-cascader
        ref="cascader"
        v-model="value"
        :options="options"
        :props="{ multiple: true, checkStrictly: true ,emitPath:false}"
        :show-all-levels="false"
        :filterable="true"
        :filter-method="filterMethod"
        @visible-change="onShow"
        clearable></el-cascader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      currentInput: '',
      isContainInput: false,
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    }
  },
  methods: {
    // 每次输入都会遍历所有元素
    filterMethod(node, keyword) {
      // 保存最后输入的值到中间变量
      // this.currentInput = keyword

      // 判断输入值是否存在options中,
      // // ps: 由于所有元素都会被遍历一次, 所以当设置为true以后 后续不应该被修改为false
      this.isContainInput = node.text === keyword || this.isContainInput

      // 如果存在就将对应的value赋值给currentInput
      // this.currentInput = node.text === keyword ? node.value : keyword
      if (node.text === keyword) {
        this.currentInput = node.text
      }

      if (!this.isContainInput) {
        this.currentInput = keyword
      }

      console.log(this.isContainInput)
      console.log(this.currentInput)
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
        if (!this.isContainInput) {
          this.options.unshift(newItem)
        }

        // todo indexOf
        this.value.push(newItem.value)
      } else {
        // 打开下拉框时重置当前输入的值
        this.currentInput = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
}
</style>
