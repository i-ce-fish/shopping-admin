<template>
  <div>

    {{dropCol}}
    <div>{{otherDropCol}}</div>
    从下列表头中拖拽进表格
    <el-table class="other-table" row-key="id">

    <el-table-column
        v-for="(item, index) in otherDropCol"
        :key="`col_${index}`"
        :prop="otherDropCol[index].prop"
        :label="item.label"
    >
    </el-table-column>
    </el-table>

    <el-table
        class="main-table"
        :data="tableData"
        border
        width="100%"
        row-key="id"
        align="left"
        :key="tableKey"
    >
      <el-table-column
          v-for="(item, index) in col"
          :key="`col_${index}`"
          :prop="dropCol[index].prop"
          :label="item.label"
          column-key="id"
      >
        <div slot="header">{{item.label}}/{{index}}</div>
      </el-table-column>
<!--      <el-table-column label="操作" min-width="100" fixed="right">-->
<!--        <template slot-scope="{row}">-->
<!--          <el-button-->
<!--              size="mini"-->
<!--              @click="edit(row)">修改-->
<!--          </el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>
<script>
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
          label: '值',
          prop: 'dataValue',
          id: '2'
        }
      ],
      otherDropCol: [{
        label: '属性1',
        prop: 'prop1',
        id: '3'
      }, {
        label: '属性2',
        prop: 'prop2',
        id: '4'
      }, {
        label: '属性3',
        prop: 'prop3',
        id: '5'
      }],

      tableData: [{
        dataKey: '键1',
        dataValue: '值1',
        prop1: '属性1-1',
        prop2: '属性1-2',
        prop3: '属性1-3',
        id: '1'
      }, {
        dataKey: '键2',
        dataValue: '值2',
        prop1: '属性2-1',
        prop2: '属性2-2',
        prop3: '属性2-3',
        id: '2'
      }],
      tableKey: 0
    }
  },
  created() {
    this.initDragable()
  },
  methods: {
    // 行拖拽
    rowDrop() {
      const tbody = document.querySelector('.main-table .el-table__body-wrapper tbody')
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
      const wrapperTr = document.querySelector('.main-table .el-table__header-wrapper tr')
      const _this = this
      Sortable.create(wrapperTr, {
        group: { name: 'column' },
        animation: 200,
        delay: 0,
        onEnd: (evt) => {
          console.log('col end')
          const oldItem = _this.dropCol[evt.oldIndex]
          _this.dropCol.splice(evt.oldIndex, 1)
          _this.dropCol.splice(evt.newIndex, 0, oldItem)

          _this.col.splice(evt.oldIndex, 1)
          _this.col.splice(evt.newIndex, 0, oldItem)
        },
        // 元素从一个列表拖拽到另一个列表
        onAdd(/** Event*/evt) {
          console.log('col add')
          const oldItem = _this.otherDropCol[evt.oldIndex]
          // 插入到表头中指定的位置
          _this.dropCol.splice(evt.newIndex, 0, oldItem)
          // 核心代码 :   修复表头会无法正常显示
          _this.col.push(oldItem)
        },
        onRemove(evt) {
          console.log('col remove')
          _this.dropCol.splice(evt.oldIndex, 1)
          // _this.col.splice(evt.oldIndex, 1)
        }
      })
    },
    // 可选列拖拽  todo 不可实现 意外的bug过多, 只能通过勾选框
    otherDrop() {
      const el = document.querySelector('.other-table .el-table__header-wrapper tr')
      // const el = document.querySelector('.other-col ')
      Sortable.create(el, {
        group: { name: 'column' },
        animation: 200,
        delay: 0,
        onEnd: (evt) => {
          console.log('other end')
          // console.log(evt)
          // const oldItem = this.dropCol[evt.oldIndex]
          // this.dropCol.splice(evt.oldIndex, 1)
          // this.dropCol.splice(evt.newIndex, 0, oldItem)

          // const oldItem = this.otherDropCol[evt.oldIndex]
          // this.dropCol.push(oldItem)
          // this.col.push(oldItem)
        },
        onAdd: (evt) => {
          console.log('other add')
        }
      })
    },

    initDragable() {
      this.$nextTick(
        () => {
          this.columnDrop()
          this.rowDrop()
          this.otherDrop()
        }
      )
    },
    edit(obj1, obj2) {
      console.log(obj1)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
}
</style>
