# kaye

> A Vue.js prj  learn

> 查看知识点请搜索 kone point   
> 总览请看 main.js 下面的注释

##用 vue-cli 搭建 vue项目
##### A: 
1. npm install -g vue-cli
2. 创建vue项目： vue init webpack vuetest  （会有各种配置选项让你录入）

##### B: 从指定模板中创建项目：
* 从本地模板拷贝创建项目，  ./表示当前路径，模板必须放在指定路径下的“template”文件夹内
    
		vue init ./xx kaye-copy
    
* 同理，git账号名/模板所在git链接，如果不成功试试 ping github.com 看网络通不通
    
		vue init kone/https://github.com/624701247/kaye.git kaye-copy


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
