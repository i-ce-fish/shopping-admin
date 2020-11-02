<template>
  <y-tooltip :tips="tips">
    <el-select
        v-model="result"
        :placeholder="placeholder"
        v-bind="$attrs"
        v-on="$listeners"
    >
      <el-option
          v-for="item in innerOptions"
          :key="item.value"
          :label="labelName?item[labelName]:item.label"
          :value="valueName?item[valueName]:item.value"
          :disabled="item.disabled"
      />
    </el-select>
  </y-tooltip>
</template>
<script>
import request from '@/utils/request'

export default {
  components: {},
  props: {
    // 接口地址
    api: String,
    // 严格区分类型
    value: {
      required: true
    },
    // api 数据格式与组件数据格式转换
    valueName: {
      String,
      default: 'value'
    },
    labelName: {
      String,
      default: 'label'
    },
    config: Object,
    // 初始化数据
    options: {
      type: [Array, Object],
      default: () => [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 输入提示
    tips: {
      type: String,
      default: ''
    }

  },
  data() {
    return {
      // ajax数据滞后，要加非空判断
      result: this.value,
      // 作为内部数据使用
      innerOptions: this.options
    }
  },
  computed: {},
  watch: {
    value(val) {
      // 搜索表单重置后为空，要有非空判断
      this.result = val
    },
    options(val) {
      this.innerOptions = val
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    async initData() {
      if (this.api) {
        const res = await request({
          url: this.api,
          method: 'get'
        })
        // todo 未测试
        this.innerOptions = res.data.list
        //     .map((item) => ({
        //   label: item[this.labelName],
        //   value: item[this.valueName]?.toString()
        // }))
      }
    }

  }
}
</script>

<style scoped lang="scss">

</style>
