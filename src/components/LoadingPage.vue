<template>
<div class="page page-loading" v-show="visible">
	<img src="../assets/logo.png" />
	<img src="../assets/bs_18.jpg" />
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
			isResLoadOk: false
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
	/* kone point  src/assets  跟 static 的区别：
	static/ 目录下的文件并不会被 Webpack 处理：它们会直接被复制到最终目录（默认是dist/static）下。必须使用绝对路径引用这些文件
	src/assets 就可以使用相对路径咯，打包时webpack会处理路径问题。
	*/ 
	/*  background: #58C3D5 url(../../static/bg_l.png) center bottom  no-repeat;  错误写法，开发运行没问题，打包出来就不行了。 */


	/*这样写开发运行没问题，打包出来路径就错了，需要改下配置： build/utils.js  vue-style-loader 哪里加上一句 publicPath: '../../'  */




 	background: #58C3D5 url(../assets/bg_loading.png?234234) center bottom  no-repeat;

 	

 	// background: #58C3D5 url("../assets/bg_loading.png@{g_ver}") center bottom  no-repeat;
 	
 	// .divimg("../assets/bg_loading.png");
 	// background: @clr_bg;

	// background-size: cover;
}
</style>
