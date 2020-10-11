<template>
  <div>这个是父组件
    <div>调用子组件</div>
    <user-input width="400px"></user-input>

  </div>
</template>
<script>
import input from '@/views/test/demo/input'

export default {
  components: { userInput: input },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.father {
}
</style>
