<template>
  <div class="yTable">
    <!--      :header-row-style="tableHeaderColor"-->
    <el-table
      :data="data"
      style="width: 100%"
      :default-expand-all="defaultExpandAll"
      :size="size"
      :width="width"
      :height="height"
      :max-height="maxHeight"
      :fit="fit"
      :stripe="stripe"
      :border="border"
      :row-key="rowKey"
      :context="context"
      :show-header="showHeader"
      @sort-change="changeSort"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-class-name="cellClassName"
      :cell-style="cellStyle"
      :header-row-class-name="headerRowClassName"
      :header-row-style="headerRowStyle"
      :header-cell-class-name="headerCellClassName"
      :header-cell-style="headerCellStyle"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :empty-text="emptyText"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :span-method="spanMethod"
      :select-on-indeterminate="selectOnIndeterminate"
      :indent="indent"
      :tree-props="treeProps"
      :lazy="lazy"
      :load="load"
    >
      <slot />
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
    pagination: Object,
    // 默认展开树形表格、可展开表格的每一项
    defaultExpandAll: {
      type: Boolean,
      default: false,
      required: false
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function,

    selectOnIndeterminate: {
      type: Boolean,
      default: true
    },

    indent: {
      type: Number,
      default: 16
    },

    treeProps: {
      type: Object,
      default() {
        return {
          hasChildren: 'hasChildren',
          children: 'children'
        }
      }
    },

    lazy: Boolean,

    load: Function

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
