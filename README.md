# kaye

> A Vue.js prj  learn

> 查看知识点请搜索 kone point

##用 vue-cli 搭建 vue项目
 
1. npm install --global vue-cli
2. 创建vue项目： vue init webpack vuetest  （会有各种配置选项让你录入）
搞定！

##vue整合less
1. 安装  less  和 less-loader
npm install less less-loader --save-dev

2. webpack.dev.conf.js 添加下规则配置

		module: {
			rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
		},


3. vsCode (egret的wing)  装个插件使其识别这样的语法
插件 ： vetur
然后在user setting 添加：

		"files.associations": {
			"*.vue": "vue"
		}


##预加载资源的方案
1. 请看publish.py，
2. 请看 build 目录下的 buildLog.js 和 webpack.base.conf.js
3. 然后打包出来的全局变量 BIN_VER 就会跟样式文件中的 aa.png?xxxx  保持一致
##########   kone todo 请有空继续研究，改成全部用js来写自动化批处理。








## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
###### 开发运行
npm run dev

# build for production with minification
###### 打包运行
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
