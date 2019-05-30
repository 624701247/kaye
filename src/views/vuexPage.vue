<style scoped lang="less" rel="stylesheet/less">
.page-vuex {
  background: white;
  text-align: left;
}
</style>

<template>
<div class="page page-vuex">
  <div>state单次赋值：{{count}}</div>
  <div>mapGetters值绑定：{{gCount}}</div>
  <button @click="ontapComm">commit</button>
  <button @click="ontapDisp">dispatch</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'vuexPage',
  data () {
    return {
      count: this.$store.state.count // 单次辅值，后面state的值改变不会传导过来
    }
  },
  methods: {
    ontapComm () {
      this.$store.commit('addCount', 5)
    },
    ontapDisp () {
      this.$store.dispatch('initx', {a: 1})
    }
  },
  computed: {
    //  vuex 那边数据变化这边也会跟着刷新
    ...mapGetters({
      gCount: 'gCount'
    })
  }
}
</script>
