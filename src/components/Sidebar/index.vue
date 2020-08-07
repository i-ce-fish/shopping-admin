<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#bfcbd9"
      :router="true"
      :default-active="activeMenu"
      :collapse="false"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"/>

      <!--      <el-menu-item index="/home" v-for="route in routes" :key="route.path">-->
      <!--      <el-menu-item index="/home">-->
      <!--        <i class="el-icon-menu"></i>-->
      <!--        <span slot="title">首页{{item}}</span>-->
      <!--      </el-menu-item>-->
      <!--      <el-submenu index="/test">-->
      <!--        <template slot="title">-->
      <!--          <i class="el-icon-location"></i>-->
      <!--          <span>导航一</span>-->
      <!--        </template>-->
      <!--        <el-menu-item-group>-->
      <!--          <el-menu-item index="/paper" >论文</el-menu-item>-->
      <!--        </el-menu-item-group>-->
      <!--      </el-submenu>-->

    </el-menu>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem.vue"

export default {
  components: { SidebarItem },
  data() {
    return {}
  },

  computed: {
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
    // isCollapse() {
    //   return !this.sidebar.opened
    // }

  },
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>
.sidebar {

}
</style>
