<template>

  <!--  todo 样式:   凡是表单都要有输入建议  计划发布时间(精确到日)(显示成多少天后)(超时红色闪烁提醒)        -->
  <!--  todo 字段:           分类排序              -->
  <!--  todo 模板:搜索建议    6. 增加条件筛选提示  -->
  <div class="app-container">
    <y-form
      ref="catalogForm"
      :model="catalogForm"
      label-width="80px"
    >
      <el-row type="flex" justify="end">

      </el-row>

      <el-row type="flex" justify="space-between">
        <el-col :span="20">
          <el-col :span="6" class="y-p-r-10">
            <el-form-item label="类别名:" prop="catalog_name">
              <y-input
                prefix-icon="el-icon-search"
                placeholder="按栏目名称搜索"
                v-model="catalogForm.catalog_name"
              />
            </el-form-item>
          </el-col>

          <el-button type="primary" plain @click="onSearch">查询</el-button>
          <div class="y-p-l-10" style="display: inline-block">
            <el-alert
              title="按栏目名称来查找, 请在右边的搜索框内输入正确的品牌名称,否则搜不到"
              type="info"
              :closable="false"
            >
            </el-alert>
          </div>
        </el-col>
        <el-col :span="4">
          <el-button type="success" @click="add">新增栏目</el-button>
        </el-col>
      </el-row>

    </y-form>

    <y-table :data="catalogsData" :pagination="pagination" @sortBy="sortBy" @changePage4List="getList">
      <template>

        <el-table-column
          prop="catalog_name"
          label="类别名"
        />

        <el-table-column
          prop="description"
          label="介绍"
        />
        <el-table-column
          prop="sort"
          label="排序"
        />
        <el-table-column label="操作" width="100px">
          <template slot-scope="{row}">
            <el-button type="text" size="small" @click="edit(row.id)">修改</el-button>
            <el-button type="text" size="small" @click="del(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </y-table>
  </div>
</template>
<script>
import { getCatalogs, delCatalog } from '@/api/catalog'

export default {
  data() {
    return {
      catalogForm: {},
      catalogsData: [],
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
      const response = await getCatalogs(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this.catalogsData = response.data.list
      this.pagination.total = parseInt(response.data.pagination.total, 10)
    },

    add() {
      this.$router.push({ path: 'catalog/add' })
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
          delCatalog(id)
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
      this.getList({ ...this.catalogForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.catalogForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scope>
.app-container {
  padding: 20px;

  .no-margin {
    margin: 0;
  }
}
</style>
