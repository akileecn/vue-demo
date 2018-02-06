<template>
	<el-menu :default-active="activeIndex" mode="horizontal" :router="true" @select="handleSelect">
		<el-menu-item index="/">首页</el-menu-item>
		<el-menu-item index="/job/campus/list">校园招聘</el-menu-item>
		<el-menu-item index="/job/society/list">社会招聘</el-menu-item>
		<el-menu-item index="/job/trainee/list">实习生招聘</el-menu-item>
		<el-menu-item index="/user/resume/list">认识瑞丰</el-menu-item>
	</el-menu>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    activeIndex() {
      let index = localStorage.getItem('activeIndex')
      return index ? index : '/'
    }
  },
  methods: {
    handleSelect(index) {
      localStorage.setItem('activeIndex', index)
    }
  }
}
</script>
