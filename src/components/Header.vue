<template>
	<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
		<el-menu-item index="1">首页</el-menu-item>
		<el-menu-item index="2">校园招聘</el-menu-item>
		<el-menu-item index="3">社会招聘</el-menu-item>
		<el-menu-item index="4">实习生招聘</el-menu-item>
		<el-menu-item index="5">认识瑞丰</el-menu-item>
	</el-menu>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return { activeIndex: '1' }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
