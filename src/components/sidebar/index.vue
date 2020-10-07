<template>
  <!--  width = 父容器200px + 滚动条宽度20px(18px+)-->
  <div class="sidebar" style="height:100%;width: 220px;overflow-x: hidden;overflow-y: scroll">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#ffffff"
      active-text-color="#ffffff"
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
        :base-path="route.path"
      />

    </el-menu>
  </div>
</template>
<script>
import Item from '@/components/sidebar/Item.vue'
import SidebarItem from './SidebarItem.vue'

export default {
  components: {
    SidebarItem,
    Item
  },
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

<style lang="scss" scoped>

/deep/ .el-menu-item.is-active {
  background-color: #3D73B9 !important;
  transition: all 0.8s ease;
  transform: translateX(10px);
}
</style>
