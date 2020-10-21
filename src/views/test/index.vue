<template>
  <div class="app-container">
    <el-card>
      <y-form
          ref="testForm"
          :model="testForm"
          label-width="80px"
      >

        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加测试模板</el-button>

        </el-row>
      </y-form>
    </el-card>
    <!--    <y-table-->
    <!--        :data="testData"-->
    <!--        :pagination="pagination"-->
    <!--        @sortBy="sortBy"-->
    <!--        @changePage4List="getList"-->
    <!--        class="y-p-t-20"-->
    <!--    >-->
    <!--      <template>-->

    <!--        <el-table-column-->
    <!--            prop="id"-->
    <!--            label="id"-->
    <!--            align="center"-->

    <!--        >-->

    <!--        </el-table-column>-->

    <!--        <el-table-column-->
    <!--            prop="description"-->
    <!--            label="description"-->
    <!--            align="center"-->

    <!--        >-->

    <!--        </el-table-column>-->

    <!--        <el-table-column-->
    <!--            prop="display_name"-->
    <!--            label="display_name"-->
    <!--            align="center"-->

    <!--        >-->

    <!--        </el-table-column>-->

    <!--        <el-table-column label="操作" width="100px" align="center">-->
    <!--          <template slot-scope="{row}">-->
    <!--            <el-button type="text" size="small" @click="edit(row.id)">修改</el-button>-->
    <!--            <el-divider direction="vertical"></el-divider>-->
    <!--            <el-button type="text" size="small" @click="del(row.id)">删除</el-button>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--      </template>-->
    <!--    </y-table>-->
    <el-button>--</el-button>
    {{col}}
    <el-table
        :data="tableData"
        border
        width="100%"
        row-key="id"
        align="left"
    >
      <el-table-column
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="dropCol[index].prop"
          :label="item.label">
      </el-table-column>
      <el-table-column label="操作" min-width="100"  fixed="right">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">修改
          </el-button>
          <el-popover placement="top" v-model="scope.row.visible">
            <p>确定要删除当前内容？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" plain @click="scope.row.visible = false">取消</el-button>
              <el-button
                  type="primary"
                  size="mini"
                  @click="handleDelete(scope.$index, scope.row), scope.row.visible = false">确定
              </el-button>
            </div>
            <el-button
                size="mini"
                type="danger"
                slot="reference">删除
            </el-button>
          </el-popover>

          <el-button
              size="mini"
              type="primary"
              @click="handleDefault(scope.$index, scope.row)"
              v-show="scope.row.defaultValue === 0">默认
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleDefault(scope.$index, scope.row)"
              v-show="scope.row.defaultValue === 1">取消
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getTests, delTest } from '@/api/test'
import { getGoodsizes, delGoodsize } from '@/api/goodsize'
import Sortable from 'sortablejs'

export default {
  data() {
    return {
      col: [
        {
          label: '值',
          prop: 'dataKey'
        },
        {
          label: '显示名',
          prop: 'dataValue'
        }
      ],
      dropCol: [
        {
          label: '值',
          prop: 'dataKey',
          id: '1'
        },
        {
          label: '显示名',
          prop: 'dataValue',
          id: '2'
        }
      ],
      tableData: [{
        dataKey: '123',
        dataValue: '5456411111111',
        id: '1'
      }, {
        dataKey: '22222222222222',
        dataValue: '5456422222222222222',
        id: '2'
      }],
      testForm: {},
      testData: [],
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
    // 行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    // 列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector('.el-table__header-wrapper tr')
      this.sortable = Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const oldItem = this.dropCol[evt.oldIndex]
          this.dropCol.splice(evt.oldIndex, 1)
          this.dropCol.splice(evt.newIndex, 0, oldItem)
        }
      })
    },
    async getList(param) {
      const res = await getGoodsizes(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      console.log(res)
      this.testData = res.data.list
      // this.pagination.total = parseInt(response.data.pagination.total, 10)
      this.pagination.total = res.data.pagination.total
      this.$nextTick(() => {
        this.rowDrop()
        this.columnDrop()
      })
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
          delTest(id)
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
      this.getList({ ...this.testForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.testForm = {}
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
.app-container {
  padding: 20px;

  .no-margin {
    margin: 0;
  }
}
</style>
