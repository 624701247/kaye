/**
 kone point:  关于路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//
import homePage from '@/views/homePage'
// import loadingPage from '@/views/loadingPage'
import lifecyclePage from '@/views/lifecyclePage'
import vuexPage from '@/views/vuexPage'
import axiosPage from '@/views/axiosPage'

//
import helloWorldPage from '@/views/helloWorldPage'
import testPage from '@/views/testPage'

Vue.use(VueRouter)
const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home' // 重定向
    }, {
      path: '/home',
      component: homePage,
      meta: {
        title: 'kaye home'
      }
    }, {
      path: '/loading',
      name: 'loadingPage', // 路由name字段用于：router.push({ name: "loadingPage"});
      component: () => import('@/views/loadingPage') // 相当于下面的写法
      // component: function() {
      //   return import('@/views/loadingPage')
      // }
    }, {
      path: '/lifecycle',
      component: lifecyclePage
    }, {
      path: '/vuex',
      component: vuexPage
    }, {
      path: '/axios',
      component: axiosPage
    }, {
      path: '/test',
      name: 'testPage',
      component: testPage,
      children: [{
        // 子路由嵌套 父层必须带上 <router-view> 标签，则访问如下地址时，该路由标签会被替换成对应的子层
        path: 'helloWorld', // 通过 xxxxx/test/helloWorld/ 访问
        // path: '/helloWorld',     xxxxx/helloWorld/      访问
        component: helloWorldPage
      }, {
        path: '', // 通过 http://localhost:2019/#/test/ 访问 即覆盖了父层的路由
        component: helloWorldPage
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log('_to', to)
  // console.log('_from', from)

  // 根据不同路由 & 不用参数，设置对应的H5标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.query.preview === 'y') {
    document.title += ' preview'
  }

  /**
  // 登录拦截
  if (xxx) {
    return next('/login')
  }
  */

  next()
})

router.afterEach(route => {
  // console.log('_route', route)
})

export default router
