<template>
  <div class="app-container">
    <el-card>
      <y-form
          ref="goodtextureForm"
          :model="goodtextureForm"
          label-width="80px"
      >
        <el-row>
          <el-col :span="6">
            <el-form-item label="材质纤维大类:" prop="texture">
              <y-input
                  v-model="goodtextureForm.texture"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加材质纤维小类名称</el-button>

        </el-row>
      </y-form>
    </el-card>
    <y-table
        :data="goodtexturesData"
        :pagination="pagination"
        @sortBy="sortBy"
        @changePage4List="getList"
        class="y-p-t-20"
    >
      <template>

        <el-table-column
            prop="texture"
            label="材质纤维大类"
            align="center"

        >

        </el-table-column>

        <el-table-column
            prop="texture_alias"
            label="材质纤维大类别名"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="texture2"
            label="材质纤维小类名称"
            align="center"
        >
        </el-table-column>
        <el-table-column
            prop="texture2Alias"
            label="材质纤维小类别名"
            align="center"
        >
        </el-table-column>

        <el-table-column
            prop="filled_content"
            label="是否需要填写成分含量"
            align="center"

            width="200px"
        >
          <template slot-scope="{row}">
            {{row.filled_content == 0 ? "否" : "是"}}
          </template>
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
import { getGoodtextures, delGoodtexture } from '@/api/goodtexture'
import { isInteger } from 'lodash'

export default {
  data() {
    return {
      goodtextureForm: {},
      goodtexturesData: [],
      // 大类
      goodtextures1Map: new Map(),
      pagination: {
        pageNumber: 1,
        pageSize: 10
      }

    }
  },
  async created() {
    // 获取1级分类, 不带分页
    await this.getAllList()
    // todo parent_id !==0
    await this.getList()
  },
  methods: {
    async getAllList() {
      const { data } = await getGoodtextures({ parent_id: 0 })
      // todo 接口完善后remove filter
      this.goodtextures1Map = new Map()
      this._.chain(data.list)
        .filter((o) => o.parent_id === 0)
        .forEach((o) => {
          this.goodtextures1Map.set(o.id, { ...o })
        })
        .value()
    },

    async getList(param) {
      const { data } = await getGoodtextures(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this._.forEach(data.list, (o) => {
        // todo remove [if]after new api
        // if (o.parent_id !== 0) {
        o.texture2 = o.texture
        o.texture2Alias = o.texture_alias
        const father = this.goodtextures1Map.get(o.parent_id)
        // todo remove after new api
        if (father) {
          o.texture = father.texture
          o.texture_alias = father.texture_alias
        }
        // }
      })
      this.goodtexturesData = data.list
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
      this.$confirm('是否删除?', '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          delGoodtexture(id)
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
      this.getList({ ...this.goodtextureForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.goodtextureForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
.app-container {

}
</style>
