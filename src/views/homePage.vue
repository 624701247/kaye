<template>
  <div class="page page-home">
    <h5>首页（遍历路由）</h5>

    <!-- kone point: v-for 循环指令 -->
    <!--<li v-for="item idx = 0; idx < routes.length; idx++">    不能这样写哦 -->
    <!--<li v-for="item in routes">  可以 -->
    <div class="list" v-for="(item, idx) in routes" :key="idx"> <!-- 标准推荐 -->
      <router-link class="lk" :to="item.path">{{item.path}}</router-link>
      <div v-for="(children, i) in item.children" :key="i">
        <router-link class="lk lk-child" :to="children.path">{{children.path}}</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import router from '../router'

export default {
  data () {
    return {
      routes: router.options.routes
    }
  },
  created () {
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
.list {
  padding: 0.2rem;
  text-align: left;
}
.lk {
  &-child {
    margin-left : 0.2rem;
  }
}
</style>
