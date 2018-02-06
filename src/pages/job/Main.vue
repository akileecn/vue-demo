<template>
  <el-row :gutter="20">
    <!-- 左侧导航 -->
    <el-col :span="6">
      <el-menu :default-openeds="['#']" router>
        <el-submenu index="#">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{recruitTypeName}}招聘</span>
          </template>
          <el-menu-item index="./notice" v-if="isShowNotice">招聘公告</el-menu-item>
          <el-menu-item index="./list">招聘岗位</el-menu-item>
          <el-menu-item index="/userCenter">个人中心</el-menu-item>
          <el-menu-item index="5">通知信</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <!-- 右侧主题 -->
    <el-col :span="18">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import qs from 'querystring'

export default {
  name: 'jobMain',
  data() {
    return {
      dicts: {
        recruitType: {}
      }
    }
  },
  props: ['recruitType'],
  computed: {
    recruitTypeName() {
      return this.dicts.recruitType[this.recruitType]
    },
    isShowNotice() {
      return 'campus' == this.recruitType || 'trainee' == this.recruitType
    }
  },
  created() {
    this.loadDicts()
  },
  methods: {
    loadDicts() {
      this.$http
        .get('/translate/dicts', {
          params: { types: 'recruitType' }
        })
        .then(response => {
          if (response.data.success) {
            this.dicts = response.data.data
          }
        })
    }
  }
}
</script>
