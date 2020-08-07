<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header>
          <Navbar/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/index.vue"
import Navbar from "@/components/Navbar/index.vue"

export default {
  components: {
    Sidebar,
    Navbar
  },
  name: "Layout"

}
</script>
<style lang="scss">

html,
body,
#app,
.layout, .el-container {
  padding: 0;
  margin: 0;
  height: 100%;
}

.layout {

  .el-aside {
    background-color: #304156;
  }

  /*清楚默认的边距*/
  .el-main {
    padding: 0;
  }

}

</style>
