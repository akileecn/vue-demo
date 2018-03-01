<template>
  <v-sub-parent :subList="dataList" subType="award" :title="title" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-input prop="name" v-model="props.item.name" label="奖励名称" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-date-picker prop="time" v-model="props.item.time" label="获得时间" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="level" v-model="props.item.level" :option="dicts.awardLevel" label="级别" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <c-input prop="description" type="textarea" v-model="props.item.description" label="奖励描述" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        name: { required: true, message: '请填写奖励名称' },
        time: { required: true, message: '请选择获得时间' },
        level: { required: true, message: '请选择级别' },
        description: { required: true, message: '请填写奖励描述' }
      },
      formBean: {
        name: null,
        time: null,
        level: null,
        description: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  computed: {
    title() {
      return `奖励记录(请填写在校${
        this.recruitType == 'society' ? '或工作' : ''
      }期间获奖情况)`
    }
  },
  components: {
    vSubParent
  }
}
</script>
