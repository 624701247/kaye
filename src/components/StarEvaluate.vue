
<style lang="stylus" scoped>
  .cont
    width 3rem
    height 1rem
    background red
    button
      width 1rem
      height 0.5rem
</style>

<template>
  <div class="cont">
    {{count}}
    <button @click="ontapEvaluate">++</button>
  </div>
</template>

<script>
/*
  kone point : v-model 指令相关看这里

  <input v-model="searchText">
  等价于
  <input v-bind:value="searchText" v-on:input="searchText = $event.target.value">

  如何获取父节点传递过来的  v-model 值？ 答：this.value 就是啊！

  通过 this.$emit('input', xx) 向父节点传递值

  组件里直接修改 this.value 会抛警告：
  [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
  Instead, use a data or computed property based on the prop's value. Prop being mutated: "value"

*/

export default {
  data () {
    return {
      count: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  created () {
    this.count = this.value
  },
  methods: {
    ontapEvaluate () {
      this.count++

      this.$emit('input', this.count)
    }
  }
}
</script>
