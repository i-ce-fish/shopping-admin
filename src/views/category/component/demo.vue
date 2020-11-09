<template>
  <el-row :gutter="10" type="flex" class="tag-category">
    <el-col :span="8">
      <div>
        <el-tag effect="plain" type="info">大类
        </el-tag>
      </div>
      <div>
        <el-tag effect="light" type="info">
          {{Large_Category}}
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
          {{Small_Category}}
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
          {{Specific_Category}}
        </el-tag>
        <el-tag style="width: 50px;" effect="light" type="info">
          {{Category_Code}}
        </el-tag>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    // 大类
    Large_Category: {
      type: String,
      required: true
    },
    // 小类
    Small_Category: {
      type: String,
      default: null,
      required: true
    },
    // 品类
    Specific_Category: {
      type: String,
      default: null,
      required: true
    },

    // 品类代码
    Category_Code: {
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
