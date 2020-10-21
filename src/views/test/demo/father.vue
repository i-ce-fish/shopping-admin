<template>
  <div style="background-color:#bfe5e5;padding: 10px">
    父组件及fatherData:{{fatherData}}
    <user-input width="400px" @trigger="fatherMethod" :method="test">
      <template #default="data">父组件插槽: {{data}}</template>
      <!-- eslint-disable-next-line -->
      <template #footer>父组件插槽2:</template>
    </user-input>
    以下内容需要权限:
    <div v-permission="['admin','user']">内容</div>
  </div>
</template>
<script>
import input from '@/views/test/demo/input'
import { mapGetters } from 'vuex'

export default {
  // 注册组件
  components: { userInput: input },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  data() {
    return {
      fatherData: ''
    }
  },
  methods: {
    // 每次触发trigger事件就会执行这个方法
    fatherMethod(value) {
      // console.log('fatherMethod')
      // 接收子组件emit出来的参数, 也就是value , 并将value 赋值给fatherData
      this.fatherData = value
    },
    test(e) {
      console.log('test fatherMethod', e)
      console.log('stroe', this.$store.state.user.roles)
    }
  }
}
</script>

<style lang="scss" scoped>
.father {
}
</style>
