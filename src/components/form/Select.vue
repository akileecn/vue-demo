<template>
  <el-form-item :prop="prop" :label="label">
    <el-select :value="value" @input="updateValue" clearable placeholder="请选择" :disabled="!editable">
      <el-option v-for="(value, key) in option" :key="key" :label="value" :value="key"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  props: ['option', 'value', 'prop', 'label', 'editable'],
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
