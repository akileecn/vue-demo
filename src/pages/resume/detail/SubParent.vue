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
        <slot :item="item" ></slot>
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
      formList: []
    }
  },
  props: ['resumeId', 'subList', 'rules', 'formBean', 'apiType'],
  watch: {
    subList(value) {
      if (value) {
        value.forEach(item => {
          this.formList.push(utils.fill(this.createForm(false), item))
        })
      }
    }
  },
  methods: {
    createForm(editable) {
      let form = utils.clone(this.formBean)
      form.id = null
      form.resumeId = this.resumeId
      form.editable = editable
      return form
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
          .post('/resume2/save/' + this.apiType, qs.stringify(form))
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
      console.log(form.editable)
      form.editable = !form.editable
      return
      if (form.id) {
        this.$confirm('是否确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http
            .post(
              '/resume2/delete/' + this.apiType,
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


