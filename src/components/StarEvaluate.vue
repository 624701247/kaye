<!--<style lang="stylus" scoped>
	kone todo
	-->
<style>
/*	.cont
		width 3rem
		height 1rem
		background red*/
		

.cont {
	width:3rem;
	height:1rem;
}
.cont button {
	width:1rem;
	height:0.5rem;
}
</style>


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


