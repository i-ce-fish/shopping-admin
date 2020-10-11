<template>
  <div style="background-color:#00feff;padding: 10px">
    父组件及fatherData:{{fatherData}}
    <user-input width="400px"  @trigger="fatherMethod"></user-input>

  </div>
</template>
<script>
import input from '@/views/test/demo/input'

export default {
  components: { userInput: input },
  data() {
    return {
      fatherData: ''
    }
  },
  methods: {
    // 每次触发trigger事件就会执行这个方法
    fatherMethod(value) {
      console.log('fatherMethod')
      // 接收子组件emit出来的参数, 也就是value , 并将value 赋值给fatherData
      this.fatherData = value
    }
  }
}
</script>

<style lang="scss" scoped>
.father {
}
</style>
