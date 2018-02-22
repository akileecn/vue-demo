<template>
  <img v-if="!editable" :src="imageUrl" :onerror="onerror" class="avatar">
  <el-upload v-else
    class="avatar-uploader"
    :action="uploadUrl"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" :onerror="onerror" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    <div slot="tip">只能上传jpg/png文件，且不超过50kb</div>
  </el-upload>
</template>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 142px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 142px;
  height: 178px;
  display: block;
}
</style>

<script>
import api from '@/components/api'

export default {
  data() {
    return {
      name: 'UploadAvatar',
      uploadImageUrl: null
    }
  },
  props: ['resumeId', 'editable'],
  computed: {
    imageUrl() {
      return this.uploadImageUrl
        ? this.uploadImageUrl
        : `${api.host}/resume2/photo/show?id=${this.resumeId}`
    },
    uploadUrl() {
      return `${api.host}/resume2/photo/upload?id=${this.resumeId}`
    },
    onerror() {
      return `this.src='${api.host}/images/pic_tx.jpg'`
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.uploadImageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isValidType =
        file.type === 'image/jpeg' || file.type === 'image/png'
      const isValidSize = file.size / 1024 <= 50
      if (!isValidType) {
        this.$message.error('上传头像图片只能是jpg/png格式!')
      }
      if (!isValidSize) {
        this.$message.error('上传头像图片大小不能超过50kb!')
      }
      return isValidType && isValidSize
    }
  }
}
</script>
