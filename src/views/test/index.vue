<template>
  <div class="app-container">
    {{checkedList}}
    <el-collapse v-model="collapse">

      <el-collapse-item v-for="(o1,i1) in headerList" :key="i1" :name="i1" :title="'第'+i1+'组'">
        <el-checkbox-group v-model="checkedList">
          <el-checkbox
              v-for="(o2,i2) in o1"
              :key="i2"
              :label="o2"
              :checked="o2.checked"
          >
            {{o2.label}}
          </el-checkbox>
        </el-checkbox-group>
      </el-collapse-item>

    </el-collapse>
    <div>

    </div>
    <drag-table :header="checkedList" :table-data="tableData"></drag-table>
    <!--    <div class="y-m-t-10"></div>-->
    <!--    <el-radio-group v-model="test">-->
    <!--      <el-popover-->
    <!--          placement="top-start"-->
    <!--          width="200"-->
    <!--          trigger="hover">-->
    <!--        <div>-->
    <!--          <el-image-->
    <!--              style="width: 100%; height: 100%"-->
    <!--              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"-->
    <!--              fit="contain"></el-image>-->
    <!--        </div>-->
    <!--        <div slot="reference">-->
    <!--          <el-radio :label="1">无袖</el-radio>-->
    <!--        </div>-->
    <!--      </el-popover>-->
    <!--      <el-popover-->
    <!--          placement="top-start"-->
    <!--          width="200"-->
    <!--          trigger="hover">-->
    <!--        <div>-->
    <!--          <el-image-->
    <!--              style="width: 100%; height: 100%"-->
    <!--              src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"-->
    <!--              fit="contain"></el-image>-->
    <!--        </div>-->
    <!--        <div slot="reference">-->
    <!--          <el-radio :label="2" class="y-p-t-20">有袖</el-radio>-->
    <!--        </div>-->
    <!--      </el-popover>-->
    <!--    </el-radio-group>-->

  </div>
</template>
<script>
import dragTable from '@/components/drag-table'

export default {
  components: {
    dragTable
  },
  data() {
    return {
      test: '',
      // 已勾选
      checkedList: [],
      // 可勾选
      headerList: [
        [{
          label: '键',
          prop: 'dataKey',
          checked: true
        },
        {
          label: '值',
          prop: 'dataValue'

        },
        {
          label: '属性1',
          prop: 'prop1',
          width: '110px'
        }],
        [
          {
            label: '属性2',
            prop: 'prop2',
            width: '250px'

          }], [
          {
            label: '属性3',
            prop: 'prop3',
            width: '200px'

          }]
      ],
      // 表格数据
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

      collapse: []
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
.app-container {

}
</style>
