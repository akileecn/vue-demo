<template>
  <el-card>
    <!-- 头部 -->
    <div slot="header">
      <span>招聘岗位</span>
      <div class="fr">
        <el-button type='text'>{{recruitTypeName}}</el-button>
        <el-button type='text'>招聘岗位</el-button>
      </div>
    </div>

    <!-- 搜索表单 -->
    <el-form inline label-width="80px">
      <c-select v-model="form.workCity" :option="dicts.workCity" label="工作地点"/>
      <c-select v-model="form.education" :option="dicts.searchEducation" label="学历要求"/>
      <c-input v-model="form.name" label="岗位名称"/>
      <el-button @click="search" type='primary'>搜索</el-button>
    </el-form>

    <!-- 数据表单 -->
    <el-table :data="jobList" stripe border style="width:100%">
      <el-table-column prop="name" label="招聘岗位" width="180">
        <template slot-scope="scope">
          <el-button @click="showDetail(scope.row.id)" type="text">{{scope.row.name}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="workCity" label="工作地点" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="right">
            <div style="max-width:400px;">
              <p>职责描述: {{ scope.row.description }}</p>
              <p>任职要求: {{ scope.row.requirement }}</p>
            </div>
            <i slot="reference" class="el-icon-location"></i>
          </el-popover>
          {{dicts.workCity[scope.row.workCity]}}
        </template>
      </el-table-column>
      <el-table-column prop="endDate" label="截止时间" width="180"></el-table-column>
      <el-table-column prop="peopleNumber" label="人数" min-width="60"></el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="apply(scope.row.id)" type="primary">我要应聘</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page.pageNum" :page-sizes="[10, 20, 50]"
      :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.total">
    </el-pagination>
      
    <!-- 详情页 -->
    <el-dialog title="招聘岗位说明" :visible.sync="dialog.visible" center>
      <v-detail :data="dialog.data"/>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.visible = false">取 消</el-button>
        <el-button type="primary" @click="apply(dialog.data.id)">我要应聘</el-button>
      </div>
    </el-dialog>

  </el-card>
</template>

<script>
import qs from 'querystring'
import vDetail from '@/pages/job/Detail'

export default {
  name: 'jobList',
  components: {
    vDetail
  },
  data() {
    return {
      dicts: {
        searchEducation: {},
        workCity: {},
        recruitType: {}
      },
      form: {
        workCity: null,
        education: null,
        pageSize: 10,
        pageNum: 1,
        recruitType: null
      },
      page: {
        total: 0
      },
      dialog: {
        visible: false,
        data: {
          id: null,
          name: null,
          peopleNumber: 0,
          publishDate: null,
          endDate: null,
          description: null,
          requirement: null,
          t: {
            department: null,
            workCity: null,
            workYear: null,
            education: null
          }
        }
      },
      jobList: []
    }
  },
  props: ['recruitType'],
  computed: {
    recruitTypeName() {
      return this.dicts.recruitType[this.recruitType]
    }
  },
  created() {
    this.$watch('recruitType', function(newVal, oldVal) {
      this.form.recruitType = newVal
      this.search()
    })
    this.loadDicts()
    this.form.recruitType = this.recruitType
    this.search()
  },
  methods: {
    loadDicts() {
      this.$http
        .get('/translate/dicts', {
          params: { types: 'searchEducation,workCity,recruitType' }
        })
        .then(response => {
          if (response.data.success) {
            this.dicts = response.data.data
          }
        })
    },
    search() {
      this.$http.post('/job/list', qs.stringify(this.form)).then(response => {
        if (response.data.success) {
          let data = response.data.data
          this.jobList = data.list
          this.page.total = data.total
          this.form.pageNum = data.pageNum
          this.form.pageSize = data.pageSize
        } else {
          this.$message({
            message: response.data.message,
            type: 'warning'
          })
        }
      })
    },
    handleSizeChange(size) {
      this.form.pageSize = size
      this.form.pageNum = 1
      this.search()
    },
    handleCurrentChange(current) {
      this.form.pageNum = current
      this.search()
    },
    apply(jobId) {
      //TODO
    },
    showDetail(jobId) {
      this.$http.get('/job/detail?id=' + jobId).then(response => {
        if (response.data.success) {
          this.dialog.visible = true
          this.dialog.data = response.data.data
        } else {
          this.$message({
            message: response.data.message,
            type: 'warning'
          })
        }
      })
    }
  }
}
</script>
