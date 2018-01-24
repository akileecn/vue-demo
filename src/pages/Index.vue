<template>
  <div>
    <v-login></v-login>
    <v-search-job></v-search-job>
    <v-hot-job></v-hot-job>
  </div>
</template>

<script>
import vHotJob from '@/pages/index/HotJob'
import vSearchJob from '@/pages/index/SearchJob'
import vLogin from '@/pages/index/Login'

export default {
  name: 'Index',
  components: {
    vHotJob,
    vSearchJob,
    vLogin
  }
}
</script>
