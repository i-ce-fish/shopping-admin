<template>
  <div class="layout">
    <el-container>
      <el-aside style="width: 200px;overflow: hidden;">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header class="shadow">
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
import Sidebar from '@/components/sidebar/index.vue'
import Navbar from '@/components/navbar/index.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar
  }

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

  .shadow {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  //  会被contain挡住, 而且不能超过弹窗的的z-index(2029)
    z-index: 999;
  }

}

</style>
