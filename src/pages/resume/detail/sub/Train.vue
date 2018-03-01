<template>
  <v-sub-parent :subList="dataList" subType="train" title="培训经历(请填写正规培训机构培训信息)" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-date-picker prop="beginDate" v-model="props.item.beginDate" label="开始时间" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-date-picker prop="endDate" v-model="props.item.endDate" label="结束时间" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="company" v-model="props.item.company" label="培训机构" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="place" v-model="props.item.place" label="培训地点" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <c-input prop="course" v-model="props.item.course" label="培训课程" :editable="props.item.editable" />
      <c-input prop="description" type="textarea" v-model="props.item.description" label="详细描述" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {},
      formBean: {
        beginDate: null,
        endDate: null,
        company: null,
        place: null,
        course: null,
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
