<template>
  <div class="tag-checkbox-no-ticks" @click="onClick"  style="display:inline-block">
    <div :style="{height: height11}">
      <el-tag v-bind="$attrs" v-on="$listeners" :style="{height:height12, width:width}" :class="isActive?'Theme2':'Theme1'">
        {{CategoryName}}
      </el-tag>
    </div>
    <div :style="{height: height21}">
      <el-tag v-bind="$attrs" v-on="$listeners" :style="{height:height22, width:width}"  :class="isActive?'Theme4':'Theme3'">
        {{CategoryData}}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    CategoryName: {
      type: String,
      required: true
    },
    CategoryData: {
      type: [String, Number],
      required: true
    },
    height11: {
      type: String,
      default: '40px'
    },
    height12: {
      type: String,
      default: '40px'
    },
    height21: {
      type: String,
      default: '40px'
    },
    height22: {
      type: String,
      default: '40px'
    },
    width: {
      type: String,
      default: '80px'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    IsClick: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      active: this.isActive
    }
  },
  watch: {
    isActive: {
      handler(val) {
        this.active = val
      }
    }
  },
  methods: {
    onClick() {
      if (this.IsClick) {
        this.active = !this.active
        if (this.active) {
          this.$emit('isChecked', this.CategoryData)
        } else {
          this.$emit('isChecked', '')
        }
      }
    }
  }
}
</script>

<style scoped>
.Theme1{
  background-color: #fff;
  border-color: #b3d8ff;
  color: black;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
}

.Theme2{
  background-color: #ecf5ff;
  border-color: #409eff;
  color: black;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;
}

.Theme3{
  background-color: #ecf5ff;
  border-color: #AED6FF;
  color: black;
  text-align: center;
  vertical-align: middle;
}

.Theme4{
  background-color: #AED6FF;
  border-color: #409eff;
  color: black;
  text-align: center;
  vertical-align: middle;
}
</style>
