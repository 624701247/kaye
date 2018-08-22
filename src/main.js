// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

import ToolBar from '@/components/ToolBar'
import RuleDlg from '@/components/RuleDlg'

Vue.config.productionTip = false


//kone point: 注册全局组件。 任何地方都能使用
/*Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})*/
Vue.component('ToolBar', ToolBar)
Vue.component('RuleDlg', RuleDlg)
Vue.component('App', App)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>',
	data: {
		foo: 'foo'
	},
	methods: {
		show: function() {
			console.log('asdf')
		}
	}
})


// var img = new Image()
// img.onload = function() {
// 	console.log('loaded')
// }
// img.src = '../static/bg_l.png'	
// console.log('main init')




/* kone point 
1、
多个视图依赖于同一状态。
来自不同视图的行为需要变更同一状态。
解决以上两点需求 方案 a : Vuex 、  方案 b : store模式(详细请看 store.js)
*/ 



