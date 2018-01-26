<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16"><v-search-job/></el-col>
      <el-col :span="8"><v-login/></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:20px">
      <el-col :span="16"><v-hot-job/></el-col>
      <el-col :span="8"><el-card class="scan-img-card"><img class="scan-img" src="../../assets/scan_img.jpg"></el-card></el-col>
    </el-row>
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
  },
  created() {
    console.log(typeof XMLHttpRequest)
  }
}
</script>

<style scoped>
.index-search-job,
.index-login {
  height: 300px;
}

.index-hot-job,
.scan-img-card {
  height: 200px;
}
.scan-img {
  margin: auto auto;
  display: block;
}
</style>
