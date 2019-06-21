<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 30px;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg | capitalize }}</h1>
    <h1>{{ msg | g_capitalize }}</h1>   <!-- 使用全局过滤器 -->
  </div>
</template>

<script>
/* global carry */

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'helloWorld',
      starCount: ''
    }
  },
  filters: {
    /*  kone point : 过滤器
    如上写法 {{ msg | capitalize }} 作用时将 msg 用 “|” 后面的方法格式化输出
    注册全局过滤器请看 main.js */
    capitalize: carry.capitalize
  },
  created () {
  },
  computed: {}
}
</script>
