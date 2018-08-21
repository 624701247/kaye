<template>
<div class="page page-loading" v-show="visible">
</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'LoadingPage',
	data () {
		return {
			visible:false
		}
	},
	methods: {
		
	},
	created() {
		
	},
	mounted() {
		this.visible = true
	},
	beforeDestroy() {
		
	}
}
</script>



<style scoped lang="less" rel="stylesheet/less">
.page-loading {
	background: #58C3D5 url(../../static/bg_l.png) center bottom  no-repeat;
	/* background: #58C3D5 url(../assets/bg_l.png) center bottom  no-repeat;*/
	background-size: cover;
}
</style>