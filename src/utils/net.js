
import axios from 'axios'
console.log('12312net')


var baseUrl = 'http://localhost:8080/bam'

function getTimestamp() {
    return Date.parse(new Date()) / 1000 //+ "" //精确到毫秒的
}

function json2params(json) {
    if (!json) {
        return null
    }
    var params = ''
    for (var key in json) {
        params += key + '=' + json[key] + '&'
    }
    params = params.substr(0, params.length - 1)
    return params
}


//axios post 请求
//@param action: 请求类型
//@param dat:请求的数据，json格式，不能嵌套多级，即{a:{b:1}} 这样是不允许的
function post(action, dat, func) {
    var data = {
        a: action,
        t: getTimestamp(),
        d: JSON.stringify(dat)
    }
    axios({
            method: 'post',
            url: baseUrl,
            data: json2params(data),
            withCredentials: true, //是否携带cookie
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            func(response.data)
        }.bind(this))
}


/**/
function get(action, dat, func) {
    axios.get(baseUrl, {
        params: {
            a: action,
            t: getTimestamp(),
            d: dat
        },
        headers: { 'Content-Type': 'application/json;charset=UTF-8'}
  })
  .then(function (response) {
    func(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
}


function updatePrjInfo(prjName, func) {
    post('prj_update', {prjName:prjName}, func)
}

function getPrjList(func) {
    get('prj_get_list', null, func)
}

export default {
    updatePrjInfo
    ,getPrjList
}
