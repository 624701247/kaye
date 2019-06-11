/* kone point :  axios的知识点  */
/* global carry */
import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'

const baseUrl = 'http://10.1.162.125:8588/kaye'

const getBaseParam = () => {
  return {
    t: new Date().getTime()
  }
}

const api = axios.create({
  baseURL: baseUrl,
  timeout: 8000,
  headers: {'Content-Type': 'application/json'},
  params: {
    platform: 'pc'
  }
})

// 添加请求拦截器
api.interceptors.request.use(function (config = {}) {
  // if (carry.checkHasCH(JSON.stringify(config.params || {}))) {
  //   return Promise.reject(new Error('拦截参数有中文'))
  // }
  if (carry.checkHasEmoji(JSON.stringify(config.data || {}))) {
    return Promise.reject(new Error('拦截emoji表情'))
  }

  if (config.needIndicator) {
    Indicator.open()
  }

  config.params = Object.assign(config.params || {}, getBaseParam())
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
api.interceptors.response.use(function (response) {
  response = response || {}
  if (response.config.needIndicator) {
    Indicator.close()
  }
  let data = response.data || {}
  if (response.config.toastMsg) {
    if (data.responseCode !== 0) {
      Toast(data.responseMsg || '未知错误')
    }
  }
  return data
}, function (error) {
  return Promise.reject(error)
})

export default api
