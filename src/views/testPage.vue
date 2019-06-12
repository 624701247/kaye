<template>
<div class="page-test">
  <router-view style="position: absolute; width: 100%; height:100%; background: #fff;"></router-view>

  {{msg}}
  <button v-on:click="reverseMsg">逆转消息</button>

  <button v-on:click="goHelloPage">跳转路由</button>

  <div style="width:2rem; height:1.5rem; background:red; ">
    <button style="width:100%; height:100%; background:rgba(13,13,13,.2); margin:0; padding:0;border:0;" >1</button>
  </div>

  <button v-on:click="onClickUpdatePrj">update prj</button>
  <button v-on:click="onClickAddPrj">add prj</button>
  <button v-on:click="onClickGetPrjList">get prj list</button>
</div>
</template>

<script>
// import Vue from 'vue'
import router from '@/router'

export default {
  data () {
    return {
      msg: 'hello kaye!!!'
    }
  },
  methods: {
    goHelloPage: function () {
      /* kone point : 跳转路由、路由间传递参数 */
      // this.$router.push()  //或者
      router.push({
        name: 'HomePage-id',
        // path: "home",   //或者使用链接路径
        params: {id: 88},
        query: { plan: 'private' } // 带查询参数，变成 /xxx?plan=private
      })
      console.log('历史页数量', window.history.length)
      // 使用 this.$router 就可以不 import router 了。
      // this.$router.go(-1) //返回上一页。没什么特别，也是重新渲染上一页，之前的状态并没有保存
      // this.$router.push('/home/22')  跳转页面
      // this.$router.go(0)  // 刷新当前页面

      /*
      第一步：路由注册哪里是这样的： path: '/home/:id', 如果是多个参数就这样： '/home/:p1/:p2/:p3'
      第二步：跳转路由带上参数 this.$router.push({ name: "xxx", params: {id: 88} });
      */

      // 获取传递过来的参数，注意是 route  不是 router
      // this.$route.params
      // this.$route.query
    },
    reverseMsg: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    onClickUpdatePrj: function () {
    },
    onClickAddPrj: function () {
    },
    onClickGetPrjList: function () {
    }
  }

}
</script>

<style scoped lang="less" rel="stylesheet/less">
@clr:green;
.page-test {
  background: @clr;
}
</style>
