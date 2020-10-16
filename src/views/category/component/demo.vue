<template>
  <el-row :gutter="10" type="flex" class="tag-category">
    <el-col :span="8">
      <div>
        <el-tag
            effect="plain"
            type="info"
            color="">大类
        </el-tag>
      </div>
      <div>
        <el-tag effect="light" type="info">
          {{lCategory}}
        </el-tag>
      </div>
    </el-col>
    <el-col :span="8">
      <div>
        <el-tag effect="plain" type="info">
          小类
        </el-tag>
      </div>
      <div>
        <el-tag effect="light" type="info">
          {{sCategory}}
        </el-tag>
      </div>
    </el-col>
    <el-col :span="8">
      <div>
        <el-tag effect="plain" type="info">
          品类
        </el-tag>
        <el-tag style="width: 50px;" effect="plain" type="info">
          代码
        </el-tag>
      </div>
      <div>
        <el-tag effect="light" type="info">
          {{xsCategory}}
        </el-tag>
        <el-tag style="width: 50px;" effect="light" type="info">
          {{xsCode}}
        </el-tag>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    // 大类
    lCategory: {
      type: String,
      required: true
    },
    // 小类
    sCategory: {
      type: String,
      default: null,
      required: true
    },
    // 品类
    xsCategory: {
      type: String,
      default: null,
      required: true
    },

    // 品类代码
    xsCode: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .tag-category {
    line-height: 1;

    .el-tag--plain.el-tag--info, .el-tag.el-tag--info {
      width: 100px;
      text-align: center;
      color: #606266
    }
  }
</style>
