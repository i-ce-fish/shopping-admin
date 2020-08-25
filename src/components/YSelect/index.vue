<template>
  <y-tooltip :tips="tips" >

  <el-select
      v-model="result"
      :placeholder="placeholder"
      :disabled="disabled"
      @change="change"
      :size="size"
      :name="name"
      :id="id"
      :autocomplete="autocomplete"
      :automatic-dropdown="automaticDropdown"
      :clearable="clearable"
      :filterable="filterable"
      :allow-create="allowCreate"
      :loading="loading"
      :popper-class="popperClass"
      :remote="remote"
      :loading-text="loadingText"
      :no-match-text="noMatchText"
      :no-data-text="noDataText"
      :remote-method="remoteMethod"
      :filter-method="filterMethod"
      :multiple="multiple"
      :multiple-limit="multipleLimit"
      :default-first-option="defaultFirstOption"
      :reserve-keyword="reserveKeyword"
      :value-key="valueKey"
      :collapse-tags="collapseTags"
      :popper-append-to-body="popperAppendToBody"
    >
      <el-option
        v-for="item in innerOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"/>
    </el-select>
  </y-tooltip>
</template>
<script>
import request from "@/utils/request"

export default {
  components: {},
  props: {
    // 接口地址
    api: String,
    disabled: {
      type: Boolean,
      default: false
    },
    // 数字类型的value有bug，导致选中后label不显示
    value: {
      String,
      required: true
    },
    // api 数据格式与组件数据格式转换
    valueName: {
      String,
      default: "value"
    },
    labelName: {
      String,
      default: "label"
    },
    config: Object,
    // 初始化数据
    options: {
      type: Array,
      default: () => [{
        value: "选项1",
        label: "黄金糕"
      }, {
        value: "选项2",
        label: "双皮奶"
      }, {
        value: "选项3",
        label: "蚵仔煎"
      }, {
        value: "选项4",
        label: "龙须面"
      }, {
        value: "选项5",
        label: "北京烤鸭"
      }]
    },
    size: {
      type: String,
      default: "small",
      required: false
    },

    name: String,
    id: String,

    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    // 输入提示
    tips: {
      type: String,
      default: ""
    }

  },
  data() {
    return {
      // ajax数据滞后，要加非空判断
      // value 为id 时是Number类型
      result: this.value?.toString(),
      // 作为内部数据使用
      innerOptions: this.options
    }
  },
  computed: {},
  watch: {
    value(val) {
      // 搜索表单重置后为空，要有非空判断
      // value 为id 时是Number类型
      this.result = val?.toString()
    }
  },
  created() {
  },
  mounted() {
    this.initData()
  },
  methods: {
    change() {
      this.$emit("input", this.result.toString())
    },
    async initData() {
      if (this.api) {
        const res = await request({
          url: this.api,
          method: "get"
        })
        this.innerOptions = res.data.list.map((item) => ({
          label: item[this.labelName],
          value: item[this.valueName]?.toString()
        }))
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
