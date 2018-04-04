<template>
<div class="page-home">
    {{msg}}
    <button v-on:click="reverseMsg">逆转消息</button>
    <Hint></Hint>
</div>
</template>

<script>
import Vue from 'vue'


import Hint from '@/components/Hint'

export default {
    name: 'Home',
    data () {
        return {
            msg: 'hello kaye!!!'
        }
    },
    methods: {
        reverseMsg: function () {
            this.msg = this.msg.split('').reverse().join('')
        }
    },
    components: {
        //kone point:  注册局部组件。 <Hint> 将只在父模板可用
        'Hint': Hint
    }
}
</script>



<style scoped lang="less" rel="stylesheet/less">
@clr:green;
.page-home {
    width:100px;
    height: 100px;
    background: red;
    background: @clr;
}
</style>