<template>
  <div class="app-container">

    <el-card>
      <div slot="header">
        <span>搜索条件</span>
      </div>
      <y-form
        ref="articleForm"
        :model="articleForm"
        label-width="130px"
      >
        <el-col :span="6" class="y-p-r-10">
          <el-form-item label="标题:" prop="title">
            <y-input
              v-model="articleForm.title"
              prefix-icon="el-icon-search"
              placeholder="请输入文章标题/关键字标签"
            >
            </y-input>
          </el-form-item>
        </el-col>

        <el-button type="primary">展开</el-button>

        <!--          todo  展开收起-->
        <el-row>
          <el-row>
            <el-col>
              <el-form-item label="按推文状态筛选:" prop="type">
                <y-checkbox
                  v-model="articleForm.catalogSelected"
                  :options="ARTICLE.TYPE"
                />
              </el-form-item>
            </el-col>

            <el-col>
              <el-form-item label="栏目ID:" prop="catalog_id">
                <y-checkbox
                  v-model="articleForm.catalogSelected"
                  :options="catalogOption"
                />
              </el-form-item>
            </el-col>

            <el-col>
              <el-form-item label="按发布天数筛选:" prop="type">
                <y-checkbox
                  v-model="articleForm.catalogSelected"
                  :options="ARTICLE.POST_DAY"
                />
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="自定义日期:" prop="title">
                <y-datepicker
                  v-model="articleForm.value123"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </el-form-item>
            </el-col>

          </el-row>
          <el-row type="flex" align="space-between">
            <el-col>

              <el-button type="primary" @click="onSearch">查询</el-button>
              <el-button @click="reset">重置</el-button>
            </el-col>

            <el-button type="success" @click="add">编写推文</el-button>

          </el-row>
        </el-row>

      </y-form>

    </el-card>

    <y-table
      :data="articlesData"
      row-key="id"
      :pagination="pagination"
      @sortBy="sortBy"
      @changePage4List="getList">
      <template>

        <el-table-column
          prop="catalog_name"
          label="推文状态"
          align="center"
          width="100px"
        />
        <el-table-column
          prop="catalog_name"
          label="栏目名称"
          sortable
          align="center"
          width="100px"

        />
        <el-table-column
          prop="catalog_name"
          label="发布天数"
          sortable
          align="center"
          width="100px"

        />
        <el-table-column
          prop="time_post"
          sortable
          label="发布时间"
          width="150px"

        />
        <el-table-column
          prop="title"
          label="文章标题"
          width="200px"
          align="center"

        />

        <el-table-column
          prop="intro"
          label="内容简介"
          align="center"
        />
        <el-table-column
          prop="likes"
          sortable
          align="center"
          label="推送数"
          width="100px"

        />
        <el-table-column
          prop="views"
          sortable
          label="阅读量"
          width="100px"
          align="center"
        />

        <el-table-column label="操作" width="150px" align="center">
          <template slot-scope="{row}">
            <el-button type="text" size="small" @click="edit(row.id)">修改</el-button>
            <el-button type="text" size="small" @click="post(row.id)">发布</el-button>
            <el-button type="text" size="small" @click="del(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </y-table>
  </div>
</template>
<script>
import { getArticles, delArticle } from '@/api/article'
import { getCatalogs } from '@/api/catalog'
import { ARTICLE } from '@/utils/options'

export default {
  data() {
    return {
      ARTICLE,
      articleForm: {
        catalogSelected: []
      },
      articlesData: [],
      pagination: {
        pageNumber: 1,
        pageSize: 10
      },
      catalogOption: [{ label: 123 }]
    }
  },
  async created() {
    await this.getCatalogOption()
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

      // 根据接口筛选出catalog_name
      res.data.list.forEach((o) => {
        // eslint-disable-next-line
        o.catalog_name = this._.filter(this.catalogOption, { "id": o.catalog_id.toString() })[0]?.catalog_name
      })

      // const a = this._.chain(this.catalogOption)
      //   .forEach((i) => {
      //     i.children = this._.filter(res.data.list, ["catalog_id", Number.parseInt(i.id, 10)])
      //   })
      //   .value()
      this.articlesData = res.data.list
      this.pagination.total = parseInt(res.data.pagination.total, 10)
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
          delArticle(id)
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
