<template>
<div class="page page-test">
	{{msg}}
	<button v-on:click="reverseMsg">逆转消息</button>

	<button v-on:click="goHelloPage">跳转路由</button>
	<Hint></Hint>

	<div style="width:2rem; height:1.5rem; background:red; ">
		<button style="width:100%; height:100%; background:rgba(13,13,13,.2); margin:0; padding:0;border:0;" >1</button>
	</div>

	<button v-on:click="onClickUpdatePrj">update prj</button>
	<button v-on:click="onClickAddPrj">add prj</button>
	<button v-on:click="onClickGetPrjList">get prj list</button>
</div>
</template>

<script>
import Vue from 'vue'
import router from "@/router";
import Hint from '@/components/Hint'
import net from '@/utils/net'
// import a from '@/utils/a'

export default {
	name: 'Test',
	data () {
		return {
			msg: 'hello kaye!!!'
		}
	},
	methods: {
		goHelloPage: function() {
			// kone point : 跳转路由，编程式
			// router.push({ name: "HelloWorld"}); 
			router.push({ 
				// path: "helloWorld",   //链接路径
				name: "HelloWorld", //参数name对应 router/index.js 路由表中的name字段
				params: { userId: 123 },
				query: { plan: 'private' }   // 带查询参数，变成 /xxx?plan=private
			});
		}
		,reverseMsg: function () {
			this.msg = this.msg.split('').reverse().join('')
		}
		,onClickUpdatePrj: function() {
			net.updatePrjInfo('blue', function(data) {
				console.log(data)
			})
		}
		,onClickAddPrj: function() {
		}
		,onClickGetPrjList: function() {
			net.getPrjList(function(data) {
				console.log(data)
			})
		}
	},

	//kone point:  注册局部组件。 <Hint> 将只在父模板可用
	// components: { // 写法 1
	// 	'Hint': Hint
	// }
	components: {  //写法 2  更简洁的写法
		Hint
	}
}
</script>



<style scoped lang="less" rel="stylesheet/less">
@clr:green;
.page-test {
	background: @clr;
}
</style>