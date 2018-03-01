<template>
  <el-card>
    <!-- 头部 -->
    <div slot="header">
      <span>我的简历</span>
      <div class="fr">
        <router-link to="/">
          <el-button type='text'>首页</el-button>
        </router-link>
        <el-button type='text'>我的简历</el-button>
      </div>
    </div>
    <v-base :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts" :resume="resume"/>
    <v-education :dataList="educationList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-work :dataList="workList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-foreign-language :dataList="foreignLanguageList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-computer :dataList="computerList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-practice :dataList="practiceList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-student-cadre :dataList="studentCadreList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-award :dataList="awardList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-train :dataList="trainList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
    <v-family :dataList="familyList" :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts"/>
  </el-card>
</template>

<script>
import vBase from './Base'
import vEducation from './sub/Education'
import vWork from './sub/Work'
import vForeignLanguage from './sub/ForeignLanguage'
import vComputer from './sub/Computer'
import vPractice from './sub/Practice'
import vStudentCadre from './sub/studentCadre'
import vAward from './sub/award'
import vTrain from './sub/train'
import vFamily from './sub/family'

export default {
  data() {
    return {
      dicts: {},
      resume: {},
      educationList: [],
      workList: [],
      foreignLanguageList: [],
      computerList: [],
      practiceList: [],
      studentCadreList: [],
      awardList: [],
      trainList: [],
      familyList: []
    }
  },
  props: ['resumeId', 'recruitType'],
  components: {
    vBase,
    vEducation,
    vWork,
    vForeignLanguage,
    vComputer,
    vPractice,
    vStudentCadre,
    vAward,
    vTrain,
    vFamily
  },
  created() {
    this.loadDicts()
    this.loadDetail()
  },
  methods: {
    loadDicts() {
      this.$http
        .get('/translate/dicts', {
          params: {
            types:
              'gender,nation,marriage,politicsStatus,highestEducation,degree,schoolType,artsOrScience,admissionOrder' +
              ',graduateType,education,learnType,gradeRank' +
              ',jobType' +
              ',languageLevel,languageProficiency,language' +
              ',computerCertificate,computerProficiency' +
              ',cadreLevel' +
              ',awardLevel' +
              ',relationship,politicsStatus'
          }
        })
        .then(response => {
          if (response.data.success) {
            this.dicts = response.data.data
          }
        })
    },
    loadDetail() {
      this.$http
        .get('/resume2/detail/all', {
          params: {
            id: this.resumeId
          }
        })
        .then(response => {
          if (response.data.success) {
            let data = response.data.data
            this.resume = data.resume
            this.educationList = data.educationList
            this.workList = data.workList
            this.foreignLanguageList = data.foreignLanguageList
            this.computerList = data.computerList
            this.practiceList = data.practiceList
            this.studentCadreList = data.studentCadreList
            this.awardList = data.awardList
            this.trainList = data.trainList
            this.familyList = data.familyList
          } else {
            this.$message.error(response.data.message)
          }
        })
    }
  }
}
</script>
<style>
.el-form-item__label {
  font-weight: bold;
}
</style>

