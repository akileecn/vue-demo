<template>
  <v-sub-parent :subList="dataList" subType="foreignLanguage" title="外语水平" :resumeId="resumeId" :rules="rules" :formBean="formBean">
    <template slot-scope="props">
      <el-row>
        <el-col :span="12">
          <c-select prop="level" v-model="props.item.level" :option="dicts.languageLevel" label="英语等级" :editable="props.item.editable" />
        </el-col>
        <el-col :span="12">
          <c-input-number prop="score" v-model="props.item.score" label="英语分数" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="proficiency" v-model="props.item.proficiency" :option="dicts.languageProficiency" label="熟练程度" :editable="props.item.editable" />
        </el-col>
      </el-row>
      <c-select-other prop="others" v-model="props.item.others" :option="dicts.language" label="其他语言" :editable="props.item.editable" />
    </template>
  </v-sub-parent>
</template>

<script>
import vSubParent from './SubParent'

export default {
  data() {
    return {
      rules: {
        level: { required: true, message: '请选择英语等级' },
        score: { required: true, message: '请填写英语分数' }
      },
      formBean: {
        level: null,
        score: null,
        proficiency: null,
        others: null
      }
    }
  },
  props: ['resumeId', 'recruitType', 'dicts', 'dataList'],
  components: {
    vSubParent
  }
}
</script>
