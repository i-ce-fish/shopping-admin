<template>
  <div>
    {{header}}<br/>
    {{dropHeader}}
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
          :prop="dropHeader[index].prop"
          :label="item.label"
          :min-width="item.width"
          :sortable="item.sortable"
          :filters="item.filters_array"
          :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column label="操作" width="100px" fixed="right">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="edit(row.id)">修改</el-button>
          <el-button type="text" size="small" @click="del(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Sortable from 'sortablejs'

export default {
  props: {
    /**
     *  @comment 表头
     *  @type  Array<Object> 对象数组, 每个对象必须包含prop和label属性
     */
    header: {
      type: Array,
      required: true,
      validator: (val) => {
        // 验证<dropHeader>中是否每个对象都包含了prop和label属性, width为可选属性
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
    // 表格数据
    tableData: {
      type: Array,
      required: true
    },
    // 同一页有多个表格时候[可能]需要
    tableClass: {
      type: String,
      default: 'table-class',
      required: false
    }
  },
  data() {
    return {
      // 作为内部变量使用
      dropHeader: JSON.parse(JSON.stringify(this.header))
      // dropHeader: { ...this.header }
    }
  },
  watch: {
    /**
     * <!--用于表头拖动的表头和用于表格展示的表头必须是两个数组, 互相独立-->
     * @param val
     */
    header(val) {
      // 深拷贝 todo fix bug
      this.dropHeader = JSON.parse(JSON.stringify(val))
      // this.dropHeader = { ...val }
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
          const oldItem = _this.dropHeader[oldIndex]
          _this.dropHeader.splice(oldIndex, 1)
          _this.dropHeader.splice(newIndex, 0, oldItem)
          console.log(_this.header === _this.dropHeader)
        }
      })
    },

    edit(id) {
      this.$emit('edit', id)
    },
    del(id) {
      this.$emit('del', id)
    },
    filterHandler(value, row, column) {
      const { property } = column
      return row[property] === value
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
}
</style>
