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
    <v-education :resumeId="resumeId" :recruitType="recruitType" :dicts="dicts" :educationList="educationList"/>
  </el-card>
</template>

<script>
import vBase from '@/pages/resume/detail/Base'
import vEducation from '@/pages/resume/detail/Education'

export default {
  data() {
    return {
      dicts: {},
      resume: {},
      educationList: []
    }
  },
  props: ['resumeId', 'recruitType'],
  components: {
    vBase,
    vEducation
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
              ',graduateType,education,learnType,gradeRank'
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

