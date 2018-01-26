<template>
  <el-card class="index-search-job">
    <div slot="header">
      <span>职位搜索</span>
    </div>
    <el-form label-width="100px">
      <el-form-item label="招聘类型">
        <el-radio-group v-model="jobQuery.recruitType">
          <el-radio-button v-for="(value, key) in recruitType" :key="key" :label="key">{{value}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="工作地点">
        <el-radio-group v-model="jobQuery.workCity">
          <el-radio-button label="">全部</el-radio-button>
          <el-radio-button v-for="(value, key) in workCity" :key="key" :label="key">{{value}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button @click="search" type='primary'>搜索</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'SearchJob',
  data() {
    return {
      recruitType: {},
      workCity: {},
      jobQuery: {
        recruitType: null,
        workCity: null
      }
    }
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.$http
        .get('/translate/dicts', {
          params: { types: 'recruitType,workCity' }
        })
        .then(response => {
          if (response.data.success) {
            let data = response.data.data
            this.recruitType = data.recruitType
            this.workCity = data.workCity
          }
        })
    },
    search() {
      this.$http
        .post('/job/list', null, {
          params: this.jobQuery
        })
        .then(response => {
          if (response.data.success) {
            let data = response.data.data
          }
        })
    }
  }
}
</script>
