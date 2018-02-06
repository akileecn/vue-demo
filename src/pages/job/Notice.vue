<template>
  <el-card>
    <!-- 头部 -->
    <div slot="header">
      <span>{{page.title}}</span>
      <div class="fr">
        <el-button type='text'>{{recruitTypeName}}</el-button>
        <el-button type='text'>招聘公告</el-button>
      </div>
    </div>
    <div>{{page.content}}</div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      dicts: {
        recruitType: {}
      },
      page: {
        title: null,
        content: null
      }
    }
  },
  created() {
    this.$http.get('/job/notice').then(response => {
      if (response.data.success) {
        this.page = response.data.data
      }
    })
    this.$http
      .get('/translate/dicts', {
        params: { types: 'recruitType' }
      })
      .then(response => {
        if (response.data.success) {
          this.dicts = response.data.data
        }
      })
  },
  props: ['recruitType'],
  computed: {
    recruitTypeName() {
      return this.dicts.recruitType[this.recruitType]
    }
  }
}
</script>
