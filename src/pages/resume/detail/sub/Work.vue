<template>
  <v-sub-parent :subList="dataList" subType="work" title="工作经历(仅填写全职工作经历)" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-input prop="company" v-model="props.item.company" label="单位名称" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="annualSalary" v-model="props.item.annualSalary" label="年薪" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="department" v-model="props.item.department" label="部门名称" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="job" v-model="props.item.job" label="职位" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="workPlace" v-model="props.item.workPlace" label="工作地点" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="jobType" v-model="props.item.jobType" :option="dicts.jobType" label="职位类型" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="industry" v-model="props.item.industry" label="行业" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-date-picker prop="beginDate" v-model="props.item.beginDate" label="开始时间" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-date-picker prop="endDate" v-model="props.item.endDate" label="结束时间" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <c-input prop="dimissionReason" type="textarea" v-model="props.item.dimissionReason" label="离职原因" :editable="props.item.editable" />
      <c-input prop="duty" type="textarea" v-model="props.item.duty" label="职责描述" :editable="props.item.editable" />
      <c-input prop="performance" type="textarea" v-model="props.item.performance" label="工作业绩" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        company: { required: true, message: '请填写单位名称' },
        annualSalary: { required: true, message: '请填写年薪' },
        department: { required: true, message: '请填写部门名称' },
        job: { required: true, message: '请填写职位' },
        workPlace: { required: true, message: '请填写工作地点' },
        jobType: { required: true, message: '请选择职位类型' },
        industry: { required: true, message: '请填写行业' },
        beginDate: { required: true, message: '请填写开始时间' },
        dimissionReason: { required: true, message: '请填写离职原因' },
        duty: { required: true, message: '请填写职责描述' },
        performance: { required: true, message: '请填写工作业绩' }
      },
      formBean: {
        company: null,
        annualSalary: null,
        department: null,
        job: null,
        workPlace: null,
        jobType: null,
        industry: null,
        beginDate: null,
        endDate: null,
        dimissionReason: null,
        duty: null,
        performance: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  components: {
    vSubParent
  }
}
</script>
