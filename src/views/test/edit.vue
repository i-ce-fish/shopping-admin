<template>
  <div class="card-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加商品尺码</span>
      </div>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="尺码名">
              <el-input type="text" placeholder="XS" v-model="form.size_name" style="width: 100%;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="尺寸显示名字">
              <el-input type="text" placeholder="160/84A/XS" v-model="form.display_name" style="width: 100%;"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="尺寸解释">
              <el-input type="text" placeholder="肩宽: 50.5  身宽: 52  后肩衣长: 72  连肩袖长: 79.5" v-model="form.description" style="width: 100%;"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="尺码类别:" prop="size_type">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="end">
          <el-form-item>
            <el-button @click="onSubmit()">提交</el-button>
            <el-button>返回</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>

import { addGoodsize, getGoodsize, putGoodsize } from '@/api/goodsize'

export default {

  data() {
    return {
      form: {
        size_name: '',
        display_name: '',
        description: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      rules: {

        data1: [{
          type: 'string', max: 255, message: '请输入长度小于255的尺码名', trigger: 'change'
        }],

        data2: [{
          type: 'string', max: 69, message: '请输入长度小于69的尺寸显示名', trigger: 'change'
        }],

        data3: [{
          type: 'string', max: 255, message: '请输入长度小于255的尺寸解释', trigger: 'change'
        }]
      }
    }
  },
  created() {
    this.getform()
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.sentparam()
        }
      })
    },

    async sentparam() {
      await putGoodsize(this.$route.query.id, this.form)
      await this.$router.push({ path: '/goodsize' })

      this.$message({
        message: '修改成功',
        type: 'success'
      })
    },

    async getform() {
      const res = await getGoodsize(this.$route.query.id)
      this.form = res.data
    }
  }
}
</script>

<style>
.box-card{
  width: 1400px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
