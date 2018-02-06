<template>
  <el-form-item :prop="prop" :label="label">
    <el-date-picker :value="value" @input="updateValue" :type="type" placeholder="选择日期" :readonly="!editable"></el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  props: ['type', 'value', 'prop', 'label', 'editable'],
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.el-date-editor {
  width: 100%;
}
</style>
