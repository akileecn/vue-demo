<template>
  <div>
    <label>用户名：</label>
    <input type="text" name="username" :v-model="userForm.username" placeholder="请输入身份证号码/邮箱/手机号码">
    <label>密码：</label>
    <input type="password" name="password" v-model="userForm.password">
    <label>验证码：</label>
    <input type="text" name="captcha" v-model="userForm.captcha"/>
    <img class="captcha-img" :src="captchaImage"/>
    <button @click="changeCaptcha">换一张</button>
    <button>忘记密码?</button>
    <button>登陆</button>
    <button>注册</button>
  </div>
</template>

<script>
import C from '@/components/constants'

export default {
  name: 'Login',
  data() {
    return {
      captchaImage: C.host + '/user/captchaImage.png',
      userForm: {
        username: null,
        password: null,
        captcha: null
      }
    }
  },
  methods: {
    changeCaptcha() {
      this.captchaImage = C.host + '/user/captchaImage.png?r=' + Math.random()
    }
  }
}
</script>

<style scoped>
.captcha-img {
  width: 50px;
  height: 30px;
}
</style>
