<template>
  <div class="app-container">
    <el-card>
      <y-form
          ref="categoryForm"
          :model="categoryForm"
          label-wvalueth="80px"
      >
        <el-col :span="6">
          <el-form-item label="大类:" prop="label">
            <y-input
                v-model="categoryForm.label"
            />
          </el-form-item>
        </el-col>
        <el-row type="flex" align="space-between">
          <el-col>
            <el-button type="primary" @click="onSearch">查询</el-button>
            <el-button @click="reset" class="y-mr-l-10">重置</el-button>
          </el-col>
          <el-button type="success" @click="add">添加测试模板</el-button>

        </el-row>
      </y-form>
    </el-card>

    <div>
      <el-card>
        <el-collapse v-model="collapse1">

          <el-collapse-item :name="1">

            <el-checkbox
                v-model="o.selected"
                :label="o.label"
                v-for="(o,i) in bigCategory"
                :key="o+i"
                true-label="1"
                false-label="0"
            >
            </el-checkbox>
          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="collapse2">

          <el-card
              v-for="(bigCategory1,i1) in selectedBigCategory"
              :key="i1">

            <el-collapse-item

                :name="bigCategory1.id"
                :title="bigCategory1.label"
            >
              <el-checkbox
                  v-for="(smallCategory,i2) in bigCategory1.children"
                  :key="i2"
                  v-model="smallCategory.selected"
                  :label="smallCategory.label"
                  true-label="1"
                  false-label="0"
                  @change="onChange1"
              >
              </el-checkbox>

            </el-collapse-item>

            <!--       :key="i1+o1.id" =>  fix  key 重复-->
            <div
                v-for="(bigCategory2,i1) in selectedSmallCategory"
                :key="i1+bigCategory2.id"
            >
              <!-- todo 用id做判断-->
              <div v-if="bigCategory1.label===bigCategory2.label">
                <el-card
                    v-for="(smallCategory,i2) in bigCategory2.children"
                    :key="i2">
                  <el-checkbox
                      v-for="(category,i3) in smallCategory.children"
                      :key="i3"
                      v-model="category.selected"
                      :label="category.label"
                      true-label="1"
                      false-label="0"
                      @change="onChange2(bigCategory1.id)"
                  >
                  </el-checkbox>
                </el-card>
              </div>

            </div>
          </el-card>

        </el-collapse>

      </el-card>

    </div>

  </div>
</template>
<script>
import { getCategories, delCategory } from '@/api/category'

export default {
  components: {},
  data() {
    return {

      categoryForm: {},

      pagination: {
        pageNumber: 1,
        pageSize: 10
      },

      bigCategory: [{
        label: '大类1',
        id: '1',
        children: [{
          label: '小类1',
          id: '1',
          parent_id: '1',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }, {
          label: '小类2',
          id: '2',
          parent_id: '1',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }, {
          label: '小类3',
          id: '3',
          parent_id: '1',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }]
      }, {
        label: '大类2',
        id: '2',
        children: [{
          label: '小类1',
          id: '4',
          parent_id: '2',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }, {
          label: '小类2',
          id: '5',
          parent_id: '2',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }, {
          label: '小类3',
          id: '6',
          parent_id: '2',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }]
      }, {
        label: '大类3',
        id: '3',
        children: [{
          label: '小类1',
          id: '4',
          parent_id: '3',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }, {
          label: '小类2',
          id: '5',
          parent_id: '3',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }, {
            label: '品类3',
            id: '3',
            parent_id: '1'
          }]
        }, {
          label: '小类3',
          id: '6',
          parent_id: '3',
          children: [{
            label: '品类1',
            id: '1',
            parent_id: '1'
          }, {
            label: '品类2',
            id: '2',
            parent_id: '1'
          }]
        }]
      }],
      selectedBigCategory: [],
      selectedSmallCategory: [],
      // 控制大类折叠
      collapse1: [1],
      // 控制小类折叠 , 循环组件的索引是数字类型
      collapse2: [0, 1, 2]
    }
  },
  created() {
    this.getList()
    this.initCollData()
  },
  watch: {

    // 侦听勾选的选项
    bigCategory: {
      handler(val, oldVal) {
        // 设置已选中的大类, 过滤selected==='1'
        this.selectedBigCategory = this._.filter(this.bigCategory, (o) => o.selected === '1')

        // 深拷贝, 否则会循环监听bigCategory, 后续会修改o.children
        this.selectedSmallCategory = JSON.parse(JSON.stringify(this.selectedBigCategory))

        // 设置已勾选的小类, 过滤selected==='1'
        this._.forEach(this.selectedSmallCategory, (o) => {
          o.children = this._.filter(o.children, (o1) => o1.selected === '1')
        })
      },
      deep: true
    }
  },
  methods: {
    async getList(param) {
      const response = await getCategories(
        {
          ...param,
          page: this.pagination.pageNumber,
          pagesize: this.pagination.pageSize
        }
      )
      this.categoriesData = response.data.list
      this.pagination.total = response.data.pagination.total
    },

    add() {
      this.$router.push({ path: 'add' })
    },
    edit(value) {
      this.$router.push({
        path: 'edit',
        query: { value }
      })
    },
    del(value) {
      this.$confirm('是否删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          delCategory(value)
            .then((response) => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getList()
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    onSearch(sort) {
      this.getList({ ...this.categoryForm, ...sort })
    },
    sortBy(e) {
      this.onSearch(e)
    },
    reset() {
      this.categoryForm = {}
      this.getList()
    },
    initCollData() {
      this._.forEach(this.bigCategory, (o) => {
        this.collapse2.push(o.id)
      })
      // this.collapse2 = [...new Array(this.bigCategory.length).keys()]
    },
    // 折叠大类
    onChange1(e) {
      this.collapse1 = ''
    },
    // 折叠当前品类的父级小类
    onChange2(fatherId) {
      const idx = this.collapse2.indexOf(fatherId)
      if (idx > -1) {
        this.collapse2.splice(idx, 1)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.app-container {

}
</style>
