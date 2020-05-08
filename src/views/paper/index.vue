<template>
  <div class="app-container">
    <el-form
      ref="paperForm"
      :model="paperForm"
      :rules="paperRules"
      inline
    >
      <el-row type="flex" justify="end">
        <el-form-item>
          <el-button type="success" @click="add">新文章</el-button>
        </el-form-item>
      </el-row>

      <el-row
        type="flex"
        justify="space-between"
      >
        <el-col>

          <el-form-item label="标题">
            <YInput
              v-model="paperForm.title"
            />
          </el-form-item>

        </el-col>

        <el-col :span="4">
          <el-row type="flex" justify="end">
            <el-form-item>
              <el-button type="primary" @click="onSearch">查询</el-button>
              <el-button @click="reset">重置</el-button>
            </el-form-item>
          </el-row>
        </el-col>
      </el-row>

    </el-form>
    <y-table :table-data="papersData" :pagination="pagination" @sortBy="sortBy" @changePage4List="getList">
      <template>

        <el-table-column prop="title" label="标题" sortable="title" />
        <el-table-column prop="abstract" label="摘要"   />
        <el-table-column prop="authors" label="作者"   />
        <el-table-column prop="keywords" label="关键字"  />
        <el-table-column prop="catalog_id" label="类别"   />
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
import { getPapers, delPaper } from "@/api/paper"

export default {
  data() {
    return {
      paperForm: {},
      papersData: [],
      pagination: {
        pageNumber: 1,
        pageSize: 10
      },
      paperRules: {}
    }
  },
  created() {
    this.getList()
  },
  methods: {
    async getList(param) {
      const response = await getPapers(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this.papersData = response.data.list
      this.pagination.total = parseInt(response.data.pagination.total, 10)
    },

    add() {
      this.$router.push({ path: "add" })
    },
    edit(id) {
      this.$router.push({ path: "edit", query: { id }})
    },
    del(id) {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delPaper(id).then((response) => {
            this.$message({
              type: "success",
              message: "删除成功!"
            })
            this.getList()
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    onSearch(sort) {
      this.getList({ ...this.paperForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.paperForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scope>
  .app-container {
  }
</style>
