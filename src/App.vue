<template>
  <div id="app">
    <router-view/>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    vFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
