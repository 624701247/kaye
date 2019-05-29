import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import PrjMgr from '@/components/PrjMgr'

import homePage from '@/views/homePage'
// import loadingPage from '@/views/loadingPage'
import lifecyclePage from '@/views/lifecyclePage'

Vue.use(Router)

export default new Router({
  // base:'/vh5', //?
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/loading',
      name: 'loadingPage', // kone point: 路由name字段用于：router.push({ name: "loadingPage"});
      component: () => import('@/views/loadingPage') // 相当于下面的写法
      // component: function() {
      //   return import('@/views/loadingPage')
      // }
    },
    {
      path: '/lifecycle',
      component: lifecyclePage
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children: [{
        /* kone point : 子路由嵌套 父层必须带上 <router-view> 标签，则访问如下地址时，该路由标签会被替换成对应的子层 */
        path: 'helloWorld', // 通过 http://localhost:2019/#/test/helloWorld/ 访问
        // path: '/helloWorld',   //通过 http://localhost:2019/#/helloWorld/ 访问
        name: 'HelloWorld',
        component: HelloWorld
      }, {
        path: '', // 通过 http://localhost:2019/#/test/ 访问 即覆盖了父层的路由
        name: 'HelloWorld',
        component: HelloWorld
      }]
    },
    {
      path: '/prj-mgr',
      name: 'PrjMgr',
      component: PrjMgr
    }
  ]
})
