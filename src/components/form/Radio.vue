<template>
  <el-form-item :prop="prop" :label="label">
    <span v-if="!editable">{{value?'是':'否'}}</span>
    <template v-else>
      <el-radio border :value="value" @input="updateValue" :label="true" :disabled="!editable">是</el-radio>
      <el-radio border :value="value" @input="updateValue" :label="false" :disabled="!editable">否</el-radio>
    </template>
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
