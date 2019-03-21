<style>
</style>

<template>
	<div>
		<div>a: {{a}}</div>
		<div>aDouble: {{aDouble}}</div>
		<div>aPlus: {{aPlus}}</div>
		
		<div>{{count}}</div>
		<div>{{dCount}}</div>

		<star-evaluate v-model="starCount"></star-evaluate>
	</div>
</template>

<script>
	import StarEvaluate from '@/components/StarEvaluate'


	export default {
		name: 'lifecycle',

		data () {
			return {
				a:2,
				count: this.$store.state.count,
				dCount: this.$store.getters.dCount,

				starCount: ''
			}
		},

		// 
		components: {
    		'star-evaluate': StarEvaluate
  		},

		created () {
			console.log('aDouble', this.aDouble)
			this.aPlus = 100
			console.log('aPlus', this.aPlus, this.a)

         	this.a = 22

		},

		// 计算属性: 将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
		computed: {
			// 仅读取，（this.aDouble = 333 赋值会报错哦）
			aDouble: function () {
				return this.a * 2
			},
			// 读取和设置
			aPlus: {
				get: function () {
					return this.a + 1
				},
				set: function (v) {
					this.a = v - 1
				}
			}
		},

		watch: {
			starCount (newval, oldval) {
				console.log('star count 新旧值', newval, oldval)
			}
		}
	}
</script>


