import axios from 'axios'
import { Toast  } from 'mint-ui';


/* kone point :  axios的知识点  */ 

const baseUrl = 'http://127.0.0.1:8081/api/'

var getBaseParam = () => {
    return {
        t: 111
    }
}

const paiApi = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
    // method : 'post',
    headers: {
        'Content-Type': 'application/json'
    },
     params: {
         platform: 'pc'
     }
})

// 添加请求拦截器
paiApi.interceptors.request.use(function (config = {}) {
    config.params = Object.assign(config.params || {}, getBaseParam())
    if( carry.checkHasCH( JSON.stringify(config.params) ) ) {
        console.log('参数有中文', config.params)
    }
    return config
}, function (error) {
    console.log('net error', error)
    return Promise.reject(error)
})

// 添加响应拦截器
paiApi.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default {
    login: () => {
        paiApi({
            method: 'post',
            url: baseUrl + 'login',
            params: {name: '三'},
            data: {a:1, b:2,c:3}
        });
    },

    register: () => {
        axios({
            method: 'post',
            url: baseUrl + 'register',
            params: {t: 22222},
            data: 'a=1&b=22',
            /*
            headers {
                'Content-Type': 'application/x-www-form-urlencoded'
                'Content-Type': 'application/json'
            }*/ 
        });
    },

    userInfo: () => {
        /*
        axios({
            method: 'get',
            url: baseUrl + 'uerinfo',
            params: {t: 3333}
        });
        */ 
        paiApi({
            method: 'get',
            url: baseUrl + 'uerinfo',
            params: {t: 3333, mark:'关羽'}
        }).then(function(response) {
            console.log('u info', response.data)
        }).catch(function(error) {
            console.log(error)
        });

    }
}