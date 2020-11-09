<template>
<el-select v-bind="$attrs" v-on="$listeners" v-model="aaa" @change="goout">
  <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
</el-select>
</template>

<script>

export default {
  props: {
    value: { type: Array },
    options: { type: Array }
  },
  data() {
    return {
      aaa: []
    }
  },
  methods: {
    goout() {
      this.$emit('input', this.aaa)
    }
  },
  watch: {
    value: {
      handler(val) {
        this.aaa = val
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
