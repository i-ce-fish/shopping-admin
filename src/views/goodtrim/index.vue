<template>
  <div class="app-container">
    <el-card>
      <y-form
        ref="goodtrimForm"
        :model="goodtrimForm"
        label-width="90px"
      >

        <el-row>

          <el-col :span="6">
            <el-form-item label="后整理工艺:" prop="trimmed_name">

              <y-input

                v-model="goodtrimForm.trimmed_name"

              />
            </el-form-item>
          </el-col>

        </el-row>

        <el-row type="flex" align="space-between">
          <el-col>
            <y-button type="primary" @click="onSearch">查询</y-button>
            <y-button @click="reset" class="y-mr-l-10">重置</y-button>
          </el-col>
          <el-button type="success" @click="add">添加面料名称</el-button>

        </el-row>
      </y-form>
    </el-card>
    <y-table
      :data="goodtrimsData"
      :pagination="pagination"
      @sortBy="sortBy"
      @changePage4List="getList"
      class="y-p-t-20"
    >
      <template>

        <el-table-column
          prop="trimmed_name"
          label="后整理名称"
          align="center"
        >

        </el-table-column>

        <el-table-column
          prop="trimmed_alias"
          label="后整理别名"
          align="center"

        >

        </el-table-column>

        <el-table-column
          prop="intro"
          label="功能简介"
          align="center"

        >

        </el-table-column>

        <el-table-column label="操作" width="100px" align="center">
          <template v-slot:default="{row}">
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
import { getGoodtrims, delGoodtrim } from '@/api/goodtrim'

export default {
  data() {
    return {
      goodtrimForm: {},
      goodtrimsData: [],
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
      const { data } = await getGoodtrims(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this.goodtrimsData = data.list
      this.pagination.total = data.pagination.total
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
          delGoodtrim(id)
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
      this.getList({ ...this.goodtrimForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.goodtrimForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
.app-container {

}
</style>
