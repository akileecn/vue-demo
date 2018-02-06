<template>
  <el-form label-width="80px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="岗位名称">
          <el-input v-model="data.name" readonly></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="招聘区域">
          <el-input v-model="data.t.department" readonly></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="工作地点">
          <el-input v-model="data.t.workCity" readonly></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="工作年限">
          <el-input v-model="data.t.workYear" readonly></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="学历要求">
          <el-input v-model="data.t.education" readonly></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="招聘人数">
          <el-input v-model="data.peopleNumber" readonly></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="发布时间">
          <el-input v-model="data.publishDate" readonly></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="截止时间">
          <el-input v-model="data.endDate" readonly></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="职责描述" style="width:100%">
      <el-input type="textarea" v-model="data.description" readonly :rows="5" resize="none"></el-input>
    </el-form-item>
    <el-form-item label="任职要求">
      <el-input type="textarea" v-model="data.requirement" readonly :rows="5" resize="none"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'JobDetail',
  props: ['data']
}
</script>
