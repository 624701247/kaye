<template>
<div class="page page-home">
	<div class="header"></div>
	<section class="content">
		<ToolBar />
		<button @click="ontapRule" >打开规则</button>
		<div>jinx</div>
	</section>
	<div class="footer"></div>
</div>
</template>

<script>
import Vue from 'vue'
import store from '../store'

export default {
	name: 'HomePage',
	data () {
		return { 
			count: 0
		}
	},
	methods: {
		ontapRule() {
			// kone point 调用父组件实例的方法 this.$parent.xxx()
			// this.$parent.showRuleDlg()

			// 调用根组件实例的方法 发送事件。
			this.$root.$emit('my-event', {a:1})

			//
			store.showRuleDlg()
			this.count++
		},
	},
	created() {
		console.log('ui渲染之前')

		/*kone point  路由间传递参数：
		第一步：路由注册哪里是这样的： path: '/home/:id', 
		第二步：跳转路由带上参数 router.push({ name: "xxx", params: {id: 88} }); 
		第三步：this.$route.params.id 拿到传过来的数  */ 
		console.log('参数/id', this.$route.params.id)
		console.log('query', this.$route.query)
	},
	mounted() {
		console.log('ui渲染之后')

		// kone point 注册事件监听
		this.$root.$on('my-event', function(parms) {
			console.log('自定义事件触发了', parms)
		})
	},
	beforeDestroy() {
		console.log('被销毁之前')
	},
	watch: {
		count(val, oldVal) {
			console.log('watch count change', val, oldVal)
		}
	}
}
</script>



<style scoped lang="less" rel="stylesheet/less">
@clr:green;
.page-home {
	background: @clr;
}
</style>