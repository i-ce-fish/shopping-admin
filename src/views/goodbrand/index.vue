<template>
  <div class="app-container">
    <el-card>
      <y-form
          ref="goodbrandForm"
          :model="goodbrandForm"
          label-width="80px"
      >

        <el-row>

          <el-col :span="8" class="y-p-r-10">
            <el-form-item label="搜索:" prop="fieldname">

              <y-input

                  v-model="goodbrandForm.fieldname"
                  placeholder="输入中文名、英文名、简写或品牌编码"
              >

              </y-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" style="line-height: 40px">

            <div class="y-color-minor y-font-default">系统默认“无品牌”编码为“00”
            </div>

          </el-col>

        </el-row>

        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加品牌名称</el-button>

        </el-row>
      </y-form>
    </el-card>
    <y-table
        :data="goodbrandsData"
        :pagination="pagination"
        @sortBy="sortBy"
        @changePage4List="getList"
        class="y-p-t-20"
    >
      <template>

        <el-table-column
            prop="fieldname"
            label="品牌编码"
            align="center"
            sortable="fieldname"
            width="100px"
        >

        </el-table-column>

        <el-table-column
            prop="brand_name"
            label="品牌中文名"
            align="center"

        >

        </el-table-column>

        <el-table-column
            prop="brand_eng"
            label="品牌英文名"
            align="center"

        >

        </el-table-column>

        <el-table-column
            prop="brand_abbr"
            label="品牌名称简写"
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
import { getGoodbrands, delGoodbrand } from '@/api/goodbrand'

export default {
  data() {
    return {
      goodbrandForm: {},
      goodbrandsData: [],
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
      const response = await getGoodbrands(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this.goodbrandsData = response.data.list
      this.pagination.total = response.data.pagination.total
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
          delGoodbrand(id)
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
      this.getList({ ...this.goodbrandForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.goodbrandForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>

.app-container {

}
</style>
