<template>
  <el-row :gutter="20">
    <!-- 左侧导航 -->
    <el-col :span="6">
      <el-menu :default-openeds="['#']" router>
        <el-submenu index="#">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>个人中心</span>
          </template>
          <el-menu-item index="/user/resume/list">我的简历</el-menu-item>
          <el-menu-item index="/user/resume/detail">我的应聘</el-menu-item>
          <el-menu-item index="./notice/list">我的通知</el-menu-item>
          <el-menu-item index="./changePassword">密码修改</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <!-- 右侧主题 -->
    <el-col :span="18">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>
