<template>
<div class="page-home">
    {{msg}}
    <button v-on:click="reverseMsg">逆转消息</button>
    <Hint></Hint>

    <div style="width:2rem; height:1.5rem; background:red; ">
        <button style="width:100%; height:100%; background:rgba(13,13,13,.2); margin:0; padding:0;border:0;" >1</button>
    </div>

    <button v-on:click="onClickUpdatePrj">update prj</button>
    <button v-on:click="onClickAddPrj">add prj</button>
    <button v-on:click="onClickGetPrjList">get prj list</button>
</div>
</template>

<script>
import Vue from 'vue'


import Hint from '@/components/Hint'
import net from '@/utils/net'
// import a from '@/utils/a'

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
        ,onClickUpdatePrj: function() {
            net.updatePrjInfo('blue', function(data) {
                console.log(data)
            })
        }
        ,onClickAddPrj: function() {
        }
        ,onClickGetPrjList: function() {
            net.getPrjList(function() {
                
            })
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