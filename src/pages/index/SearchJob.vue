<template>
  <div>
    <span>职位搜索</span>
    <div>
      <span>招聘类型：</span>
      <div v-for="(value, key) in recruitType" :key="key">
        <input v-model="jobQuery.recruitType" type="radio" name="recruitTypes" :value="key" :id="'recruitType_'+key">
        <label :for="'recruitType_'+key">{{value}}</label>
      </div>
    </div>
    <div>
      <span>工作地点：</span>
      <input v-model="jobQuery.workCity" type="radio" name="workCity" value="" id="workCity_all" checked/>
      <label for="workCity_all">全部</label>
      <div v-for="(value, key) in workCity" :key="key">
        <input v-model="jobQuery.workCity"  type="radio" name="workCity" :value="key" :id="'workCity_'+key">
        <label :for="'workCity_'+key">{{value}}</label>
      </div>
    </div>
    <button @click="search">搜索</button>
  </div>
</template>

<script>
import C from '@/components/constants'

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
        .get(C.host + '/translate/dicts', {
          params: { types: 'recruitType,workCity' }
        })
        .then(response => {
          if (response.body.success) {
            let data = response.body.data
            this.recruitType = data.recruitType
            this.workCity = data.workCity
          }
        })
    },
    search() {
      this.$http
        .post(C.host + '/job/list', null, {
          params: this.jobQuery
        })
        .then(response => {
          if (response.body.success) {
            let data = response.body.data
            console.log(data)
          }
        })
    }
  }
}
</script>
