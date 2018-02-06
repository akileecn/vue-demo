<template>
  <el-form-item :prop="prop" :label="label">
    <el-input-number :type="type" :value="value" @input="updateValue" :disabled="!editable"/>
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
