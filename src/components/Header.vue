<template>
	<el-menu :default-active="activeIndex" mode="horizontal" :router="true">
		<el-menu-item index="/">首页</el-menu-item>
		<el-menu-item index="/job/list/campus">校园招聘</el-menu-item>
		<el-menu-item index="/job/list/society">社会招聘</el-menu-item>
		<el-menu-item index="/job/list/trainee">实习生招聘</el-menu-item>
		<el-menu-item index="4">认识瑞丰</el-menu-item>
	</el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return { activeIndex: null }
  },
  methods: {}
}
</script>

<style scoped>

</style>
