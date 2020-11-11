<template>
  <div class="yTable">
    <!--      :header-row-style="tableHeaderColor"-->
    <el-table
        style="width: 100%"
        @sort-change="changeSort"
        v-bind="$attrs"
        v-on="$listeners"
    >
      <slot/>
    </el-table>
    <el-pagination
        background
        :layout="pagination.layout"
        :total="pagination.total"
        :page-size="pagination.pageSize"
        :page-sizes="pagination.pageSizes"
        @size-change="changePageSize"
        @current-change="changePage"
    />
  </div>
</template>
<script>
export default {
  props: {
    pagination: Object
    // 默认展开树形表格、可展开表格的每一项
  },
  data() {
    return {}
  },
  created() {
    this.setPaginationDefault()
  },
  methods: {
    changePage(page) {
      this.pagination.pageNumber = page
      this.$emit('changePage4List')
    },
    changePageSize(val) {
      this.pagination.pageSize = val
      this.$emit('changePage4List')
    },
    setPaginationDefault() {
      if (!this.pagination.layout) {
        this.pagination.layout = 'total, prev, pager, next, jumper, sizes'
      }
      if (!this.pagination.pageSizes) {
        this.pagination.pageSizes = [10, 20, 30, 40, 50]
      }
    },
    // tableHeaderColor({
    //   row, column, rowIndex, columnIndex
    // }) {
    //   if (rowIndex === 0) {
    //     return "color: rgb(245, 245,245);font-weight: 300;height:20px"
    //   }
    //   return ""
    // },
    changeSort(e) {
      // e.order 的值 null,ascending,descending
      const map = new Map([
        ['descending', '1'],
        ['ascending', '0']])
      const desc = map.get(e.order)
      const sort = {}
      if (desc) {
        sort.orderby = e.prop
        sort.desc = desc
      }

      this.$emit('sortBy', sort)
    }
  }
}
</script>
<!--<style lang='scss'>-->
<!--  $border: #9bc2db;-->
<!--  .yTable {-->
<!--    padding: 10px 0;-->
<!--    // 设置边框-->
<!--    .el-table&#45;&#45;border:after,-->
<!--    .el-table&#45;&#45;group:after,-->
<!--    .el-table:before {-->
<!--      background-color: $border;-->
<!--    }-->
<!--    .el-table&#45;&#45;border,-->
<!--    .el-table&#45;&#45;group {-->
<!--      border-color: $border;-->
<!--    }-->

<!--    .el-table {-->
<!--      font-size: 12px;-->
<!--      border-color: $border;-->

<!--      td {-->
<!--        padding: 0;-->
<!--        border-color: $border;-->
<!--      }-->

<!--      th {-->
<!--        padding: 4px 0;-->
<!--        border-color: $border;-->
<!--        background-color: #448cbb;-->
<!--      }-->

<!--      .el-button {-->
<!--        color: #448cbb;-->
<!--      }-->
<!--    }-->

<!--    .el-pagination {-->
<!--      padding: 10px 0;-->
<!--    }-->
<!--  }-->
<!--</style>-->
