<template>
  <div>
    <div>
        <h3>热招职位</h3>
        <button v-if="hasPrevious" @click="toPrevious">上一页</button>
        <button v-if="hasNext" @click="toNext">下一页</button>
        <ul>
          <li v-for="item in hotList" :key="item.id">
            <a :href="'/job/list?recruitType='+item.recruitType+'&id='+ item.id">{{item.name}}</a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import C from '@/components/constants'

export default {
  name: 'HotJob',
  data() {
    return {
      hotList: [],
      pageNum: 1,
      pages: 0
    }
  },
  created() {
    this.loadData()
  },
  computed: {
    hasPrevious() {
      return this.pageNum != 1
    },
    hasNext() {
      return this.pages > this.pageNum
    }
  },
  methods: {
    loadData() {
      this.$http
        .get(C.host + '/job/hotList', {
          params: { pageNum: this.pageNum }
        })
        .then(response => {
          if (response.body.success) {
            let data = response.body.data
            this.hotList = data.list
            this.pageNum = data.pageNum
            this.pages = data.pages
          }
        })
    },
    toPrevious() {
      this.pageNum--
      this.loadData()
    },
    toNext() {
      this.pageNum++
      this.loadData()
    }
  }
}
</script>
