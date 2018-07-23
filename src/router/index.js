import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import PrjMgr from '@/components/PrjMgr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
    ,{
      path: '/',
      name: 'Home',
      component: Home
    }
    ,{
      path: '/prj-mgr',
      name: 'PrjMgr',
      component: PrjMgr
    }
  ]
})

