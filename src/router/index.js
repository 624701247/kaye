import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import LoadingPage from '@/components/LoadingPage'
import Test from '@/components/Test'
import PrjMgr from '@/components/PrjMgr'

Vue.use(Router)

export default new Router({
  // base:'/vh5', //?
  routes: [
    {
      path: '/',
      name: 'LoadingPage', //kone point: 路由name字段用于：router.push({ name: "HelloWorld"}); 
      component: LoadingPage
    }, 
    {
      path: '/loading',
      name: 'LoadingPage',
      // component: LoadingPage
      component:  () => import('@/components/LoadingPage')    //相当于下面的写法
      // component: function() {
      //   return import('@/components/LoadingPage') 
      // }
    },
    {
      path: '/home/:id',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
      children: [{  
        /*kone point : 子路由嵌套 父层必须带上 <router-view> 标签，则访问如下地址时，该路由标签会被替换成对应的子层 */
        path: 'helloWorld', //通过 http://localhost:2019/#/test/helloWorld/ 访问
        // path: '/helloWorld',   //通过 http://localhost:2019/#/helloWorld/ 访问
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

