<template>
  <el-card>
    <div slot="header">
      <span>教育经历(从最高学历填至本科或大专)</span>
    </div>
    <div v-for="(item, index) in formList" :key="index">
      <el-form :model="item" :rules="rules" ref="form" label-width="120px" class="form">
        <el-form-item>
          <el-button @click="deleteForm(index)" type="danger" icon="el-icon-delete" class="fr"/>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <c-input prop="schoolName" v-model="item.schoolName" label="学校名称" :editable="item.editable" />
          </el-col>
          <el-col :span="12">
            <c-input prop="major" v-model="item.major" label="所学专业" :editable="item.editable" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <c-select prop="graduateType" v-model="item.graduateType" :option="dicts.graduateType" label="毕业方式" :editable="item.editable" />
          </el-col>
          <el-col :span="12">
            <c-select prop="degree" v-model="item.degree" :option="dicts.degree" label="学位" :editable="item.editable" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <c-select prop="education" v-model="item.education" :option="dicts.education" label="学历" :editable="item.editable" />
          </el-col>
          <el-col :span="12">
            <c-select prop="learnType" v-model="item.learnType" :option="dicts.learnType" label="学习形式" :editable="item.editable" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <c-date-picker prop="beginDate" v-model="item.beginDate" label="开始时间" :editable="item.editable" />
          </el-col>
          <el-col :span="12">
            <c-date-picker prop="endDate" v-model="item.endDate" label="结束时间" :editable="item.editable" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <c-select prop="schoolType" v-model="item.schoolType" :option="dicts.schoolType" label="学校类别" :editable="item.editable" />
          </el-col>
          <el-col v-if="recruitType != 'society'" :span="12">
            <c-radio prop="hasBeenCadre" v-model="item.hasBeenCadre" label="是否担任过学生干部" :editable="item.editable" />
          </el-col>
        </el-row>
        <el-row  v-if="recruitType != 'society'">
          <el-col :span="12">
            <c-select prop="gradeRank" v-model="item.gradeRank" :option="dicts.gradeRank" label="年级排名" :editable="item.editable" />
          </el-col>
        </el-row>
        <el-form-item v-if="item.editable">
          <el-button @click="saveForm(index)" type='primary'>保存</el-button>
          <el-button @click="resetForm(index)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="add" type='success' icon="el-icon-circle-plus-outline" class="fr add-button">添加</el-button>
  </el-card>
</template>

<script>
import qs from 'querystring'
import utils from '@/components/utils'

export default {
  data() {
    return {
      editable: true,
      formList: [],
      rules: {
        schoolName: { required: true, message: '请填写学校名称' },
        major: { required: true, message: '请填写所学专业' },
        graduateType: { required: true, message: '请选择毕业方式' },
        degree: { required: true, message: '请选择学位' },
        education: { required: true, message: '请选择学历' },
        learnType: { required: true, message: '请选择学习形式' },
        beginDate: { required: true, message: '请选择开始时间' },
        endDate: { required: true, message: '请选择结束时间' },
        schoolType: { required: true, message: '请选择学校类别' },
        hasBeenCadre: { required: true, message: '请选择是否担任过学生干部' },
        gradeRank: { required: true, message: '请选择年级排名' }
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'educationList'],
  watch: {
    educationList(value) {
      if (value) {
        value.forEach(item => {
          this.formList.push(utils.fill(this.createForm(false), item))
        })
      }
    }
  },
  methods: {
    createForm(editable) {
      return {
        id: null,
        resumeId: this.resumeId,
        editable: editable,
        schoolName: null,
        major: null,
        graduateType: null,
        degree: null,
        education: null,
        learnType: null,
        beginDate: null,
        endDate: null,
        schoolType: null,
        hasBeenCadre: null,
        gradeRank: null
      }
    },
    add() {
      this.formList.push(this.createForm(true))
    },
    resetForm(index) {
      this.$refs['form'][index].resetFields()
    },
    saveForm(index) {
      this.$refs['form'][index].validate(valid => {
        if (!valid) {
          return
        }
        let form = this.formList[index]
        this.$http
          .post('/resume2/save/education', qs.stringify(form))
          .then(response => {
            if (response.data.success) {
              form.editable = false
              form.id = response.data.data
            } else {
              this.$message({
                message: response.data.message,
                type: 'warning'
              })
            }
          })
      })
    },
    deleteForm(index) {
      let form = this.formList[index]
      if (form.id) {
        this.$confirm('是否确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http
            .post(
              '/resume2/delete/education',
              qs.stringify({ id: form.id, resumeId: form.resumeId })
            )
            .then(response => {
              if (response.data.success) {
                this.formList.splice(index, 1)
              } else {
                this.$message({
                  message: response.data.message,
                  type: 'warning'
                })
              }
            })
        })
      } else {
        this.formList.splice(index, 1)
      }
    }
  }
}
</script>

<style scoped>
.form {
  border-bottom: 1px dashed #606266;
  margin-bottom: 20px;
}
.add-button {
  margin-bottom: 20px;
}
</style>


