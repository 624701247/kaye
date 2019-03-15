// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/*kone point ：　转码器，将ES6代码转为ES5代码，
	放在最顶，直接引入就行了吗？？ 
	不知道有什么作用，貌似我这项目默认编译出来就是es5的，亲测能把let编译成var    */
// import 'babel-polyfill'  

import Vue from 'vue'

//   kone point :	@/xx 表示根路径下xx目录；	./xx 表示当前路径下xx目录
import App from './App'
import router from './router'   //简写， 相当于  ./router/index.js
import ToolBar from './components/ToolBar'
import RuleDlg from '@/components/RuleDlg'  
import './es6syntax'
import * as directives from './advanced/directives'

import store from './vuexStore'

import moment from 'moment'
import Mint from 'mint-ui'


/*  fundebug : bug监控平台，很叼哦~   https://www.fundebug.com/
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "7f6f43db7cd47e5282e31be3b03de5473f5fa8d540e26e98f339e4f6360df436"
fundebugVue(fundebug, Vue);
*/

/* moment: JavaScript 日期处理类库 */ 
// 配置的语言
moment.locale('zh-cn')
console.log('当前时间：', moment().format() )   //就是读浏览器时间
console.log( moment().format('MMMM Do YYYY, h:mm:ss a') )

Vue.config.productionTip = false

/**/ 
Vue.use(Mint)

/*kone point: 注册全局组件。 任何地方都能使用
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
})*/
Vue.component(ToolBar.name, ToolBar)
Vue.component('RuleDlg', RuleDlg)
Vue.component('App', App)



/* 注册全局过滤器 */ 
Vue.filter('g_capitalize', carry.capitalize)


/* kone point : 注册全局指令 
使用： <input v-focus="{bgClr:'red'}" /> 
*/ 
Object.keys(directives).forEach(name => {
  Vue.directive(name, directives[name])
})


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件, 
	// 注意： 这里名字不能自定义啊，一定要按指定的名字！！！！
	store,
	components: { App },
	template: '<App/>',
	data: {
		foo: 'foo'
	},
	methods: {
		show: function() {
			console.log('showwww')
		}
	}
})

// kone point : global ：vue 的全局变量，默认是等于 Window
console.log('global', global)
// node环境变量（在浏览器控制直接输入查看不了的）
console.log('NODE_ENV : ', process.env.NODE_ENV)


/* kone point : 总览
	###  多个视图依赖于同一状态
	来自不同视图的行为需要变更同一状态。
	解决以上两点需求 方案 a : Vuex 、  方案 b : store模式(详细请看 store.js)


	### 用 vue-cli 搭建 vue项目
	A:
	1. npm install -g vue-cli
	2. 创建vue项目： vue init webpack vuetest  （会有各种配置选项让你录入）
	
	B: 从指定模板中创建项目：
	从本地模板拷贝创建项目，  ./表示当前路径，模板必须放在指定路径下的“template”文件夹内
	vue init ./xx kaye-copy  
	同理，git账号名/模板所在git链接，如果不成功试试 ping github.com 看网络通不通
	vue init kone/https://github.com/624701247/kaye.git kaye-copy 


	### 预加载资源的方案
	1. 请看publish.py，
	2. 请看 build 目录下的 pyBuildConf.js 和 webpack.base.conf.js
	3. 然后打包出来的全局变量 BIN_VER 就会跟样式文件中的 aa.png?xxxx  保持一致
	
	
	### 指令
	绑定属性   v-bind:text、v-bind:src、v-bind:show   缩写    :src
	绑定事件   v-on:click  缩写@click  
	循环  v-for


	### 单向数据流
	数据从父级组件传递给子组件，只能单向绑定。  
	子组件内部不能直接修改从父级传递过来的数据。
	子组件如何给父组件传递参数?? 

*/

