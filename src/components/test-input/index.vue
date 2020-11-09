<template>
  <div>
    <input @input='goout' v-model="aaa" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaa: this.value
    }
  },
  props: {
    value: {}
  },
  methods: {
    goout() {
      this.$emit('goout', this.aaa)
    }
  },
  model: {
    event: 'goout'
  },
  watch: {
    aaa(val) {
      this.aaa = val
    }
  }
}
</script>

<style scoped>

</style>
