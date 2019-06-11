import api from './api'
import store from '@/vuexStore'

export default {
  userinfo: () => {
    return new Promise((resolve, reject) => {
      api({
        method: 'get',
        url: 'userinfo',
        params: {t: 666, mark: 'kone'}, // 链接上参数
        needIndicator: false, // 可以自定义配置
        toastMsg: true
      }).then(function (data) {
        console.log('u info', data)
        store.commit('user/empName', data.name)
      }).catch(function (error) {
        console.log(error)
      }).finally(() => {
        resolve()
      })
    })
  },
  login: (id, psw) => {
    return new Promise((resolve, reject) => {
      api({
        method: 'post',
        url: 'login',
        data: {id: id, psw: psw},
        needIndicator: true,
        toastMsg: true
      }).then(function (data) {
        console.log('u login', data)
        resolve(data)
      }).catch(function (error) {
        console.log(error)
        resolve({})
      })
    })
  }
}

/**
``
*/
