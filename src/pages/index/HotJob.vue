<template>
  <el-card class="index-hot-job">
    <div slot="header">
      <span>热招职位</span>
      <el-button v-if="hasPrevious" @click="toPrevious" type="text">上一页</el-button>
      <el-button v-if="hasNext" @click="toNext" type="text">下一页</el-button>
    </div>
    <div>
      <el-tag v-for="item in hotList" :key="item.id">{{item.name}}</el-tag>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'HotJob',
  data() {
    return {
      hotList: [],
      pageNum: 1,
      pages: 0
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    hasPrevious() {
      return this.pageNum != 1
    },
    hasNext() {
      return this.pages > this.pageNum
    }
  },
  methods: {
    loadData() {
      this.$http
        .get('/job/hotList', {
          params: { pageNum: this.pageNum }
        })
        .then(response => {
          if (response.data.success) {
            let data = response.data.data
            this.hotList = data.list
            this.pageNum = data.pageNum
            this.pages = data.pages
          }
        })
    },
    toPrevious() {
      this.pageNum--
      this.loadData()
    },
    toNext() {
      this.pageNum++
      this.loadData()
    }
  }
}
</script>
<style scoped>
.el-button {
  float: right;
  padding: 3px 0;
}
</style>
