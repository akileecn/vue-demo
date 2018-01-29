<template>
  <el-row :gutter="20">
    <!-- 左侧导航 -->
    <el-col :span="6">
      <el-menu default-active="#">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>校园招聘</span>
          </template>
          <el-menu-item index="2">招聘公告</el-menu-item>
          <el-menu-item index="#">招聘岗位</el-menu-item>
          <el-menu-item index="4">个人中心</el-menu-item>
          <el-menu-item index="5">通知信</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <!-- 岗位列表 -->
    <el-col :span="18">
      <el-card class="index-hot-job">
        <!-- 头部 -->
        <div slot="header">
          <span>招聘岗位</span>
          <div class="fr">
            <el-button type='text'>校园</el-button>
            <el-button type='text'>招聘岗位</el-button>
          </div>
        </div>
        <!-- 搜索表单 -->
        <div>
          <el-form :inline="true" label-width="80px">
            <el-form-item prop="workCity" label="工作地点">
              <el-select v-model="form.workCity" placeholder="请选择工作地点">
                <el-option v-for="(value, key) in dicts.workCity" :key="key" :label="value" :value="key"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="education" label="学历要求">
              <el-select v-model="form.education" placeholder="请选择学历要求">
                <el-option v-for="(value, key) in dicts.searchEducation" :key="key" :label="value" :value="key"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="name" label="岗位名称">
              <el-input type="text" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="search" type='primary'>搜索</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 数据表单 -->
        <div>
            <el-table :data="jobList" stripe border>
              <el-table-column prop="name" label="招聘岗位" width="180"></el-table-column>
              <el-table-column prop="workCity" label="工作地点" width="180"></el-table-column>
              <el-table-column prop="endDate" label="截止时间" width="180"></el-table-column>
              <el-table-column prop="peopleNumber" label="人数" width="180"></el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page.pageNum"
              :page-sizes="[10, 20, 50]"
              :page-size="page.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="page.total">
            </el-pagination>
        </div>
      </el-card>
      
    </el-col>
  </el-row>
</template>

<script>
import qs from 'querystring'
export default {
  data() {
    return {
      dicts: {
        searchEducation: [],
        workCity: []
      },
      form: {
        workCity: null,
        education: null,
        pageSize: 10,
        pageNum: 1,
        recruitType: null
      },
      page: {
        total: 0
      },
      jobList: []
    }
  },
  props: ['recruitType'],
  created() {
    this.$watch('recruitType', function(newVal, oldVal) {
      this.form.recruitType = newVal
      this.search()
    })
    this.loadDicts()
    // this.search()
  },
  methods: {
    loadDicts() {
      this.$http
        .get('/translate/dicts', {
          params: { types: 'searchEducation,workCity' }
        })
        .then(response => {
          if (response.data.success) {
            this.dicts = response.data.data
          }
        })
    },
    search() {
      this.$http.post('/job/list', qs.stringify(this.form)).then(response => {
        if (response.data.success) {
          let data = response.data.data
          this.jobList = data.list
          this.page.total = data.total
          this.form.pageNum = data.pageNum
          this.form.pageSize = data.pageSize
        } else {
          this.$message({
            message: response.data.message,
            type: 'warning'
          })
        }
      })
    },
    handleSizeChange(size) {
      this.form.pageSize = size
      this.form.pageNum = 1
      this.search()
    },
    handleCurrentChange(current) {
      this.form.pageNum = current
      this.search()
    }
  }
}
</script>
