<template>
  <div class="app-container">
    <el-card >
      <y-form
          ref="categoryForm"
          :model="categoryForm"
          label-wvalueth="80px"
      >
        <el-row>

          <el-col :span="12">
            <el-row :gutter="10" type="flex">
              <y-select
                  v-model="categoryForm.label"
              />
              <el-col>
                <el-form-item label="" label-width="0" prop="label">
                  <y-input placeholder="请输入"></y-input>
                </el-form-item>
              </el-col>
              <el-col>
                <el-button type="primary" @click="onSearch">查询</el-button>
                <el-button @click="reset" class="y-mr-l-10">重置</el-button>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="12">

            <el-alert>小贴士: 本店的商品分类分为三级。举例:</el-alert>
            <div class="y-m-t-10">

              <categoryDemo lCategory="裤子" sCategory="牛仔裤" xs-category="牛仔长裤" xs-code="66"></categoryDemo>

            </div>
          </el-col>
        </el-row>
      </y-form>
    </el-card>

    <div class="y-p-t-20">
      <el-card
          class="bigCategory"

      >
        <el-collapse v-model="collapse1">

          <el-collapse-item :name="1">
            <div slot="title" class="y-flex y-align-between y-col-24">
              <div class="y-font-16 y-font-blod">商品大类</div>
              <div>已选择大类1</div>
            </div>

            <el-checkbox
                v-model="o.selected"
                :label="o.label"
                v-for="(o,i) in bigCategory"
                :key="o+i"
                true-label="1"
                false-label="0"
                border
            >
            </el-checkbox>

            <el-row type="flex" justify="end">
              <el-button type="primary">修改大类</el-button>
              <el-button type="danger">选定删除</el-button>
              <el-button type="success">新增大类</el-button>
            </el-row>
          </el-collapse-item>
        </el-collapse>
        <el-collapse v-model="collapse2">

          <el-card
              v-for="(bigCategory1,i1) in selectedBigCategory"
              :key="i1"
              class="smallCategory"
          >

            <el-collapse-item

                :name="bigCategory1.id"
            >

              <div slot="title" class="y-flex y-align-between y-col-24">
                <div class="y-font-14 y-font-blod">商品小类</div>
                <div>已选择小类</div>
              </div>
              <el-checkbox
                  v-for="(smallCategory,i2) in bigCategory1.children"
                  :key="i2"
                  v-model="smallCategory.selected"
                  :label="smallCategory.label"
                  true-label="1"
                  false-label="0"
                  border
                  @change="onChange1"
              >
              </el-checkbox>
              <el-row type="flex" justify="end">
                <el-button type="primary">修改大类</el-button>
                <el-button type="danger">选定删除</el-button>
                <el-button type="success">新增大类</el-button>
              </el-row>
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
                    :key="i2"
                    class="XSCategory"
                >
                  <el-collapse v-model="collapse3[i1]">
                    <el-collapse-item :name="i2">
                      <div slot="title" class="y-flex y-align-between y-col-24">
                        <div class="y-font-14 y-font-blod">商品品类</div>
                      </div>
                      <el-checkbox
                          v-for="(XSCategory,i3) in smallCategory.children"
                          :key="i3"
                          v-model="XSCategory.selected"
                          :label="XSCategory.label"
                          true-label="1"
                          false-label="0"
                          border
                          @change="onChange2(bigCategory1.id)"
                      ></el-checkbox>
                      <el-row type="flex" justify="end">
                        <el-button type="primary">修改大类</el-button>
                        <el-button type="danger">选定删除</el-button>
                        <el-button type="success">新增大类</el-button>
                      </el-row>
                    </el-collapse-item>
                  </el-collapse>

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
import categoryDemo from '@/views/category/component/demo'

export default {
  components: { categoryDemo },
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
      collapse2: [0, 1, 2],
      // 控制品类折叠
      collapse3: []
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
      this._.forEach(this.bigCategory, (o, i) => {
        this.collapse2.push(o.id)

        // 将大类中的小类的品类折叠设置成默认展开; eg:[[1,2,3],[1,2]]
        this._.forEach(o.children, (o2) => {
          const { length } = o2.children
          // 数组索引赋值不是响应式的, 要手动更新
          this.$set(this.collapse3, i, [...new Array(length).keys()])
        })
      })
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
  // 清除element组件默认的样式
  /deep/ .el-collapse-item__header,
  /deep/ .el-collapse-item__wrap,
  /deep/ .el-collapse {
    background-color: transparent;
    border: 0;
  }

  // 文字颜色
  /deep/ .el-checkbox__label {
    color: #606266;
  }

  // 大类
  .bigCategory {
    // el-card的20px背景色
    /deep/ .el-card__body {
      background-color: #dfeefe
    }

    /deep/ .el-collapse {
      background-color: #dfeefe
    }

    //  未激活的边框颜色
    /deep/ .el-checkbox.is-bordered {
      border-color: #298DF833;
    }

    // 激活后的背景颜色
    /deep/ .el-checkbox.is-bordered.is-checked {
      background-color: #298DF833
    }

    // 文字颜色
    /deep/ .el-checkbox__label {
      color: #606266;
    }

  }

  .smallCategory {
    /deep/ .el-card__body {
      background-color: #FFE1DD
    }

    /deep/ .el-collapse {
      background-color: #FFE1DD
    }

    //  未激活的边框颜色
    /deep/ .el-checkbox.is-bordered {
      border-color: #EF706033;
    }

    // 激活后的背景颜色
    /deep/ .el-checkbox.is-bordered.is-checked {
      background-color: #EF706033
    }

    // 勾选框的边框颜色
    /deep/ .el-checkbox__inner {
      border-color: #EF7060;
    }

    // 激活后的勾选框的背景颜色
    /deep/ .is-checked .el-checkbox__inner {
      background-color: #EF7060;
    }

  }

  .XSCategory {
    /deep/ .el-card__body {
      background-color: #D6E1D0
    }

    /deep/ .el-collapse {
      background-color: #D6E1D0

    }

    //  未激活的边框颜色
    /deep/ .el-checkbox.is-bordered {
      border-color: #badaaa;
    }

    // 激活后的背景颜色
    /deep/ .el-checkbox.is-bordered.is-checked {
      background-color: #badaaa
    }

    // 勾选框的边框颜色
    /deep/ .el-checkbox__inner {
      border-color: #66C23940;
    }

    // 激活后的勾选框的背景颜色
    /deep/ .is-checked .el-checkbox__inner {
      background-color: #66c239;
    }

  }
}
</style>
