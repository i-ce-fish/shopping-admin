<template>
  <y-form
      ref="goodpatternForm"
      :model="goodpatternForm"
      :rules="goodpatternRules"
      label-width="100px"
  >
    <el-row>

      <el-col :span="12">
        <el-form-item
            label="图案名称:"
            prop="pattern_name"

        >

          <y-input

              v-model="goodpatternForm.pattern_name"

          />

        </el-form-item>
      </el-col>

      <el-col
          :span="12"
          v-if="children"
      >
        <el-form-item
            label="父级图案名称:"
            prop="parent_id"

        >

          <y-select

              v-model="goodpatternForm.parent_id"

          />

        </el-form-item>
      </el-col>

    </el-row>
  </y-form>

</template>
<script>
import { addGoodpattern } from '@/api/goodpattern'

export default {
  data() {
    return {
      goodpatternForm: {},
      goodpatternRules: {}
    }
  },
  methods: {
    async addGoodpattern() {
      await addGoodpattern(this.goodpatternForm)

      this.$message({
        message: '添加成功',
        type: 'success'
      })
    },

    async submit(cb) {
      this.$refs.goodpatternForm.check((valid) => {
        if (valid) {
          this.addGoodpattern()
          cb()
        }
      })
    }
  },
  props: {
    // 是否子级别
    children: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.add_form {
}
</style>
