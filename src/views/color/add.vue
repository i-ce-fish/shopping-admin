<template>
  <div class="card-container">
    <el-card class="box-card">
      <h3>添加color</h3>
      <y-form
        ref="colorForm"
        :model="colorForm"
        :rules="colorRules"
        label-width="100px"
      >
        <el-row>

          <el-col :span="12">
            <el-form-item label="颜色选择:" prop="code">

              <el-color-picker
                v-model="color"
                color-format="hsl"
              ></el-color-picker>

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="色系:" prop="group">

              <!--              todo 色系名称不能改, 色系代码区间可以自定义, -->
              <y-select
                v-model="colorForm.group"
                :options="[
                {label:'红色',value:'0'},
                {label:'橙色',value:'1'},
                {label:'蓝色',value:'2'},
                {label:'绿色',value:'3'},
                {label:'黄色',value:'4'},
                {label:'紫色',value:'7'},
                {label:'黑色',value:'5'},
                {label:'白色',value:'6'},
                ]"
              />

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="颜色名称:" prop="color_name">

              <y-input

                v-model="colorForm.color_name"

              />

            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="编码:" prop="code">

              <y-input

                v-model="colorForm.code"

              />

            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item>
              <el-button @click="submit('colorForm')">提交</el-button>
              <el-button @click="back">返回</el-button>
            </el-form-item>
          </el-col>

        </el-row>
      </y-form>
    </el-card>
  </div>
</template>

<script>
import { addColor } from '@/api/color'

export default {

  data() {
    return {
      colorForm: {},
      colorRules: {},
      color: ''
    }
  },
  watch: {
    /**
     * @what: 监听color字段, 根据所选择的hsl计算出颜色名称,
     * @how: 根据两点距离公式, 计算出最接近的颜色名称
     * @todo 计算结果不准确 , 以后再计算
     * @param hsl
     */

    // color(hsl) {
    //   console.log(hsl)
    //   hsl = hsl.match(/[0-9][0-9]*/g)
    //   const stdColor = new Map([
    //     ['0, 100, 50', '红色'],
    //     ['30, 100, 50', '橙色'],
    //     ['60, 100, 50', '黄色'],
    //     ['120, 100, 75', '绿色'],
    //     ['240, 100, 25', '蓝色'],
    //     ['300, 100, 25', '紫色'],
    //     ['255, 152, 191', '粉红'],
    //     // ['136, 84, 24', '棕色'],
    //     ['0, 0, 50', '灰色'],
    //     ['0, 0, 0', '黑色'],
    //     ['0, 0, 100', '白色']
    //   ])
    //
    //   const absMap = new Map()
    //
    //   stdColor.forEach((v, k) => {
    //     const k_ = k.split(',')
    //     const stdK = k_[0]
    //     const stdS = k_[1]
    //     const stdL = k_[2]
    //
    //     // 两点距离公式
    //     const result =
    //       Math.pow(hsl[0] - stdK, 2) +
    //       Math.pow(hsl[1] - stdS, 2) +
    //       Math.pow(hsl[2] - stdL, 2)
    //
    //     absMap.set(k, result)
    //   })
    //
    //   // 取最小值
    //   let min = Infinity
    //   let result = ''
    //   absMap.forEach((v, k) => {
    //     if (v <= min) {
    //       min = v
    //       result = k
    //     }
    //   })
    //   console.log(stdColor.get(result))
    // }

  },
  created() {
  },
  methods: {
    async addColor() {
      await addColor(this.colorForm)
      this.$router.push({ path: '/color' })

      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit() {
      this.$refs.colorForm.check((valid) => {
        if (valid) {
          this.addColor()
        }
      })
    }

  }
}
</script>
<style lang='scss' scoped>
.card-container {

  .box-card {

    /deep/ .el-color-picker__trigger {
      width: 200px;
      height: 200px;
    }
  }

}
</style>
