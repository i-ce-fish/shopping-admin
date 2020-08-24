<template>
  <div class="app-container">
    <y-form
      ref="articleForm"
      :model="articleForm"
      label-width="80px"
    >

      <el-row>

        <el-col>
          <span type="success" style="line-height: 40px">搜索条件</span>
        </el-col>

        <el-col>
          <el-form-item label="栏目ID:" prop="catalog_id">
            <y-checkbox
              v-model="articleForm.array"
              :options="catalogOption"
            />
          </el-form-item>
        </el-col>

        <el-col :span="6">
          <el-form-item label="标题:" prop="title">
            <el-tooltip content="请输入图文分类名称 " placement="top-start">
              <y-input
                v-model="articleForm.title"
              />
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="文章内容:" prop="title">
            <el-tooltip content="请输入图文分类名称 " placement="top-start">
              <y-input
                v-model="articleForm.value234"
              />
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="发布时间:" prop="title">
            <el-tooltip content="请输入图文分类名称 " placement="top-start">
              <y-datepicker
                v-model="articleForm.value123"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
            </el-tooltip>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row type="flex" align="space-between">
        <el-col>

          <el-button type="primary" @click="onSearch">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </el-col>
        <el-col :span="4">

          <el-button type="success" @click="add">添加图文模块</el-button>

        </el-col>

      </el-row>

    </y-form>

    <y-table :data="articlesData" row-key="id" :pagination="pagination" @sortBy="sortBy" @changePage4List="getList">
      <template>

        <el-table-column
          prop="catalog_id"
          label="栏目ID"
          width="100px"
          align='center'>

        </el-table-column>

        <el-table-column
          prop="title"
          label="标题">

        </el-table-column>

        <el-table-column
          prop="intro"
          label="简介"
          width="200px"
          align='center'>

        </el-table-column>

        <el-table-column
          prop="count"
          label="阅读量">
        </el-table-column>
        <el-table-column
          prop="count"
          label="点赞数">
        </el-table-column>
        <el-table-column
          prop="count"
          label="发布时间">
        </el-table-column>
        <el-table-column
          prop="count"
          label="提醒时间">
        </el-table-column>

        <el-table-column
          prop="count"
          label="排序">
        </el-table-column>

        <el-table-column
          prop="is_header"
          label="是否首页"
          sortable="is_header"
          width="100px"
          align='center'>

          <template slot-scope="scope">
            <el-button
              :type="scope.row.is_header? 'success':'info'"
              :icon="scope.row.is_header? 'el-icon-check':'el-icon-close'"
              circle></el-button>
          </template>

        </el-table-column>

        <el-table-column
          prop="is_col_header"
          label="是否头条"
          sortable="is_col_header"
          width="100px"
          align='center'>

          <template slot-scope="scope">
            <el-button
              :type="scope.row.is_col_header? 'success':'info'"
              :icon="scope.row.is_col_header? 'el-icon-check':'el-icon-close'"
              circle></el-button>
          </template>

        </el-table-column>

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
import { getArticles, delArticle } from "@/api/article"
import { getCatalogs } from "@/api/catalog"

export default {
  data() {
    return {
      articleForm: {
        array: []
      },
      articlesData: [],
      pagination: {
        pageNumber: 1,
        pageSize: 10
      },
      catalogOption: []
    }
  },
  created() {
    this.getCatalogOption()
    this.getList()
  },
  methods: {
    async getList(param) {
      const res = await getArticles(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )

      // const a = this._.chain(this.catalogOption)
      //   .forEach((i) => {
      //     i.children = this._.filter(res.data.list, ["catalog_id", Number.parseInt(i.id, 10)])
      //   })
      //   .value()
      this.articlesData = res.data.list
      this.pagination.total = parseInt(res.data.pagination.total, 10)
    },

    add() {
      this.$router.push({ path: "add" })
    },
    edit(id) {
      this.$router.push({
        path: "edit",
        query: { id }
      })
    },
    del(id) {
      this.$confirm("是否删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          delArticle(id)
            .then((response) => {
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
      this.getList({ ...this.articleForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.articleForm = {}
      this.getList()
    },
    async getCatalogOption() {
      const res = await getCatalogs()
      this.catalogOption = res.data.list.map((item) => ({
        ...item,
        id: item.id.toString(),
        label: item.catalog_name,
        value: item.id.toString()
      }))
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
