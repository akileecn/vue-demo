<template>
  <el-row>
    <el-col :span="12">
      <el-form-item :prop="prop" :label="label">
        <span v-if="!editable">{{valueText}}</span>
        <template v-else>
          <el-select :value="selectValue" @input="updateSelectValue" clearable placeholder="请选择">
            <el-option v-for="(value, key) in option" :key="key" :label="value" :value="key"></el-option>
          </el-select>
        </template>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-input v-if="editable && isOther" :value="inputValue" @input="updateInputValue"/>
    </el-col>
  </el-row>
</template>

<script>
const KEY_OTHER = 'other'

export default {
  data() {
    return {
      selectValue: null,
      inputValue: null,
      isOther: false
    }
  },
  props: ['option', 'value', 'prop', 'label', 'editable'],
  created() {
    if (!this.option) {
      this.selectValue = this.value
      return
    }
    if (this.option[this.value]) {
      this.selectValue = this.value
      this.inputValue = null
      this.isOther = false
    } else {
      this.selectValue = KEY_OTHER
      this.inputValue = this.value
      this.isOther = true
    }
  },
  computed: {
    valueText() {
      if (this.option && this.value != undefined) {
        return this.isOther ? this.inputValue : this.option[this.value]
      } else {
        return ''
      }
    }
  },
  methods: {
    updateSelectValue(value) {
      this.selectValue = value
      this.inputValue = null
      if (value == KEY_OTHER) {
        this.isOther = true
      } else {
        this.isOther = false
        this.$emit('input', value)
      }
    },
    updateInputValue(value) {
      this.inputValue = value
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