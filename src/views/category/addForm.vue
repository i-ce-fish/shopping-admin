<template>
  <!--   将整个form分离, 便于其他位置复用-->

  <!--  todo 编码只能输入两位数字-->
  <!--  todo 编码后面显示所有现有编码-->
  <!--  todo 商品添加   辅色系    迁移颜色添加=>单款单色来进行添加(不同颜色的轮播图商品详情也要改变)       -->
  <!--   颜色表   颜色选择组件最大化, tips=注意屏幕设置  和颜色选择器一样大
         根据所选择的颜色生成生成色系(写死 )+生成色系编码 (参加搜索 )       1.颜色选择
           色系(主)    名字(根据色系来提示名字+后需要升级(???))-->
  <!--   图案表 图案名字 图片   -->
  <!--   材质表  材料名  含量  总和100% -->
  <!--   品牌表  只有名字  -->
  <!--   货源管理表 渠道名 联系人 联系电话 地址    -->
  <!--   todo 纵向布局   -->
  <!--  todo 材质功能 字段-->
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
    },
    cfmBigCategory() {
    },
    clsBigCategory() {
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
