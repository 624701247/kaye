<template>
<div class="page page-home">
</div>
</template>

<script>
import Vue from 'vue'
import router from "@/router";
import Hint from '@/components/Hint'
import net from '@/utils/net'

export default {
	name: 'HomePage',
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>



<style scoped lang="less" rel="stylesheet/less">
@clr:green;
.page-home {
	background: @clr;
}
</style>