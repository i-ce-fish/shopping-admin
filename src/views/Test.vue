<template>
  <div>
    <!--    <el-table-->
    <!--        :data="tableData"-->
    <!--        :span-method="arraySpanMethod"-->
    <!--        border-->
    <!--        style="width: 100%">-->
    <!--      <el-table-column-->
    <!--          prop="id"-->
    <!--          label="ID"-->
    <!--          width="180">-->
    <!--      </el-table-column>-->
    <!--      <el-table-column-->
    <!--          prop="name"-->
    <!--          label="姓名">-->
    <!--      </el-table-column>-->
    <!--      <el-table-column-->
    <!--          prop="amount1"-->
    <!--          sortable-->
    <!--          label="数值 1">-->
    <!--      </el-table-column>-->
    <!--      <el-table-column-->
    <!--          prop="amount2"-->
    <!--          sortable-->
    <!--          label="数值 2">-->
    <!--      </el-table-column>-->
    <!--      <el-table-column-->
    <!--          prop="amount3"-->
    <!--          sortable-->
    <!--          label="数值 3">-->
    <!--      </el-table-column>-->
    <!--    </el-table>-->

    <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px">

      <el-table-column
          prop="amount1"
          label="数值 1（元）">
      </el-table-column>
      <el-table-column
          prop="amount2"
          label="数值 2（元）">
      </el-table-column>
      <el-table-column
          prop="amount3"
          label="数值 3（元）">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '12987122',
        amount1: '大类1',
        amount2: '小类1',
        amount3: '品类1'
      }, {
        id: '12987122',
        amount1: '大类1',
        amount2: '小类1',
        amount3: '品类2'
      }, {
        id: '12987124',
        amount1: '大类1',
        amount2: '小类2',
        amount3: '品类1'
      }, {
        id: '12987125',
        amount1: '大类1',
        amount2: '小类2',
        amount3: '品类2'
      }, {
        id: '12987126',
        amount1: '大类1',
        amount2: '小类2',
        amount3: '品类3'
      }, {
        id: '12987126111',
        amount1: '大类2',
        amount2: '小类1',
        amount3: '品类1'
      }, {
        id: '12987126222',
        amount1: '大类',
        amount2: '小类',
        amount3: '品类'
      }, {
        id: '12987126333',
        amount1: '大类',
        amount2: '小类',
        amount3: '品类'
      }, {
        id: '12987126444',
        amount1: '大类',
        amount2: '小类',
        amount3: '品类'
      }]
    }
  },
  methods: {
    // arraySpanMethod({
    //   row, column, rowIndex, columnIndex
    // }) {
    //   if (rowIndex % 2 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2]
    //     } if (columnIndex === 1) {
    //       return [0, 0]
    //     }
    //   }
    // },

    objectSpanMethod({
      row, column, rowIndex, columnIndex
    }) {
      // console.log(row)
      // console.log(column)
      // console.log(rowIndex)
      // console.log(columnIndex)

      console.log(rowIndex === 0 && columnIndex === 0)
      if (rowIndex === 0 && columnIndex === 0) {
        console.log(rowIndex)
        // console.log(columnIndex)
        return {
          rowspan: 2,
          colspan: 1
        }
      }

      // if (columnIndex === 1 && rowIndex === 0) {
      //   return { rowspan: 3, colspan: 1 }
      // }

      // return {
      //   rowspan: 1,
      //   colspan: 1
      // }
    }
  }
}
</script>
