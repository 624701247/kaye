<template>
	<div id="app">
		<router-view/>
		<RuleDlg v-show="ruleVisible"/>
	</div>
</template>

<script>
// import 'css/index.less' //?? 不行哦
import store from './store'

export default {
	name: 'App',
	data: function() {
		return store.appState
	},
	methods: {
	}
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "css/global.less";

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	width:100%;
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	margin: auto;
	background: #8204b5;
}
.page {
	position: absolute;
	z-index: @z-page;
	width:100%;
	height: 100%;
	// background: #ffffff;
}

.dlg {
	position: fixed;
	z-index:@z-dlg;
	width:100%;
	height:100%;
	background: rgba(0,0,0,0.5);
	display: flex;
}

.spinner {

}

.weakhint {

}

.btn {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
}

</style>
