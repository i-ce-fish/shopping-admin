<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加商品</h3>
      <el-form
        ref="goodForm"
        :model="goodForm"
        :rules="goodRules"
        label-width="100px"
      >

        <el-row>

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
                        <y-input v-model="item.key"/>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="10">
                    <el-row type="flex">
                      <el-col :span="4">
                        属性值:
                      </el-col>
                      <el-col :span="16">
                        <y-input v-model="item.value"/>
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
                :data="goodForm.material"
                style="width: 100%"
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
            <el-form-item label="颜色尺码:" prop="colors">

              <el-table
                :data="goodForm.colors"
                style="width: 100%"
              >
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-table
                      :data="goodForm.colors[props.$index].value"
                      style="width: 100%"
                    >
                      <el-table-column
                        label="尺码名"
                        prop="name"
                      />
                      <el-table-column
                        label="尺码显示名"
                        prop="display_name"
                      />
                      <el-table-column
                        label="尺寸解释"
                        prop="description"
                      />
                      <el-table-column
                        label="库存数量"
                        prop="inventory"
                      />

                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button
                            size="mini"
                            @click="editColorSize(props.$index,scope.$index, 'size')"
                          >编辑二级属性
                          </el-button>

                          <el-button
                            size="mini"
                            type="danger"
                            @click="delColorSize(props.$index,scope.$index, 'size')"
                          >删除
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>

                  </template>
                </el-table-column>

                <el-table-column
                  label="颜色名字"
                  prop="name"
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
                      @click="editColorSize(scope.$index, scope.row,'color')"
                    >编辑颜色
                    </el-button>

                    <el-button
                      size="mini"
                      type="danger"
                      @click="delColorSize(scope.$index,null,'color')"
                    >删除颜色
                    </el-button>

                    <el-button
                      size="mini"
                      @click="addColorSize(scope.$index, scope.row,'size')"
                    >添加尺码
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>

              <el-button
                size="mini"
                @click="addColorSize(null,null,'color')"
              >添加颜色
              </el-button>

            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item>
              <el-button @click="submit('goodForm')">提交</el-button>
              <el-button @click="back">返回</el-button>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
    </el-card>

    <!--    添加编辑材质1级属性-->

    <DialogForm
      v-model="materialDialog1"
      @confirm="confirmMaterial('1')"
      @close="closeMaterial('1')"
      :title="materialTitle">
      <template slot="body">
        <el-col :span="12">
          <el-form-item label="标题:" prop="name">
            <YInput
              v-model="materialTemp1.key"
            />
          </el-form-item>
        </el-col>
      </template>
    </DialogForm>

    <!--    添加编辑材质二级属性-->
    <DialogForm
      v-model="materialDialog2"
      @confirm="confirmMaterial('2')"
      @close="closeMaterial('2')"
      :title="materialTitle">
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
    </DialogForm>

    <!--    添加编辑颜色-->
    <DialogForm
      v-model="colorDialog"
      @confirm="confirmColorSize('color')"
      @close="closeColorSize('color')"
      :title="colorSizeTitle">
      <template slot="body">
        <el-col :span="12">

          <el-form-item label="颜色名字">
            <YInput
              v-model="colorTemp.name"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="颜色缩略图">
            <YUploadSingle
              v-model="colorTemp.color_thumbnail"
              :modal="false"

            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="图片缩略图">
            <YUploadSingle
              v-model="colorTemp.good_thumbnail"
              :modal="false"
            />
          </el-form-item>
        </el-col>
      </template>
    </DialogForm>

    <!--    添加编辑尺码-->
    <DialogForm
      v-model="sizeDialog"
      @confirm="confirmColorSize('size')"
      @close="closeColorSize('size')"
      :title="colorSizeTitle">
      <template slot="body">
        <el-col :span="12">
          <el-form-item label="尺码名">
            <YInput
              v-model="sizeTemp.name"
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
        <el-col :span="12">
          <el-form-item label="库存数量">
            <YInput
              v-model="sizeTemp.inventory"
            />
          </el-form-item>
        </el-col>

      </template>
    </DialogForm>

  </div>
</template>

<script>

// import { listRemoveItem } from "@/utils/index"
import { addGood } from "@/api/good"
import DialogForm from "@/components/DialogForm/index.vue"
import { listRemoveItem } from "../utils"

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { DialogForm },
  data() {
    return {
      goodForm: {

        // 产品参数
        product_parameter: [],
        //  轮播图
        carousels: []
      },
      goodRules: {},
      // 颜色尺码
      colorDialog: false,
      sizeDialog: false,
      colorTemp: {},
      sizeTemp: {},
      colorSizeTitle: "",
      // 材质
      materialDialog1: false,
      materialDialog2: false,

      //  临时中转的数据, 通过temp存储add、edit 的数据，分离dialogForm数据和视图
      // remark 分开两个避免input框v-model类型错误的bug，一级属性是数组，二级属性的string
      materialTemp1: {},
      materialTemp2: {},
      materialTitle: ""
    }
  },
  created() {
  },
  methods: {

    async api() {
      await addGood(this.goodForm)
      this.$router.push({ path: "/goods" })

      this.$message({
        message: "添加成功",
        type: "success"
      })
    },

    async submit(goodForm) {
      this.$refs.goodForm.validate((valid) => {
        if (valid) {
          this.api()
        } else {
          return false
        }
      })
    },

    // 产品属性
    addProp() {
      this.goodForm.product_parameter.push({})
    },
    removeProp(item) {
      listRemoveItem(this.goodForm.product_parameter, item)
    },

    // 材质方法
    delMaterial(index, index2, lev) {
      if (lev === "1") {
        this.goodForm.material.splice(index, 1)
        // listRemoveItem(this.goodForm.product_parameter, item)
      }
      if (lev === "2") {
        this.goodForm.material[index].value.splice(index2, 1)
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
      if (lev === "1") {
        if (this.materialTemp1.type === "add") {
          // 空数组初始化
          if (!this.goodForm.material) {
            this.goodForm.material = []
          }
          // 浅拷贝
          this.goodForm.material.push({ ...this.materialTemp1 })
        }
        if (this.materialTemp1.type === "edit") {
          // 必须手动刷新
          this.$set(this.goodForm.material, this.materialTemp1.index, { ...this.materialTemp1 })
        }
      }
      //  处理二级属性
      if (lev === "2") {
        if (this.materialTemp2.type === "add") {
          // 数组为空的时候初始化
          if (!this.goodForm.material[this.materialTemp2.index].value) {
            this.goodForm.material[this.materialTemp2.index].value = []
          }
          // 添加到数组
          this.goodForm.material[this.materialTemp2.index].value.push({ ...this.materialTemp2 })
        }
        if (this.materialTemp2.type === "edit") {
          this.$set(this.goodForm.material[this.materialTemp2.index].value, this.materialTemp2.index2, { ...this.materialTemp2 })
        }
      }
      this[`materialTemp${lev}`] = {}
    },
    /**
       *
       * @param index  一级属性数组索引
       * @param index2 二级属性数组索引
       * @param lev 一级还是二级
       */
    editMaterial(index, index2, lev) {
      if (lev === "1") {
        this.materialTemp1 = { ...this.goodForm.material[index] }
        this.materialTitle = `编辑一级属性：${this.materialTemp1.key}`
      }
      if (lev === "2") {
        this.materialTemp2 = { ...this.goodForm.material[index].value[index2] }
        this.materialTitle = `编辑二级属性：${this.materialTemp2.key}`
      }
      this[`materialTemp${lev}`].type = "edit"
      this[`materialTemp${lev}`].index = index
      this[`materialTemp${lev}`].index2 = index2
      this[`materialDialog${lev}`] = true
    },
    addMaterial(index, row, lev) {
      if (lev === "1") {
        this.materialDialog1 = true
        this.materialTitle = "添加一级属性"
      }
      if (lev === "2") {
        this.materialDialog2 = true
        // 添加二级属性时候设置一级属性id
        this.materialTemp2.index = index
        this.materialTitle = "添加二级属性"
      }
      this[`materialTemp${lev}`].type = "add"
    },
    // 点击取消的时候重置前一步设置的数据（添加或者编辑），否则影响下一步操作
    closeMaterial(lev) {
      this[`materialTemp${lev}`] = {}
    },

    //  颜色尺码方法

    delColorSize(index, index2, lev) {
      if (lev === "color") {
        this.goodForm.colors.splice(index, 1)
        // listRemoveItem(this.goodForm.product_parameter, item)
      }
      if (lev === "size") {
        this.goodForm.colors[index].value.splice(index2, 1)
      }
      this.$forceUpdate()
    },

    // todo 先展开表格后，再添加二级属性，列表数据无法刷新
    /**   点击确认时将数据添加到goodForm.material
       *  在点击添加或编辑按钮时设置当前操作类型
       * @param lev 判断是一级属性还是二级属性
       */
    confirmColorSize(lev) {
      // 处理一级属性
      if (lev === "color") {
        if (this.colorTemp.type === "add") {
          // 空数组初始化
          if (!this.goodForm.colors) {
            this.goodForm.colors = []
          }
          // 浅拷贝
          this.goodForm.colors.push({ ...this.colorTemp })
        }
        if (this.colorTemp.type === "edit") {
          // 必须手动刷新
          this.$set(this.goodForm.colors, this.colorTemp.index, { ...this.colorTemp })
        }
      }
      //  处理二级属性
      if (lev === "size") {
        if (this.sizeTemp.type === "add") {
          // 数组为空的时候初始化
          if (!this.goodForm.colors[this.sizeTemp.index].value) {
            this.goodForm.colors[this.sizeTemp.index].value = []
          }
          // 添加到数组
          this.goodForm.colors[this.sizeTemp.index].value.push({ ...this.sizeTemp })
        }
        if (this.sizeTemp.type === "edit") {
          this.$set(this.goodForm.colors[this.sizeTemp.index].value, this.sizeTemp.index2, { ...this.sizeTemp })
        }
      }
      this[`${lev}Temp`] = {}
    },
    /**
       *
       * @param index  一级属性数组索引
       * @param index2 二级属性数组索引
       * @param lev 一级还是二级
       */
    editColorSize(index, index2, lev) {
      if (lev === "color") {
        this.colorTemp = { ...this.goodForm.colors[index] }
        this.materialTitle = `编辑颜色：${this.colorTemp.key}`
      }
      if (lev === "size") {
        this.sizeTemp = { ...this.goodForm.colors[index].value[index2] }
        this.materialTitle = `编辑尺码：${this.sizeTemp.key}`
      }
      this[`${lev}Temp`].type = "edit"
      this[`${lev}Temp`].index = index
      this[`${lev}Temp`].index2 = index2
      this[`${lev}Dialog`] = true
    },
    addColorSize(index, row, lev) {
      if (lev === "color") {
        this.colorDialog = true
        this.colorSizeTitle = "添加颜色"
      }
      if (lev === "size") {
        this.sizeDialog = true
        // 添加二级属性时候设置一级属性id
        this.sizeTemp.index = index
        this.colorSizeTitle = "添加尺码"
      }
      this[`${lev}Temp`].type = "add"
    },
    // 点击取消的时候重置前一步设置的数据（添加或者编辑），否则影响下一步操作
    closeColorSize(lev) {
      this[`${lev}Temp`] = {}
    }

  }

}
</script>
<style lang='scss' scope>
  .card-container {
    background-color: #f0f2f5;
    padding: 30px;
    min-height: 100vh;

    .box-card {

    }

    .demo-table-expand {
      font-size: 0;
    }

    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }

  }
</style>
