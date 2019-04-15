import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



var moda = {
	// vuex中的store分模块管理，需要在store的index.js中引入各个模块，
	// 为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，
	// 之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
	namespaced: true,

	state: {
		aa:'abcdefg'
	}
}






/* kone point： vuex 知识点统一写在这里

引用 vuex
1、npm install vuex -s
2、创建 Vuex.Store （就在本脚本）
3、import store from './vuexStore' 然后注入到 new Vue 实例里面
4、搞定，组件、页面通过 this.$store 访问
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
*/

export default new Vuex.Store({
	// 
	state: {
    	count: 'storeCount'  // 访问 ： this.$store.state.count
	},

	// 
 	getters: {
 		dCount (state) {   // 访问 ： this.$store.getters.dCount
 			return state.count + '-get'
 		}	
	},

	// 设置值，通过 this.$store.commit('increment', 5) 访问
	mutations: {
		increment (state, val) {
			state.count += val
		}
	},

	modules: {
		moda
	}
})