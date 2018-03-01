<template>
  <v-sub-parent :subList="dataList" subType="studentCadre" title="学生干部(填写学生干部经历)" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-input prop="name" v-model="props.item.name" label="职务" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="level" v-model="props.item.level" :option="dicts.cadreLevel" label="级别" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-date-picker prop="beginDate" v-model="props.item.beginDate" label="开始时间" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-date-picker prop="endDate" v-model="props.item.endDate" label="结束时间" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <c-input prop="description" type="textarea" v-model="props.item.description" label="职责描述" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        name: { required: true, message: '请填写职务' }
      },
      formBean: {
        name: null,
        level: null,
        beginDate: null,
        endDate: null,
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
