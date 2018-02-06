<template>
  <el-card>
    <!-- 头部 -->
    <div slot="header">
      <span>我的简历</span>
      <div class="fr">
        <router-link to="/"><el-button type='text'>首页</el-button></router-link>
        <el-button type='text'>我的简历</el-button>
      </div>
    </div>

    <!-- 数据表单 -->
    <el-table :data="resumeList" stripe border style="width:100%">
      <el-table-column prop="name" label="简历类型">
        <template slot-scope="scope">{{scope.row.t.recruitType}}简历</template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.isLocked" type="info">已锁定</el-button>
          <el-button v-else-if="scope.row.isSubmit" type="success">已提交</el-button>
          <el-button v-else type="danger">未提交</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/user/resume/detail/${scope.row.recruitType}/${scope.row.id}`)" type="primary">编辑查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      resumeList: []
    }
  },
  created() {
    this.loadData()
  },
  props: ['recruitType'],
  methods: {
    loadData() {
      this.$http
        .get('/resume2/list', {
          params: { recruitType: this.recruitType }
        })
        .then(response => {
          if (response.data.success) {
            this.resumeList = response.data.data
          }
        })
    },
    showDetail(resumeId) {
      console.log(resumeId)
    }
  }
}
</script>
