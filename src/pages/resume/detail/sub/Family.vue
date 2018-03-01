<template>
  <v-sub-parent :subList="dataList" subType="family" title="家庭关系(请填写家庭和社会主要成员，父母必须填写)" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-input prop="name" v-model="props.item.name" label="姓名" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="relationship" v-model="props.item.relationship" :option="dicts.relationship" label="关系" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="workCompany" v-model="props.item.workCompany" label="工作单位" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="workJob" v-model="props.item.workJob" label="职位" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="description" v-model="props.item.description" :option="dicts.politicsStatus" label="政治面貌" :editable="props.item.editable" />
        </el-col>
      </el-row>
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        name: { required: true, message: '请填写姓名' },
        relationship: { required: true, message: '请选择关系' },
        workCompany: { required: true, message: '请填写工作单位' },
        workJob: { required: true, message: '请填写职位' },
        description: { required: true, message: '请选择政治面貌' }
      },
      formBean: {
        name: null,
        relationship: null,
        workCompany: null,
        workJob: null,
        description: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  components: {
    vSubParent
  }
}
</script>
