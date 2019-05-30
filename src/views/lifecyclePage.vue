<style>
</style>

<template>
  <div>
    <div>a: {{a}}</div>
    <div>aDouble: {{aDouble}}</div>
    <div>aPlus: {{aPlus}}</div>
    <star-evaluate ref="starEv" v-model="starCount"></star-evaluate>
  </div>
</template>

<script>
import StarEvaluate from '@/components/StarEvaluate'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      a: 2,
      starCount: '99'
    }
  },

  //
  components: {
    'star-evaluate': StarEvaluate
  },

  // 在实例创建完成后被立即调用
  created () {
    console.log('aDouble', this.aDouble)
    this.aPlus = 100
    console.log('aPlus', this.aPlus, this.a)

    this.a = 22

    //  undefined 此回调时标签还未就绪
    console.log('created starEv', this.$refs.starEv)
  },

  // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
  // 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
  mounted () {
    // 此回调函数后才能访问标签dom
    console.log('mounted starEv', this.$refs.starEv)
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
