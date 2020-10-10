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
    <y-table
        :data="testData"
        :pagination="pagination"
        @sortBy="sortBy"
        @changePage4List="getList"
        class="y-p-t-20"
    >
      <template>

        <el-table-column
            prop="id"
            label="id"
            align="center"

        >

        </el-table-column>

        <el-table-column
            prop="description"
            label="description"
            align="center"

        >

        </el-table-column>

        <el-table-column
            prop="display_name"
            label="display_name"
            align="center"

        >

        </el-table-column>

        <el-table-column label="操作" width="100px" align="center">
          <template slot-scope="{row}">
            <el-button type="text" size="small" @click="edit(row.id)">修改</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small" @click="del(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </y-table>
  </div>
</template>
<script>
import { getTests, delTest } from '@/api/test'
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
          delTest(id)
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
