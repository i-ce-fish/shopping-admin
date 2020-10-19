<template>
  <div style="background-color:#a8f3ce;padding: 5px">
    子组件<br/>
    接收的外部参数width:{{ width }}<br/>
    内部参数:innerData:{{ innerData }}<br/>
    <input v-model="innerData" @input="onInput" :style="{width:width}"/>
    <slot  :childData="childData2" :otherData="{name:'576767'}"></slot>
    <br/>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  props: {
    // 文本框的值
    // value: [String],

    // 宽度
    width: {
      // 类型
      type: String,
      // 默认
      default: '100px',
      // 是否必须
      required: false
    },
    method: {
      type: Function,
      default: () => {
        console.log('son methos')
      }
    }
  },
  data() {
    return {
      innerData: '',
      childData2: '子组件的数据'
    }
  },
  methods: {
    // 每次输入改变的时候调用这个方法
    // emit一个名为tigger的事件,并传出this.innerData作为参数,
    onInput() {
      this.$emit('trigger', this.innerData)
      this.method(123)
    }
  }

}
</script>

<style lang="scss" scoped>
.input {
}
</style>
