<template>
  <el-table
      :class="tableClass"
      :data="tableData"
      border
      row-key="id"
      align="left"
  >
    <el-table-column
        v-for="(item, index) in header"
        :key="index"
        :prop="header[index].prop"
        :label="item.label"
        :min-width="item.width"
    >
    </el-table-column>
    <el-table-column label="操作" width="100px" fixed="right">
      <template slot-scope="{row}">
        <el-button type="text" size="small" @click="edit(row.id)">修改</el-button>
        <el-button type="text" size="small" @click="del(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import Sortable from 'sortablejs'

export default {
  props: {
    header: {
      type: Array,
      required: true,
      validator: (val) => {
        // 判断对象数组是否每个对象都包含了prop和label
        let total = 0
        val.forEach((o) => {
          // eslint-disable-next-line no-prototype-builtins
          if (!o.hasOwnProperty('prop') || !o.hasOwnProperty('label')) {
            total += 1
          }
        })
        return total === 0
      }
    },
    tableData: {
      type: Array,
      required: true
    },
    // 同一页有多个表格时候需要
    tableClass: {
      type: String,
      default: 'table-class',
      required: false
    }
  },
  data() {
    return {

      // header: [
      //   {
      //     id: '1',
      //     label: '值',
      //     prop: 'dataKey',
      //     width: '100px'
      //   },
      //   {
      //     id: '2',
      //     label: '值',
      //     prop: 'dataValue',
      //     width: '200px'
      //
      //   }
      // ],
      // tableData: [{
      //   dataKey: '键1',
      //   dataValue: '值1',
      //   prop1: '属性1-1',
      //   prop2: '属性1-2',
      //   prop3: '属性1-3',
      //   id: '1'
      // }, {
      //   dataKey: '键2',
      //   dataValue: '值2',
      //   prop1: '属性2-1',
      //   prop2: '属性2-2',
      //   prop3: '属性2-3',
      //   id: '2'
      // }]
    }
  },
  mounted() {
    this.initDragable()
  },
  methods: {
    initDragable() {
      this.$nextTick(
        () => {
          this.columnDrop()
          this.rowDrop()
        }
      )
    },

    // 行拖拽
    rowDrop() {
      const tbody = document.querySelector(`.${this.tableClass} .el-table__body-wrapper tbody`)
      const _this = this
      Sortable.create(tbody, {
        animation: 180,
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    },
    // 列拖拽
    columnDrop() {
      const wrapperTr = document.querySelector(`.${this.tableClass} .el-table__header-wrapper tr`)
      const _this = this
      Sortable.create(wrapperTr, {
        animation: 200,
        delay: 0,
        onEnd: ({ newIndex, oldIndex }) => {
          const oldItem = _this.header[oldIndex]
          _this.header.splice(oldIndex, 1)
          _this.header.splice(newIndex, 0, oldItem)
        }
      })
    },

    edit(id) {
      this.$emit('edit', id)
    },
    del(id) {
      this.$emit('del', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
}
</style>
