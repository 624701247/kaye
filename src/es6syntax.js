
/* kone point : es6语法*/

/* 箭头函数： */
var x = () => '我是箭头函数返回'
console.log(x())
/* 相当于
var x = function() {
	return '箭头函数返回'
}
*/

/*async异步函数，默认返回的是一个 Promise 对象*/ 
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


/*async await 一起用，
写异步代码就像写同步代码一样
await 关键字只能放到async 函数里面  */ 
function doubleAfter2seconds(num) {  // 2s 之后返回双倍的值
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2 * num)
        }, 2000);
    } )
}
async function testResult() {
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(30);
    console.log('等待n久，计算结果终于出来了:', first + second + third);
}
testResult()
console.log('计算不阻塞')



const jinx = {}

export default jinx