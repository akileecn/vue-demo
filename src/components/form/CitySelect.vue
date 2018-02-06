<template>
  <el-form-item :prop="prop" :label="label">
    <!-- 只有省 -->
    <el-select v-if="type == 'p'" :value="province" @input="updateProvince" clearable placeholder="请选择" :disabled="!editable">
      <el-option v-for="(value, key) in provinces" :key="key" :label="key" :value="key"></el-option>
    </el-select>
    <!-- 省市地区联动 -->
    <el-row v-else>
      <el-col :span="5">
        <el-select :value="province" @input="updateProvince" clearable placeholder="请选择" :disabled="!editable">
          <el-option v-for="(value, key) in provinces" :key="key" :label="key" :value="key"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select :value="city" @input="updateCity" placeholder="请选择" :disabled="!editable">
          <el-option v-for="(value, key) in cities" :key="key" :label="key" :value="key"></el-option>
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select :value="area" @input="updateArea" placeholder="请选择" :disabled="!editable">
          <el-option v-for="item in areas" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-col>
      <el-col :span="9">
        <el-input :value="other" @input="updateOther" placeholder="____街道____号" :readonly="!editable"/>
      </el-col>
    </el-row>
  </el-form-item>
</template>

<script>
import pca from '@/assets/pca.json'

export default {
  data() {
    return {
      province: null,
      city: null,
      area: null,
      other: null
    }
  },
  computed: {
    provinces() {
      return pca
    },
    cities() {
      return this.province ? pca[this.province] : {}
    },
    areas() {
      return this.province && this.city ? pca[this.province][this.city] : {}
    }
  },
  props: ['type', 'value', 'prop', 'label', 'editable'],
  created() {},
  watch: {
    value: function(val, oldVal) {
      if (val) {
        let arr = val.split(',')
        for (let i = 0; i < 4 - arr.length; i++) {
          arr.push('')
        }
        this.province = arr[0]
        this.city = arr[1]
        this.area = arr[2]
        this.other = arr[3]
      }
    }
  },
  methods: {
    updateProvince(value) {
      this.province = value
      this.city = ''
      this.area = ''
      this.other = ''
      this.emitInput()
    },
    updateCity(value) {
      this.city = value
      this.area = ''
      this.other = ''
      this.emitInput()
    },
    updateArea(value) {
      this.area = value
      this.other = ''
      this.emitInput()
    },
    updateOther(value) {
      this.other = value
      this.emitInput()
    },
    emitInput() {
      let value = null
      if (this.type == 'p') {
        value = this.province
      } else {
        value = `${this.province},${this.city},${this.area},${this.other}`
      }
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
