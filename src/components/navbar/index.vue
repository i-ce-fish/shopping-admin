<template>
  <div class="y-flex y-align-between y-flex-no1wrap">
    <breadcrumb class="breadcrumb-container"/>
    <div
      class="y-flex y-align-center y-vertical-center y-flex-no1wrap y-p-r-10 y-p-l-10"
      style="color: #101010;font-size: 14px">
      <div class="y-p-r-10 y-p-l-10">欢迎使用云想后台管理系统</div>
      <el-divider direction="vertical"></el-divider>

      <div class="y-flex y-align-around y-p-r-10 y-p-l-10">
        <div class="y-m-r-15">2020-8-19</div>
        <div class="y-m-r-15" style="color: red">34W-3</div>
        <div class="">八月十五中秋节</div>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="y-flex  y-vertical-center y-p-r-10 y-p-l-10">
        <div class="y-m-r-10">丽水:
        </div>
        <div class="">
          <div>阴-小雨</div>
          <div>26-18°C</div>
        </div>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="y-p-r-10 y-p-l-10">
        <el-dropdown class="" trigger="click">
          <div class="">
            <img
              style="width: 40px; height: 40px;border-radius:50%;"
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              fit="contain"/>
            <!--            <i style="font-size:25px " class=" el-icon-user"/>-->
            <div class="y-inline-block" style="font-size: 12px;line-height: 100%">
              <div> 美特斯邦威丽水中山街店
              </div>
              <div>杨晴文 A01892U0001</div>
            </div>
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown" class="">
            <router-link to="/">
              <el-dropdown-item>
                首页
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>

      <div class="y-p-r-10">
        <el-popover
          placement="bottom"
          title="未读消息"
          width="300"
          trigger="click"
        >
          <el-badge :value="msgs.length" slot="reference">
            <i style="font-size:25px " class="el-icon-bell"/>

          </el-badge>
          <div class="y-flex y-align-between " v-for=" (o,i) in msgs" :key="i">

            <div class="">{{ o.content }}</div>
            <div class="">删除</div>
          </div>
        </el-popover>
      </div>

    </div>
  </div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb/index.vue'
import { mapGetters } from 'vuex'

export default {
  components: { Breadcrumb },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'token',
      'msgs'
    ])
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    logout() {
      this.$store.dispatch('user/resetToken')
      this.$router.push('/login')
    },
    add() {
      this.$store.dispatch('msgSocket/add')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
