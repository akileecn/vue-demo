<template>
  <el-form-item :prop="prop" :label="label">
    <el-input :type="type" :value="value" @input="updateValue" :readonly="!editable"></el-input>
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
