<template>
  <div class="sidebar">
    <el-menu
      default-active="1-4-1"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#bfcbd9">
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/test">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/paper">论文</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {},
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
