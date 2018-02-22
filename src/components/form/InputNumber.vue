<template>
  <el-form-item :prop="prop" :label="label">
    <span v-if="!editable">{{value}}</span>
    <el-input-number v-else :type="type" :value="value" @input="updateValue" :disabled="!editable"/>
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
