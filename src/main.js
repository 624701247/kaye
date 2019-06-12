// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* kone point ：转码器，将ES6代码转为ES5代码，
  放在最顶，直接引入就行了吗？？
  不知道有什么作用，貌似我这项目默认编译出来就是es5的，亲测能把let编译成var    */
import 'babel-polyfill'

import Vue from 'vue'

//   kone point : @/xx 表示根路径下xx目录； ./xx 表示当前路径下xx目录
import App from './App'
import router from './router' // 简写， 相当于  ./router/index.js
// import './es6syntax'
import * as directives from './advanced/directives'
import store from './vuexStore'

import moment from 'moment'
import Mint from 'mint-ui'
// import config from '@/config'

/*  fundebug : bug监控平台，很叼哦~   https://www.fundebug.com/
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "7f6f43db7cd47e5282e31be3b03de5473f5fa8d540e26e98f339e4f6360df436"
fundebugVue(fundebug, Vue);
*/

/* moment: JavaScript 日期处理类库 */
// 配置的语言
moment.locale('zh-cn')
// console.log('当前时间：', moment().format()) // 就是读浏览器时间
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

Vue.config.productionTip = false

Vue.use(Mint)

/* kone point: 注册全局组件。 任何地方都能使用
Vue.component('runoob', {
  template: '<h1>自定义组件!</h1>'
}) */
Vue.component('App', App)

// 声明外部变量 不然eslint规范会报错
/* global carry */

/* 注册全局过滤器 */
Vue.filter('g_capitalize', carry.capitalize)

/* kone point : 注册全局指令
使用eg： <input v-focus="{bgClr:'red'}" />
*/
Object.keys(directives).forEach(name => {
  Vue.directive(name, directives[name])
})

// kone point : global ：vue 的全局变量，默认是等于 Window
let env = process.env.NODE_ENV
global.isLocal = !(env === 'production')
global.isDemo = (window.location.host.indexOf('aiwanpai') === -1)

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
    show: function () {
      console.log('showwww')
    }
  }
})

/* kone point : 总览
  ### 预加载资源的方案
  1. 请看publish.py，
  2. 请看 build 目录下的 pyBuildConf.js 和 webpack.base.conf.js
  3. 然后打包出来的全局变量 BIN_VER 就会跟样式文件中的 aa.png?xxxx  保持一致

  ### 指令
  绑定属性   v-bind:text、v-bind:src、v-bind:show   缩写    :src

  ### 单向数据流
  数据从父级组件传递给子组件，只能单向绑定。
  子组件内部不能直接修改从父级传递过来的数据。

  子组件如何给父组件传递参数??

  ### 文件目录命名规范
  页面ui 放在 views 目录下，命名 xxxPage.vue
  组件放在 components 目录下， 指定模块才用到的组件也可以放在 views/xxmod/components
  vuex数据模块统一放到一个目录里， 命名 xxxStore.js
  网络通讯api放在 net 目录下，命名 xxxNet.js
  以上好处，找文件方便咯

*/
