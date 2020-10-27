<template>
  <div class="app-container">
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

    <drag-table :header="checkedList" :header-temp="checkedList" :table-data="tableData"></drag-table>
    <y-drag-select v-model="value" style="width:500px;" multiple placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </y-drag-select>
  </div>
</template>
<script>
import dragTable from '@/components/drag-table'
import YDragSelect from '@/components/y-drag-select'

export default {
  components: {
    dragTable,
    YDragSelect
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
          checked: true,
          sortable: true,
          filters_array: [{ text: '加法', value: '加法' }, { text: 'aa', value: 'aa' }, { text: 'bb', value: 'bb' }]
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

      collapse: [],

      options: [{
        value: 'Apple',
        label: 'Apple'
      }, {
        value: 'Banana',
        label: 'Banana'
      }, {
        value: 'Orange',
        label: 'Orange'
      }, {
        value: 'Pear',
        label: 'Pear'
      }, {
        value: 'Strawberry',
        label: 'Strawberry'
      }],
      value: []
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
