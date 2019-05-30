<template>
  <div class="page page-home test">
    <div>首页（遍历路由）</div>
    <div class="list" v-for="(item, index) in routes" :key="index">
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
