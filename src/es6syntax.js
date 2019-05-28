
/* kone point : es6语法 */

/* 箭头函数： */
var x = () => '我是箭头函数返回'
console.log(x())
/* 相当于
var x = function() {
	return '箭头函数返回'
}
*/

/* 箭头函数更骚操作 */
var funck = function (pa) {
  return function (pb) {
    console.log('oldFun', pb)
  }
}
funck()('kl')
// 相当于
var funcl = (pa) => (pb) => {
  console.log('newFun', pb)
}
funcl()('kl')
// 相当于
var funcm = pa => pb => {
  console.log('newFun22', pb)
}
funcm()('kl')

/* async异步函数，默认返回的是一个 Promise 对象 */
/* async function() {}  */
var timeout = async (flag) => {
  if (flag) {
    return 'hello world'
  } else {
    throw 'my god, failure'
  }
}
timeout(true).then(result => {
  console.log('then：', result)
})
timeout(false).catch(result => {
  console.log('catch：', result)
})
console.log('虽然在后面，但是我先执行')

/* async await 一起用，
写异步代码就像写同步代码一样
await 关键字只能放到async 函数里面  */
function doubleAfter2seconds (num) { // 2s 之后返回双倍的值
  return new Promise((resolve, reject) => {
    console.log('ddddd', num)
    setTimeout(() => {
      resolve(2 * num)
    }, 2000)
  })
}
async function testResult () {
  let first = await doubleAfter2seconds(30)
  let second = await doubleAfter2seconds(50)
  let third = await doubleAfter2seconds(30)
  console.log('等待n久，计算结果终于出来了:', first + second + third)
}
testResult()
console.log('计算不阻塞')

/**/
function a () {
  var v1 = 'vvv1'
  return {v1}
}
// 得出结果是  {v1: 'vvv1'}
console.log('a', a())

/* 可以跟 ts 一样设置参数默认值 */
var funca = (url = 'http://happy') => {
  console.log('url', url)
}
funca()

/* 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中 */
var bar = { a: 1, b: 2 }
var baz = { ...bar }
console.log(baz) // 打印出： { a: 1, b: 2 }
// 相当于
var bar = { a: 1, b: 2 }
var baz = Object.assign({}, bar)

var bar = {a: 1, b: 2}
var baz = {...bar, ...{a: 2, b: 4}}
console.log(baz) // 打印出： {a: 2, b: 4}  可以很方便的修改对象的部分属性
console.log(bar) // 打印出： {a: 1, b: 2}

const jinx = {}

export default jinx
