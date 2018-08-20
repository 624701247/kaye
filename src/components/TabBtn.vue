<template>
<!--kone point: 动态控制 className 列表 -->
<button v-bind:class="{ 'btn':true, 'tabBtn':true, 'tabBtn-active': isActive}" >
    {{text}}
</button>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'ToolBar',
    // props: [ 'text', 'isActive' ],  //kone point: 传递参数给组件
    props: {   // kone point : vue 代码规范
        text: String, 
        isActive: String
    },
    data () {
        return {  
        }
    },
    methods: {
    },
    components: {
    }
}
</script>



<style scoped lang="less" rel="stylesheet/less">
@import "../css/global.less";
.tabBtn {
    background: orange;
    border: 0;
    max-width: 1.5rem;
    min-width:1rem;
    height: 0.5rem;
    font-size: 0.3rem;
    color: white;
}
.tabBtn-active {
    background: #CC7229;
}
</style>