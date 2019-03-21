

<style lang="stylus" scoped>
	.cont
		width 3rem
		height 1rem
		background red
		button 
			width 1rem
			height 0.5rem

</style>		
<!-- 
kone point : vue style标签、整合less、stylus等！

整合 stylus :
	npm install stylus --save-dev
	npm install stylus-loader --save-dev
	style标签里面 lang="stylus"  搞定！


整合 less : 同理吧 less 、less-loader


Add "scoped" attribute to limit CSS to this component only

-->


<template>
	<div class="cont">
		{{count}}
		<button @click="ontapEvaluate">++</button>
	</div>
</template>


<script>
	export default {
		// name: 'star-evaluate',
		data () {
			return {
				count:1
			}
		},
		methods: {
			ontapEvaluate () {
				this.count++

				// kone point : 调用者通过 v-model 指令绑定数据来获取该控件的操作值
				this.$emit('input', this.count + '')
			}
		}
	}

</script>


