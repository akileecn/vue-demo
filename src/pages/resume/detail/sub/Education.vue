<template>
  <v-sub-parent :subList="dataList" subType="education" title="教育经历(从最高学历填至本科或大专)" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-input prop="schoolName" v-model="props.item.schoolName" label="学校名称" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="major" v-model="props.item.major" label="所学专业" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="graduateType" v-model="props.item.graduateType" :option="dicts.graduateType" label="毕业方式" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="degree" v-model="props.item.degree" :option="dicts.degree" label="学位" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="education" v-model="props.item.education" :option="dicts.education" label="学历" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="learnType" v-model="props.item.learnType" :option="dicts.learnType" label="学习形式" :editable="props.item.editable" />
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
      <el-row>
        <el-col :span="12">
          <c-select prop="schoolType" v-model="props.item.schoolType" :option="dicts.schoolType" label="学校类别" :editable="props.item.editable" />
        </el-col>
        <el-col v-if="recruitType != 'society'" :span="12">
          <c-radio prop="hasBeenCadre" v-model="props.item.hasBeenCadre" label="是否担任过学生干部" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row  v-if="recruitType != 'society'">
        <el-col :span="12">
          <c-select prop="gradeRank" v-model="props.item.gradeRank" :option="dicts.gradeRank" label="年级排名" :editable="props.item.editable" />
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
        schoolName: { required: true, message: '请填写学校名称' },
        major: { required: true, message: '请填写所学专业' },
        graduateType: { required: true, message: '请选择毕业方式' },
        degree: { required: true, message: '请选择学位' },
        education: { required: true, message: '请选择学历' },
        learnType: { required: true, message: '请选择学习形式' },
        beginDate: { required: true, message: '请选择开始时间' },
        endDate: { required: true, message: '请选择结束时间' },
        schoolType: { required: true, message: '请选择学校类别' },
        hasBeenCadre: { required: true, message: '请选择是否担任过学生干部' },
        gradeRank: { required: true, message: '请选择年级排名' }
      },
      formBean: {
        schoolName: null,
        major: null,
        graduateType: null,
        degree: null,
        education: null,
        learnType: null,
        beginDate: null,
        endDate: null,
        schoolType: null,
        hasBeenCadre: null,
        gradeRank: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  components: {
    vSubParent
  }
}
</script>
