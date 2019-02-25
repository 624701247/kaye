import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import LoadingPage from '@/components/LoadingPage'
import Test from '@/components/Test'
import PrjMgr from '@/components/PrjMgr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoadingPage', //kone point: name字段用于：  router.push({ name: "HelloWorld"}); 
      component: LoadingPage
    },
    {
      path: '/home/:id',
      name: 'HomePage-id',
      component: HomePage
    },
    {
      path: '/loading',
      name: 'LoadingPage',
      component: LoadingPage
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,{
      path: '/test',
      name: 'Test',
      component: Test
    }
    ,{
      path: '/prj-mgr',
      name: 'PrjMgr',
      component: PrjMgr
    }
  ]
})

