<!--   将整个form分离, 便于其他位置复用-->
<template>
  <y-form
      ref="categoryForm"
      :model="categoryForm"
      :rules="categoryRules"
      label-width="100px"
  >
    <el-row>

      <el-col :span="12">
        <el-form-item label="大类:" prop="" class="el-form-item">

          <y-select-input

              v-model="categoryForm.value56465"
              :multiple="false"
              tips="请输入或选择大类"
          />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="小类:" prop="">

          <y-select-input

              v-model="categoryForm.value5754"
              :multiple="false"
              tips="请输入或选择小类"
          />

        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="品类名:" prop="name">

          <y-input

              v-model="categoryForm.name"
          />
        </el-form-item>
      </el-col>

      <el-col :span="12">
        <el-form-item label="品类别名:" prop="sort">

          <y-input

              v-model="categoryForm.sort"
          />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="品类编码:" prop="sort">

          <y-input

              v-model="categoryForm.sort"
              tips="请输入输入两位数字"
          />
        </el-form-item>
      </el-col>

      <!--          <el-col :span="12">-->
      <!--            <el-form-item label="父ID:" prop="parent_id">-->

      <!--              <y-select-->

      <!--                v-model="categoryForm.parent_id"-->

      <!--                api="/api/categories"-->

      <!--                labelName="catalog_name"-->
      <!--                valueName="id"-->

      <!--              />-->
      <!--            </el-form-item>-->
      <!--          </el-col>-->

    </el-row>
  </y-form>
</template>
<script>
import { addCategory } from '../../api/category'

export default {

  data() {
    return {
      categoryForm: { big: [] },
      categoryRules: {

        name: [

          {
            required: true,
            message: '请输入类别名',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的类别名',
            trigger: 'blur'
          }

        ]

      },

      parent_idOptions: [],

      bigCategory: false,
      bigCategoryForm: false
    }
  },
  created() {
  },
  methods: {
    async addCategory() {
      await addCategory(this.categoryForm)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit(callback) {
      this.$refs.categoryForm.check((valid) => {
        if (valid) {
          this.addCategory()
          callback()
        }
      })
    }

  }
}

</script>

<style lang="scss" scoped>
// 修改ele默认样式
/deep/ .el-form-item {
  margin-bottom: 22px
}

</style>
