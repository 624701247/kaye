

function abc() {

}

function def() {

}

// kone point : export 这样写
// 写法 1：
// module.exports = { abc, def};

// 写法 2： 推荐写法
export default {
    abc, 
    def
}