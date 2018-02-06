<template>
  <el-card class="index-login">
    <!-- 登录成功 -->
    <div v-if="isLogin">
      <div>
        <span>欢迎回来！{{loginData.name}}</span>
        <el-button id='notice-count-btn' type='text'>您有{{loginData.noticeCount}}个新通知</el-button>
      </div>
      <div id="login-success-btns">
        <el-button type='primary' icon='el-icon-circle-plus-outline' @click="$router.push('/user/resume/list')">我的简历</el-button>
        <el-button type='success' icon='el-icon-bell'>我的通知</el-button>
        <el-button type='info' @click="logout">退出登录</el-button>
      </div>
    </div>
    <!-- 未登录 -->
    <div v-else>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="70px">
        <el-form-item prop="username" label="用户名">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入身份证号码/邮箱/手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="captcha" label="验证码">
          <el-input type="text" v-model="loginForm.captcha"></el-input>
          <img class="captcha-img" :src="captchaImage"/>
          <el-button @click="changeCaptcha" type="text">换一张</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type='primary'>登陆</el-button>
          <el-button type='primary'>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import api from '@/components/api'
import qs from 'querystring'

export default {
  name: 'Login',
  data() {
    return {
      // 是否登录成功
      isLogin: false,
      loginData: {
        name: '',
        noticeCount: 0
      },
      // 二维码链接
      captchaImage: api.host + '/user/captchaImage.png',
      // 登录表单
      loginForm: {
        username: '18658240213',
        password: '234wer',
        captcha: '1'
      },
      // 表单验证
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          {
            min: 6,
            max: 32,
            message: '长度在 6 到 32 个字符',
            trigger: 'change'
          }
        ],
        password: {
          required: true,
          pattern: /^(?![^a-zA-Z]+$)(?!\D+$)[a-zA-Z\d]{6,16}$/,
          message: '密码至少含字母和数字,长度为6-16',
          trigger: 'change'
        },
        captcha: {
          required: true,
          message: '请输入验证码',
          trigger: 'change'
        }
      }
    }
  },
  methods: {
    changeCaptcha() {
      this.captchaImage = api.host + '/user/captchaImage.png?r=' + Math.random()
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$http
            .post('/user/login', qs.stringify(this.loginForm))
            .then(response => {
              if (response.data.success) {
                let data = response.data.data
                this.isLogin = true
                this.loginData.name = data.name
                this.loginData.noticeCount = data.noticeCount
              } else {
                this.$message({
                  message: response.data.message,
                  type: 'warning'
                })
              }
            })
        } else {
          return false
        }
      })
    },
    logout() {
      this.$http.post('/user/logout').then(response => {
        console.log(response.data)
        if (response.data.success) {
          this.isLogin = false
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

<style scoped>
.captcha-img {
  width: 50px;
  height: 30px;
}
#login-success-btns .el-button {
  width: 100%;
  margin: 5px 0;
}
#notice-count-btn {
  float: right;
}
</style>
