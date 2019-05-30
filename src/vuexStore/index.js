
/* kone point： vuex 知识点统一写在这里

引用 vuex
1、npm install vuex -s
2、创建 Vuex.Store （就在本脚本）
3、import store from './vuexStore' 然后注入到 new Vue 实例里面
4、搞定，组件、页面通过 this.$store 访问
mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
*/

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/userStore'
Vue.use(Vuex)

// var _count = 2

export default new Vuex.Store({
  // 访问 ： this.$store.state.count
  state: {
    count: 6
  },

  // 访问值 ： this.$store.getters.dCount
  getters: {
    gCount (state) {
      return state.count
    }
  },

  // 设置值，通过 this.$store.commit('addCount', 5) 访问
  // 推荐写法：提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
  mutations: {
    addCount (state, val) {
      state.count += val
    }
  },

  // 操作，通过 this.$store.dispatch('initx', {xxx}) 调用
  // 推荐写法： 异步逻辑都应该封装到 action 里面
  actions: {
    initx ({commit, dispatch, state, getters}, payload) {
      state.count++
      console.log('state', state.count)
      console.log('getters', getters.gCount)
      // commit('addCount', 1)
      // dispatch('xxx', '')
      console.log('init x', payload)
    }
  },

  // 分割模块
  modules: {
    user
  }
})
