<template>
  <div style="background-color:#00ff80;padding: 5px">
    子组件<br/>
    接收的外部参数width:{{ width }}<br/>
    内部参数:innerData:{{ innerData }}<br/>
    <input v-model="innerData" @input="onInput" :style="{width:width}"/>

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
    }
  },
  data() {
    return {
      innerData: ''
    }
  },
  methods: {
    // 每次输入改变的时候调用这个方法
    // emit一个名为tigger的事件,并传出this.innerData作为参数,
    onInput() {
      this.$emit('trigger', this.innerData)
    }
  }

}
</script>

<style lang="scss" scoped>
.input {
}
</style>
