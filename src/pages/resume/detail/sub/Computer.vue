<template>
  <v-sub-parent :subList="dataList" subType="computer" title="计算机技能" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-select prop="certificate" v-model="props.item.certificate" :option="dicts.computerCertificate" label="证书名称" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-date-picker prop="obtainDate" v-model="props.item.obtainDate" label="取得时间" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="level" v-model="props.item.level" :option="dicts.computerProficiency" label="掌握程度" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <c-input prop="detail" type="textarea" v-model="props.item.detail" label="详细说明" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        certificate: { required: true, message: '请填写证书名称' },
        obtainDate: { required: true, message: '请选择取得时间' },
        level: { required: true, message: '请选择掌握程度' }
      },
      formBean: {
        certificate: null,
        obtainDate: null,
        level: null,
        detail: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  components: {
    vSubParent
  }
}
</script>
