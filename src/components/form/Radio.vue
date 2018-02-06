<template>
  <el-form-item :prop="prop" :label="label">
    <el-radio :value="value" @input="updateValue" :label="true" :disabled="!editable">是</el-radio>
    <el-radio :value="value" @input="updateValue" :label="false" :disabled="!editable">否</el-radio>
  </el-form-item>
</template>

<script>
export default {
  props: ['value', 'prop', 'label', 'editable'],
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>
