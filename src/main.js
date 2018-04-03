// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

// widget
import ToolBar from '@/components/widget/ToolBar'

Vue.config.productionTip = false


// 注册全局组件。 任何地方都能使用 
/*Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})*/
Vue.component('ToolBar', ToolBar)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})