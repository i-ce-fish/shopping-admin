<template>
  <div class="y-flex y-align-between">
    <!--    <hamburger :is-active="sidebar.opened" class="hamburger-container"@toggleClick="toggleSideBar" />-->
    <breadcrumb class="breadcrumb-container"/>
    <div class="y-flex y-align-center y-vertical-center ">
      <div class="y-p-r-10">
        <el-popover
          placement="bottom"
          title="未读消息"
          width="300"
          trigger="click"
        >
          <el-badge :value="msgs.length" slot="reference">
            <i style="font-size:25px " class="el-icon-message"/>
          </el-badge>
          <div class="y-flex y-align-between " v-for=" (o,i) in msgs" :key="i">

            <div class="">{{o.content}}</div>
            <div class="">删除</div>
          </div>
        </el-popover>
      </div>
      <el-dropdown class="" trigger="click">
        <div class="">
          <i style="font-size:25px " class="el-icon-user"/>
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
