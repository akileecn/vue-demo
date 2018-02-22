<template>
  <el-form-item :prop="prop" :label="label">
    <span v-if="!editable">{{value}}</span>
    <el-date-picker v-else  :value="value" @input="updateValue" :type="type" value-format="yyyy-MM-dd" placeholder="选择日期" :readonly="!editable"></el-date-picker>
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
