<template>
  <div id="app">
    <el-container>
      <el-header><v-header/></el-header>
      <el-main><router-view/></el-main>
      <el-footer><v-footer/></el-footer>
    </el-container>
  </div>
</template>

<script>
import vFooter from '@/components/Footer'
import vHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    vFooter,
    vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1140px;
  margin: 0 auto;
}
</style>
