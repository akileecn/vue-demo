<template>
  <el-card>
    <!-- 头部 -->
    <div slot="header">
      <span>我的简历</span>
      <div class="fr">
        <router-link to="/">
          <el-button type='text'>首页</el-button>
        </router-link>
        <el-button type='text'>我的简历</el-button>
      </div>
    </div>
    <!-- 表单 -->
    <el-form :model="resume" :rules="rules" ref="baseForm" label-width="120px">
      <el-row>
        <el-col :span="12">
          <c-input prop="name" v-model="resume.name" label="姓名" :editable="editable" />
          <c-select prop="gender" v-model="resume.gender" :option="dicts.gender" label="性别" :editable="editable" />
          <c-date-picker prop="birthday" v-model="resume.birthday" label="出生日期" :editable="editable" />
          <c-select prop="nation" v-model="resume.nation" :option="dicts.nation" label="民族" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <!-- 头像 -->
            <v-upload-avatar :resumeId="resumeId"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input-number prop="height" v-model="resume.height" label="身高(cm)" :editable="editable"/>
        </el-col>
        <el-col :span="12">
          <c-input-number prop="weight" v-model="resume.weight" label="体重(kg)" :editable="editable"/>
        </el-col>
      </el-row>
      <el-row>
        <c-input prop="idNumber" v-model="resume.idNumber" label="身份证号码" :editable="editable" />
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-city-select prop="nativePlace" type="p" v-model="resume.nativePlace" label="籍贯" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-city-select prop="registeredResidence" type="p" v-model="resume.registeredResidence" label="户口所在地" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="marriage" v-model="resume.marriage" :option="dicts.marriage" label="婚姻状况" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="politicsStatus" v-model="resume.politicsStatus" :option="dicts.politicsStatus" label="政治面貌" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-date-picker prop="joinPartyDate" v-model="resume.joinPartyDate" label="入党(团)时间" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="mobile" v-model="resume.mobile" label="移动电话" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-date-picker prop="beginWorkDate" v-model="resume.beginWorkDate" label="参加工作时间" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-input-number prop="workYear" v-model="resume.workYear" label="参加工作年限" :editable="editable"/>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="email" v-model="resume.email" label="电子邮箱" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="highestEducation" v-model="resume.highestEducation" :option="dicts.highestEducation" :label="highestEducationLabel" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="highestDegree" v-model="resume.highestDegree" :option="dicts.degree" :label="highestDegreeLabel" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="beginSchoolDate" v-model="resume.beginSchoolDate" label="开始时间" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="graduateDate" v-model="resume.graduateDate" :label="graduateDateLabel" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="school" v-model="resume.school" :label="schoolLabel" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="schoolType" v-model="resume.schoolType" :option="dicts.schoolType" label="院校类别" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="major" v-model="resume.major" label="专业" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-city-select prop="ceeProvince" type="p" v-model="resume.ceeProvince" label="高考省市" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-date-picker prop="ceeYear" type="year" v-model="resume.ceeYear" label="高考年份" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="ceeScore" v-model="resume.ceeScore" label="高考分数" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-radio prop="isFirstLine" v-model="resume.isFirstLine" label="是否一本分数线以上" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-select prop="artsOrScience" v-model="resume.artsOrScience" :option="dicts.artsOrScience" label="文理科" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-select prop="admissionOrder" v-model="resume.admissionOrder" :option="dicts.admissionOrder" label="录取批次" :editable="editable" />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <c-input prop="emergencyContact" v-model="resume.emergencyContact" label="紧急联系人" :editable="editable" />
        </el-col>
        <el-col :span="12">
          <c-input prop="emergencyMobile" v-model="resume.emergencyMobile" label="紧急联系人电话" :editable="editable" />
        </el-col>
      </el-row>
      <c-radio prop="isRelativeHere" v-model="resume.isRelativeHere" label="是否有亲友受雇于本公司" :editable="editable" />
      <c-city-select prop="currentResidence" v-model="resume.currentResidence" label="现居住地址" :editable="editable" />
      <c-city-select prop="familyResidence" v-model="resume.familyResidence" label="家庭住址" :editable="editable" />
      <c-input prop="certificate" type="textarea" v-model="resume.certificate" label="持证情况" :editable="editable" />
      <c-input prop="hobby" type="textarea" v-model="resume.hobby" label="爱好特长" :editable="editable" />
      <c-input prop="personality" type="textarea" v-model="resume.personality" label="性格特点" :editable="editable" />
      <el-form-item>
        <el-button @click="saveBase" type='primary'>保存</el-button>
        <el-button @click="resetForm('baseForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import vUploadAvatar from '@/pages/resume/UploadAvatar'

export default {
  data() {
    return {
      resume: {
        registeredResidence: null
      },
      editable: true,
      dicts: {}
    }
  },
  props: ['resumeId', 'recruitType'],
  computed: {
    highestEducationLabel() {
      return 'trainee' == this.recruitType ? '目前就读学历' : '最高全日制学历'
    },
    highestDegreeLabel() {
      return 'trainee' == this.recruitType ? '预计取得学位' : '最高学位'
    },
    graduateDateLabel() {
      return 'trainee' == this.recruitType ? '预计毕业时间' : '毕业时间'
    },
    schoolLabel() {
      return 'trainee' == this.recruitType ? '所在院校' : '毕业院校'
    },
    rules() {
      let validateIdNumber = (rule, value, callback) => {
        const b = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        const lasts = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        const regx = /\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}[0-9xX]/
        if (regx.test(value)) {
          let sum = 0
          for (let i = 0; i < b.length; i++) {
            sum += value[i] * b[i]
          }
          let last = lasts[sum % 11]
          if (value[17].toUpperCase() == last) {
            return callback()
          }
        }
        return callback(new Error())
      }
      return {
        name: [
          { required: true, message: '请填写姓名' },
          { max: 32, message: '长度小于32个字符' }
        ],
        gender: { required: true, message: '请选择性别' },
        birthday: { required: true, message: '请选择出生日期' },
        nation: { required: true, message: '请选择民族' },
        height: {
          required: true,
          type: 'integer',
          message: '请填写整数身高'
        },
        weight: {
          required: true,
          type: 'integer',
          message: '请填写整数体重'
        },
        idNumber: {
          required: true,
          validator: validateIdNumber,
          message: '请填写有效身份证号码'
        },
        nativePlace: { required: true, message: '请选择籍贯' },
        registeredResidence: { required: true, message: '请选择户口所在地' },
        marriage: { required: true, message: '请选择婚姻状况' },
        politicsStatus: { required: true, message: '请选择政治面貌' },
        joinPartyDate: {},
        mobile: {
          required: true,
          pattern: /^1\d{10}$/,
          message: '请填写有效移动电话'
        },
        beginWorkDate: { required: true, message: '请选择参加工作时间' },
        workYear: { required: true, message: '请选择参加工作年限' },
        email: [
          { required: true, message: '请填写有效电子邮箱' },
          { max: 32, message: '长度小于32个字符' }
        ],
        highestEducation: {
          required: true,
          message: `请选择${this.highestEducationLabel}`
        },
        highestDegree: {
          required: true,
          message: `请选择${this.highestDegreeLabel}`
        },
        beginSchoolDate: { required: true, message: '请选择开始时间' },
        graduateDate: {
          required: true,
          message: `请选择${this.graduateDateLabel}`
        },
        school: { required: true, message: `请填写${this.schoolLabel}` },
        schoolType: { required: true, message: '请选择院校类别' },
        major: [
          { required: true, message: '请填写专业' },
          { max: 32, message: '长度小于32个字符' }
        ],
        ceeProvince: { required: true, message: '请选择高考省市' },
        ceeYear: { required: true, message: '请选择高考年份' },
        ceeScore: { required: true, message: '请填写高考分数' },
        isFirstLine: { required: true, message: '请选择是否一本分数线以上' },
        artsOrScience: { required: true, message: '请选择文理科' },
        admissionOrder: { required: true, message: '请选择录取批次' },
        emergencyContact: [
          { required: true, message: '请填写紧急联系人' },
          { max: 32, message: '长度小于32个字符' }
        ],
        emergencyMobile: { required: true, message: '请填写紧急联系人电话' },
        isRelativeHere: {
          required: true,
          message: '请选择是否有亲友受雇于本公司'
        },
        currentResidence: { required: true, message: '请填写现居住地址' },
        familyResidence: { required: true, message: '请填写家庭住址' },
        certificate: { max: 500, message: '长度小于500个字符' },
        hobby: { max: 500, message: '长度小于500个字符' },
        personality: { max: 500, message: '长度小于500个字符' }
      }
    }
  },
  components: {
    vUploadAvatar
  },
  created() {
    this.loadDicts()
  },
  methods: {
    loadDicts() {
      this.$http
        .get('/translate/dicts', {
          params: {
            types:
              'gender,nation,marriage,politicsStatus,highestEducation,degree,schoolType,artsOrScience,admissionOrder'
          }
        })
        .then(response => {
          if (response.data.success) {
            this.dicts = response.data.data
          }
        })
    },
    saveBase() {
      this.$refs['baseForm'].validate(valid => {
        console.log(valid)
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
