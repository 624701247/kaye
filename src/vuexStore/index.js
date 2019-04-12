import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


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

	mutations: {
		// 设置值，通过 this.$store.commit('increment', 5) 访问
		increment (state, val) {
			state.count += val
		}
	}
})