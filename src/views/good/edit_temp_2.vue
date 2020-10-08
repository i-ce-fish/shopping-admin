<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>修改good</h3>
      <y-form
        ref="goodForm"
        :model="goodForm"
        :rules="goodRules"
        label-width="100px"
      >
        <el-row>

          <el-col :span="12">
            <el-form-item label="商品名称:" prop="product_name">
              <y-input
                v-model="goodForm.product_name"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="商品编号:" prop="product_sn">

              <y-input

                v-model="goodForm.product_sn"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="款式编号:" prop="type_sn">

              <y-input
                v-model="goodForm.type_sn"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="适合性别:" prop="gender">

              <y-select

                v-model="goodForm.gender"

                :options="[{value: '1',label: '男'},{value: '0',label: '女'}]"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="吊牌价格:" prop="original_price">

              <y-input

                v-model="goodForm.original_price"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="优惠价格:" prop="onsale_price">

              <y-input

                v-model="goodForm.onsale_price"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="vip价格:" prop="vip_price">

              <y-input

                v-model="goodForm.vip_price"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="轮播图:" prop="carousels">

              <y-upload-multiple

                v-model="goodForm.carousels"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="页面主图:" prop="main_pic">

              <y-upload-single

                v-model="goodForm.main_pic"
              />
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="产品详情:" prop="detail">

              <y-input

                v-model="goodForm.detail"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="产品参数:" prop="product_parameter">
              <div v-for="(item,index) in goodForm.product_parameter" :key="index" class="">
                <el-row type="flex">
                  <el-col :span="10">
                    <el-row type="flex">
                      <el-col :span="4">
                        属性名:
                      </el-col>
                      <el-col :span="16">
                        <y-input v-model="item.key" />
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="10">
                    <el-row type="flex">
                      <el-col :span="4">
                        属性值:
                      </el-col>
                      <el-col :span="16">
                        <y-input v-model="item.value" />
                      </el-col>
                    </el-row>
                  </el-col>

                  <el-col :span="4">
                    <el-button @click="removeProp(item)">删除</el-button>

                  </el-col>

                </el-row>
              </div>
              <el-button @click="addProp">添加产品参数</el-button>

            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="材质:" prop="material">

              <el-table
                id="materialTable"
                :data="goodForm.material"
                style="width: 100%"

                :default-expand-all="materialExpand"
                row-class-name="table-grey"
              >
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-table
                      :data="goodForm.material[props.$index].value"
                      style="width: 100%"
                    >
                      <el-table-column
                        label="二级属性名称"
                        prop="key"
                      />

                      <el-table-column
                        label="二级属性内容"
                        prop="value"
                      />

                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button
                            size="mini"
                            @click="editMaterial(props.$index,scope.$index, '2')"
                          >编辑二级属性
                          </el-button>

                          <el-button
                            size="mini"
                            type="danger"
                            @click="delMaterial(props.$index,scope.$index, '2')"
                          >删除
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>

                  </template>
                </el-table-column>

                <el-table-column
                  label="一级属性名称"
                  prop="key"
                />

                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="editMaterial(scope.$index, scope.row,'1')"
                    >编辑一级属性
                    </el-button>

                    <el-button
                      size="mini"
                      type="danger"
                      @click="delMaterial(scope.$index,null,'1')"
                    >删除一级属性
                    </el-button>

                    <el-button
                      size="mini"
                      @click="addMaterial(scope.$index, scope.row,'2')"
                    >添加二级属性
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>

              <el-button
                size="mini"
                @click="addMaterial(null,null,'1')"
              >添加一级属性
              </el-button>

            </el-form-item>
          </el-col>

          <!--          颜色尺码-->
          <el-col :span="24">
            <el-form-item label="颜色:" prop="colors">

              <el-table
                id="colorSizeTable"
                :data="goodForm.colors"
                style="width: 100%"
              >
                <el-table-column
                  label="颜色名字"
                  prop="color_name"
                />
                <el-table-column
                  label="颜色缩略图"
                  prop="color_thumbnail"
                />
                <el-table-column
                  label="图片缩略图"
                  prop="good_thumbnail"
                />

                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="editColorSize(scope.$index,'color')"
                    >编辑颜色
                    </el-button>

                    <el-button
                      size="mini"
                      type="danger"
                      @click="delColorSize(scope.$index,'color')"
                    >删除颜色
                    </el-button>

                  </template>
                </el-table-column>
              </el-table>

              <el-button
                size="mini"
                @click="addColorSize('color')"
              >添加颜色
              </el-button>

            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="尺码:" prop="sizes">
              <el-table
                :data="goodForm.sizes"
                style="width: 100%"
              >
                <el-table-column
                  label="尺码名"
                  prop="size_name"
                />
                <el-table-column
                  label="尺码显示名"
                  prop="display_name"
                />
                <el-table-column
                  label="尺寸解释"
                  prop="description"
                />

                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button
                      size="mini"
                      @click="editColorSize(scope.$index, 'size')"
                    >编辑
                    </el-button>

                    <el-button
                      size="mini"
                      type="danger"
                      @click="delColorSize(scope.$index, 'size')"
                    >删除
                    </el-button>

                  </template>

                </el-table-column>

              </el-table>

              <el-button
                size="mini"
                @click="addColorSize('size')"
              >添加尺码
              </el-button>
            </el-form-item>
          </el-col>

          <!--    添加编辑材质1级属性-->

          <y-dialog
            v-model="materialDialog1"
            :title="materialTitle"
            @confirm="confirmMaterial('1')"
            @close="closeMaterial('1')"
          >
            <template slot="body">
              <el-col :span="12">
                <el-form-item label="标题:" prop="name">
                  <YInput
                    v-model="materialTemp1.key"
                  />
                </el-form-item>
              </el-col>
            </template>
          </y-dialog>

          <!--    添加编辑材质二级属性-->
          <y-dialog
            v-model="materialDialog2"
            :title="materialTitle"
            @confirm="confirmMaterial('2')"
            @close="closeMaterial('2')"
          >
            <template slot="body">
              <el-col :span="12">
                <el-form-item label="标题:" prop="name">
                  <YInput
                    v-model="materialTemp2.key"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="内容:" prop="name">
                  <YInput
                    v-model="materialTemp2.value"
                  />
                </el-form-item>
              </el-col>
            </template>
          </y-dialog>

          <!--    添加编辑颜色-->
          <y-dialog
            v-model="colorDialog"
            :title="colorSizeTitle"
            @confirm="confirmColorSize('color')"
            @close="closeColorSize('color')"
          >
            <template slot="body">
              <el-col :span="12">

                <el-form-item label="颜色名字">
                  <YInput
                    v-model="colorTemp.color_name"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="颜色缩略图">
                  <YUploadImage
                    v-model="colorTemp.color_thumbnail"
                    :modal="false"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="图片缩略图">
                  <YUploadImage
                    v-model="colorTemp.good_thumbnail"
                    :modal="false"
                  />
                </el-form-item>
              </el-col>
            </template>
          </y-dialog>

          <!--    添加编辑尺码-->
          <y-dialog
            v-model="sizeDialog"
            :title="colorSizeTitle"
            @confirm="confirmColorSize('size')"
            @close="closeColorSize('size')"
          >
            <template slot="body">
              <el-col :span="12">
                <el-form-item label="尺码名">
                  <YInput
                    v-model="sizeTemp.size_name"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="尺寸显示名">
                  <YInput
                    v-model="sizeTemp.display_name"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="尺寸解释">
                  <YInput
                    v-model="sizeTemp.description"
                  />
                </el-form-item>
              </el-col>

            </template>
          </y-dialog>

          <el-col :span="24">
            <el-form-item>
              <el-button @click="submit('goodForm')">提交</el-button>
              <el-button @click="back">返回</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </y-form>
    </el-card>
  </div>
</template>

<script>

import YDialog from '@/components/y-dialog/index.vue'
import { listRemoveItem, jsonToObj, objToJson } from '@/utils/index'
import { putGood, getGood } from '../../api/good'

export default {
  components: { YDialog },

  data() {
    return {
      goodForm: {},
      goodRules: {

        product_name: [

          {
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          },

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的商品名称',
            trigger: 'blur'
          }

        ],

        product_sn: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的商品编号',
            trigger: 'blur'
          }

        ],

        type_sn: [

          {
            type: 'string',
            max: 80,
            message: '请输入长度小于80的款式编号',
            trigger: 'blur'
          }

        ],

        main_pic: [

          {
            type: 'string',
            max: 255,
            message: '请输入长度小于255的页面主图',
            trigger: 'blur'
          }

        ]

      },

      // 颜色尺码
      colorDialog: false,
      sizeDialog: false,
      colorTemp: {},
      sizeTemp: {},
      colorSizeTitle: '',
      // 材质
      materialDialog1: false,
      materialDialog2: false,

      //  临时中转的数据, 通过temp存储add、edit 的数据，分离y-dialog数据和视图
      // remark 分开两个避免input框v-model类型错误的bug，一级属性是数组，二级属性的string
      materialTemp1: {},
      materialTemp2: {},
      materialTitle: '',

      materialExpand: false,
      colorExpand: false
    }
  },
  created() {
    this.getGood()
  },
  methods: {
    async getGood() {
      const res = await getGood(this.$route.query.id)
      // 反序列化对象
      this.goodForm = jsonToObj(res.data, ['material', 'colors', 'carousels', 'product_parameter', 'sizes'])
    },

    async putGood() {
      await putGood(this.$route.query.id, objToJson(this.goodForm, ['material', 'colors', 'carousels', 'product_parameter', 'sizes']))
      this.$router.push({ path: '/good' })

      this.$message({
        message: '修改成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.goodForm.check((valid) => {
        if (valid) {
          this.putGood()
        }
      })
    },

    // 产品属性
    addProp() {
      if (!this.goodForm.product_parameter) {
        this.goodForm.product_parameter = []
      }
      this.goodForm.product_parameter.push({})
      this.$forceUpdate()
    },
    removeProp(item) {
      listRemoveItem(this.goodForm.product_parameter, item)
    },

    // 材质方法
    delMaterial(id, id2, lev) {
      if (lev === '1') {
        this.goodForm.material.splice(id, 1)
        // listRemoveItem(this.goodForm.product_parameter, item)
      }
      if (lev === '2') {
        this.goodForm.material[id].value.splice(id2, 1)
      }
      this.$forceUpdate()
    },

    // todo 先展开表格后，再添加二级属性，列表数据无法刷新
    /**   点击确认时将数据添加到goodForm.material
     *  在点击添加或编辑按钮时设置当前操作类型
     * @param lev 判断是一级属性还是二级属性
     */
    confirmMaterial(lev) {
      // 处理一级属性
      if (lev === '1') {
        if (this.materialTemp1.type === 'add') {
          // 空数组初始化
          if (!this.goodForm.material) {
            this.goodForm.material = []
          }
          // 浅拷贝
          this.goodForm.material.push({ ...this.materialTemp1 })
        }
        if (this.materialTemp1.type === 'edit') {
          // 必须手动刷新
          this.$set(this.goodForm.material, this.materialTemp1.id, { ...this.materialTemp1 })
        }
      }
      //  处理二级属性
      if (lev === '2') {
        if (this.materialTemp2.type === 'add') {
          // 数组为空的时候初始化
          if (!this.goodForm.material[this.materialTemp2.id].value) {
            this.goodForm.material[this.materialTemp2.id].value = []
          }
          // 添加到数组
          this.goodForm.material[this.materialTemp2.id].value.push({ ...this.materialTemp2 })
          //  添加数组到数据后，自动展开表格，通过另一个变量控制表格只在第一次添加二级属性的时候需要手动展开
          if (!this.materialExpand) {
            this.materialExpand = true
            // 绑定变表格展开的数据改变了，但是表格没展开，需要手动展开
            // 先获取materialId，不影响colors表格
            document.getElementById('materialTable')
              .getElementsByClassName('el-table__expand-icon')
              .forEach((item) => {
                item.click()
              })
          }
        }
        if (this.materialTemp2.type === 'edit') {
          this.$set(this.goodForm.material[this.materialTemp2.id].value, this.materialTemp2.id2, { ...this.materialTemp2 })
        }
      }
      this[`materialTemp${lev}`] = {}
    },
    /**
     *
     * @param id  一级属性数组索引
     * @param id2 二级属性数组索引
     * @param lev 一级还是二级
     */
    editMaterial(id, id2, lev) {
      if (lev === '1') {
        this.materialTemp1 = { ...this.goodForm.material[id] }
        this.materialTitle = `编辑一级属性：${this.materialTemp1.key}`
      }
      if (lev === '2') {
        this.materialTemp2 = { ...this.goodForm.material[id].value[id2] }
        this.materialTitle = `编辑二级属性：${this.materialTemp2.key}`
      }
      this[`materialTemp${lev}`].type = 'edit'
      this[`materialTemp${lev}`].id = id
      this[`materialTemp${lev}`].id2 = id2
      this[`materialDialog${lev}`] = true
    },
    addMaterial(id, row, lev) {
      if (lev === '1') {
        this.materialDialog1 = true
        this.materialTitle = '添加一级属性'
        this.materialTemp1.id = this.goodForm.material?.length ?? 0
      }
      if (lev === '2') {
        this.materialDialog2 = true
        // 添加二级属性时候设置一级属性id
        this.materialTemp2.id = id
        this.materialTitle = '添加二级属性'
      }
      this[`materialTemp${lev}`].type = 'add'
    },
    // 点击取消的时候重置前一步设置的数据（添加或者编辑），否则影响下一步操作
    closeMaterial(lev) {
      this[`materialTemp${lev}`] = {}
    },

    //  颜色尺码方法

    delColorSize(index, type) {
      this.goodForm[`${type}s`].splice(index, 1)
      this.$forceUpdate()
    },

    // todo 先展开表格后，再添加二级属性，列表数据无法刷新
    /**   点击确认时将数据添加到goodForm.material
     *  在点击添加或编辑按钮时设置当前操作类型
     * @param type 判断是一级属性还是二级属性
     */
    confirmColorSize(type) {
      // 处理一级属性
      // if (type === 'color') {
      if (this[`${type}Temp`].type === 'add') {
        // 空数组初始化
        if (!this.goodForm[`${type}s`]) {
          this.goodForm[`${type}s`] = []
        }
        // 浅拷贝
        this.goodForm[`${type}s`].push({ ...this[`${type}Temp`] })
      }
      if (this[`${type}Temp`].type === 'edit') {
        // 必须手动刷新
        this.$set(this.goodForm[`${type}s`], this[`${type}Temp`].id, { ...this[`${type}Temp`] })
      }
      this[`${type}Temp`] = {}
    },
    /**
     *
     * @param id  一级属性数组索引
     * @param type 一级还是二级
     */
    editColorSize(id, type) {
      this[`${type}Temp`] = { ...this.goodForm[`${type}s`][id] }
      this.colorSizeTitle = `编辑${type === 'color' ? '颜色' : '尺码'}`
      this[`${type}Temp`].type = 'edit'
      this[`${type}Temp`].id = id
      this[`${type}Dialog`] = true
    },
    addColorSize(type) {
      this[`${type}Dialog`] = true
      this.colorSizeTitle = `添加${type === 'color' ? '颜色' : '尺码'}`
      this[`${type}Temp`].type = 'add'
      // 设置颜色id
      this[`${type}Temp`].id = this.goodForm[`${type}s`]?.length ?? 0
    },
    // 点击取消的时候重置前一步设置的数据（添加或者编辑），否则影响下一步操作
    closeColorSize(type) {
      this[`${type}Temp`] = {}
    }
  }
}
</script>
<style lang='scss' scoped>
.card-container {

  .box-card {

  }

  .table-grey {
    background: #f0f9eb;
  }
}
</style>
