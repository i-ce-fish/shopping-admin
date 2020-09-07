<template>
  <div class="app-container">

    <el-card>
      <div slot="header">
        <span>搜索条件</span>
      </div>
      <y-form
        ref="articleForm"
        :model="articleForm"
        label-width="80px"
      >

        <el-row>

          <el-col>
            <el-form-item label="栏目ID:" prop="catalog_id">
              <y-checkbox
                v-model="articleForm.catalogSelected"
                :options="catalogOption"
              />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="标题:" prop="title">
              <y-input
                v-model="articleForm.title"
                tips="请输入标题"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="文章内容:" prop="title">
              <y-input
                v-model="articleForm.body"
                tips="请输入文章内容"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="发布时间:" prop="title">
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
          label="所属栏目"
          align="center"
        />

        <el-table-column
          prop="title"
          label="标题"
          width="200px"
          align="center"

        />

        <el-table-column
          prop="intro"
          label="简介"
          width="200px"
          align="center"
        />

        <el-table-column
          prop="views"
          sortable
          label="阅读量"
        />
        <el-table-column
          prop="likes"
          sortable
          label="点赞数"
        />
        <el-table-column
          prop="time_post"
          sortable
          label="发布时间"
        />
        <el-table-column
          prop="delay_alert"
          sortable
          label="提醒时间"
        />

        <el-table-column
          prop="sort"
          sortable="sort"
          label="排序"
        />

        <el-table-column
          prop="is_draft"
          label="是否发布"
          sortable="is_draft"
          width="100px"
          align="center"
        >

          <template slot-scope="scope">
            <i :class="scope.row.is_col_header? 'el-icon-check':'el-icon-close'"></i>

            <!--            <el-button-->
            <!--              :type="scope.row.is_header? 'success':'info'"-->
            <!--              :icon="scope.row.is_header? 'el-icon-check':'el-icon-close'"-->
            <!--              circle-->
            <!--            />-->
          </template>

        </el-table-column>

        <el-table-column
          prop="is_editing"
          label="编辑状态"
          sortable="is_editing"
          width="100px"
          align="center"
        >

          <template slot-scope="scope">
            <i :class="scope.row.is_col_header? 'el-icon-check':'el-icon-close'"></i>
            <!--            <el-button-->
            <!--              :type="scope.row.is_col_header? 'success':'info'"-->
            <!--              :icon="scope.row.is_col_header? 'el-icon-check':'el-icon-close'"-->
            <!--              circle-->
            <!--            />-->
          </template>

        </el-table-column>

        <el-table-column
          prop="is_headline"
          label="是否头条"
          sortable="is_headline"
          width="100px"
          align="center"
        >

          <template slot-scope="scope">
            <i :class="scope.row.is_col_header? 'el-icon-check':'el-icon-close'"></i>

            <!--            <el-button-->
            <!--              :type="scope.row.is_col_header? 'success':'info'"-->
            <!--              :icon="scope.row.is_col_header? 'el-icon-check':'el-icon-close'"-->
            <!--              circle-->
            <!--            />-->
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
import { getArticles, delArticle } from '@/api/article'
import { getCatalogs } from '@/api/catalog'

export default {
  data() {
    return {
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
