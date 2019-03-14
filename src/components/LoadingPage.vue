<template>
<div class="page page-loading" v-show="visible">
	<img src="../assets/logo.png" />
	<img v-bind:src="bs18Url" />
	<img src="../assets/bg_loading.png" style="width:1rem;height:1rem;" />
</div>
</template>

<script>
// import Vue from 'vue'

export default {
	name: 'LoadingPage',
	data () {
		return {
			visible:false,
			isResLoadOk: false,

			/*kone point: 使用 v-bind:src 动态绑定图片url是，需要 require 下资源，
			或者写成： import bs18Url from '../assets/bs_18.jpg'
			如果直接   bs18Url: '../assets/bs_18.jpg'   这样是不行的哦，编译出来路径不对哦~！
			*/ 
			bs18Url: require('../assets/bs_18.jpg')
		}
	},
	methods: {
		
	},
	created() {
		// 加载加载页面需要的资源
		carry.loadImgByAry(['bg_loading.png', 'logo.png', 'bs_18.jpg'], function(count, totalCount) {
			console.log(count, totalCount, 'per loading')
			if(count == totalCount) {
				this.visible = true
			}
		}.bind(this))

		// 加载其他页面需要的资源
		carry.loadImgByAry([], function(count, totalCount) {
			if(count == totalCount) {
				this.isResLoadOk = true
			}
		}.bind(this))
	},
	mounted() {
	},
	beforeDestroy() {
	}
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "../css/global.less";

.page-loading {
	/* kone point  vue下面 css、less的知识点：*/

	/*
	src/assets  跟 static 的区别：
	static/ 目录下的文件并不会被 Webpack 处理：它们会直接被复制到最终目录（默认是dist/static）下。必须使用绝对路径引用这些文件
	src/assets 就可以使用相对路径咯，打包时webpack会处理路径问题。
	*/ 



	/*  background: #58C3D5 url(../../static/bg_l.png) center bottom  no-repeat;  错误写法，开发运行没问题，打包出来就不行了。 */
	/*这样写开发运行没问题，打包出来路径就错了，需要改下配置： build/utils.js  vue-style-loader 哪里加上一句 publicPath: '../../'  */
 	background: #58C3D5 url(../assets/bg_loading.png) center bottom  no-repeat;




	/*前缀带~的URL 会被当成模块请求, 类似于require('some-module/image.png'). */
	background: url('~../assets/bg_loading.png') center bottom  no-repeat;



	background-size: cover;
}
</style>
