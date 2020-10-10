<template>
  <div class="app-container">
    <el-card>
      <y-form
          ref="testForm"
          :model="testForm"
          label-width="80px"
      >

        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加测试模板</el-button>

        </el-row>
      </y-form>
    </el-card>
    <el-table
      :data="testData"
      :pagination="pagination"
      @sortBy="sortBy"
      @changePage4List="getList"
      style="width: 100%">
      <el-table-column
        prop="size_name"
          label="尺码名"
        width="300">
      </el-table-column>
      <el-table-column
        prop="display_name"
        label="尺码显示名"
        width="500">
      </el-table-column>
      <el-table-column
        prop="description"
        label="尺码解释"
        width="1000">
      </el-table-column>
      <el-table-column
        prop="sizetype"
        label="尺码类别"
        width="400">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        width="100">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getGoodsizes, delGoodsize } from '@/api/goodsize'

export default {
  data() {
    return {
      testForm: {},
      testData: [],
      pagination: {
        pageNumber: 1,
        pageSize: 10
      }

    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList(param) {
      const res = await getGoodsizes(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      console.log(res)
      this.testData = res.data.list
      // this.pagination.total = parseInt(response.data.pagination.total, 10)
      this.pagination.total = res.data.pagination.total
    },

    add() {
      this.$router.push({ path: 'add' })
    },
    edit(id) {
      this.$router.push({
        path: 'edit',
        query: { id }
      })
    },
    del(id) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delGoodsize(id)
            .then((response) => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getList()
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    onSearch(sort) {
      this.getList({ ...this.testForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.testForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
.app-container {
  padding: 20px;

  .no-margin {
    margin: 0;
  }
}
</style>
