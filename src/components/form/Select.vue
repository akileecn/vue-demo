<template>
  <el-form-item :prop="prop" :label="label">
    <span v-if="!editable">{{valueText}}</span>
    <el-select v-else :value="value" @input="updateValue" clearable placeholder="请选择" :disabled="!editable">
      <el-option v-for="(value, key) in option" :key="key" :label="value" :value="key"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: ['option', 'value', 'prop', 'label', 'editable'],
  computed: {
    valueText() {
      if (this.option && this.value != undefined) {
        return this.option[this.value]
      } else {
        return ''
      }
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>
