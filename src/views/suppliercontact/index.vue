<template>
  <div class="app-container">
    <el-card>
      <y-form
          ref="suppliercontactForm"
          :model="suppliercontactForm"
          label-width="80px"
      >

        <el-row>

          <el-col :span="6">
            <el-form-item label="老板手机:" prop="phone">

              <y-input

                  v-model="suppliercontactForm.phone"

              />
            </el-form-item>
          </el-col>

        </el-row>

        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加供货商通讯录</el-button>

        </el-row>
      </y-form>
    </el-card>
    <y-table
        :data="suppliercontactsData"
        :pagination="pagination"
        @sortBy="sortBy"
        @changePage4List="getList"
        class="y-p-t-20"
    >
      <template>

        <el-table-column
prop="phone"
                         label="老板手机"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="wechat"
                         label="老板微信"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="wechat_alias"
                         label="微信昵称"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="name"
                         label="老板姓名"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="agent_phone"
                         label="接待人手机"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="agent_name"
                         label="接待人姓名"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="agent_wechat"
                         label="接待人微信"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="agent_alias"
                         label="接待人微信昵称"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="company"
                         label="单位名称"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="supplier_code"
                         label="供货商编码"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="province"
                         label="所在省"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="city"
                         label="所在市"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="district"
                         label="所在区"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="market"
                         label="所在市场"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="address"
                         label="详细地址"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="photo"
                         label="随手拍"
                         align="center"

        >

        </el-table-column>

        <el-table-column
prop="memo"
                         label="备注"
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
import { getSuppliercontacts, delSuppliercontact } from '@/api/suppliercontact'

export default {
  data() {
    return {
      suppliercontactForm: {},
      suppliercontactsData: [],
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
      const { data } = await getSuppliercontacts(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this.suppliercontactsData = data.list
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
          delSuppliercontact(id)
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
      this.getList({ ...this.suppliercontactForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.suppliercontactForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
.app-container {

}
</style>
