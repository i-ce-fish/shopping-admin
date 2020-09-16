<template>
  <div class="app-container">
    <el-card>
      <div slot="header">
        <span>搜索商品品牌</span>
      </div>

      <y-form
        ref="goodbrandForm"
        :model="goodbrandForm"
        label-width="80px"
      >
        <el-row>
          <div>
            <div class="y-inline-block y-m-r-10">按品牌名称来查找, 请在右边的搜索框内输入正确的品牌名称, 否则搜不到</div>
            <div class="y-inline-block">
              <y-input v-model="goodbrandForm.brand_name"/>
            </div>
          </div>

          <div class=" y-p-tb-10">
            <div class="y-inline-block y-m-r-10">按品牌名称来查找, 请在右边的搜索框内输入正确的品牌所属, 否则搜不到</div>
            <div class="y-inline-block">
              <y-select v-model="goodbrandForm.brand_belonged"/>
            </div>
          </div>

          <el-col :span="6">
            <el-form-item label="品牌类型:" prop="brand_type">
              <y-select
                v-model="goodbrandForm.brand_type"
                :options="[{value: '1',label: '1'},{value: '0',label: '2'}]"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="价格定位:" prop="price_object">
              <y-select
                v-model="goodbrandForm.price_object"
                :options="[{value: '1',label: '1'},{value: '0',label: '2'}]"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客群年龄:" prop="age_object">
              <y-select
                v-model="goodbrandForm.brand_type"
                :options="[{value: '1',label: '1'},{value: '0',label: '2'}]"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="风格定位:" prop="style_object">
              <y-select
                v-model="goodbrandForm.brand_type"
                :options="[{value: '1',label: '1'},{value: '0',label: '2'}]"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加品牌</el-button>

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
          prop="id"
          label="ID"
          align="center"
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
          label="品牌简写"
          align="center"

        >

        </el-table-column>
        <el-table-column
          prop="brand_belonged"
          label="品牌所属"
          align="center"

        >

        </el-table-column>
        <el-table-column
          prop="brand_type"
          label="品牌类型"
          align="center"
          sortable="brand_type"

        >

        </el-table-column>
        <el-table-column
          prop="price_object"
          label="价格定位"
          align="center"
          sortable="price_object"

        >

        </el-table-column>
        <el-table-column
          prop="age_object"
          label="客群年龄"
          align="center"
          sortable="age_object"

        >

        </el-table-column>

        <el-table-column
          prop="style_object"
          label="风格定位"
          align="center"
          sortable="style_object"

        >

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
      this.pagination.total = parseInt(response.data.pagination.total, 10)
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

<style lang='scss' scope>
.app-container {
  padding: 20px;

  .no-margin {
    margin: 0;
  }
}
</style>
