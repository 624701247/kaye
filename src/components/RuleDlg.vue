<template>
<div class="dlg dlg-rule" @click="ontapMask">

	<!-- kone point:

	v-on: 绑定事件， 简写 @ 。  例如： v-on:click 或者 @click 

	@click.stop ： 表示阻止该点击事件往下层传播
	@click.native ： 组件绑定原声事件

	v-bind: 绑定属性，简写 : 。 例如 v-bind:class="{'cls1':true}" 或者 :class="{'cls1':true}"

    -->
	<section class="content" :class="{'content-active':true}" @click.stop="ontapContent">
		
	</section>
</div>
</template>

<script>
import Vue from 'vue'
import router from "@/router"
import store from '../store'

export default {
	name: 'RuleDlg',
	data () {
		return {
		}
	},
	methods: {
		ontapMask: function() {
			console.log('tap mask')
			store.hideRuleDlg()
		},
		ontapContent: function() {
			console.log('tap content')
		}
	}
}
</script>



<style scoped lang="less" rel="stylesheet/less">
.dlg-rule {
	.content {
		width: 6rem;
    	height: 6rem;
    	background: #ffffff;
    	margin: auto;
	    border-radius: 0.2rem;
	}
}
</style>