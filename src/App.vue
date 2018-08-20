<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
// import 'css/index.less' //?? 不行哦
export default {
	name: 'App'
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
	height: 100%;
	width:100%;

	// width: 7.5rem;
	width:100%;
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
	background: #ffffff;
}

.dlg {

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
