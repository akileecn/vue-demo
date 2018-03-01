<template>
  <v-sub-parent :subList="dataList" subType="practice" title="计算机技能" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-input prop="name" v-model="props.item.name" label="活动/公司名称" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="job" v-model="props.item.job" label="职位" :editable="props.item.editable" />
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
      <c-input prop="duty" type="textarea" v-model="props.item.duty" label="职责描述" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        name: { required: true, message: '请填写活动/公司名称' }
      },
      formBean: {
        name: null,
        job: null,
        beginDate: null,
        endDate: null,
        duty: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  components: {
    vSubParent
  }
}
</script>
