<template>
<div class="page-prjmgr">
    <ToolBar />

    <div class="pn-tools">
        <ul>
            <!-- kone point: for 循环多个标签 -->
            <!--<li v-for="var idx = 0; idx < tools.length; idx++">    不能这样写哦 -->  
            <!--<li v-for="tool in tools">-->
            <li v-for="(val, idx) in tools">
                <TabBtn v-bind:text="idx + val" isActive="true" />
            </li>
        </ul>
    </div>

    <div class="bd">
        <div class="widget-preview">
            <div class="top">
                <button v-on:click="onClickRefresh">刷新</button>
            </div>
            <!-- kone point:  v-bind 为标签绑定属性 -->
            <iframe ref="ifr" v-bind:src="prjUrl" align="center" width="620" height="1000" marginwidth="0" marginheight="0"></iframe>
            <!--frameborder="no" border="0"-->
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import ToolBar from '@/components/widget/ToolBar'
import TabBtn from '@/components/widget/TabBtn'

export default {
    name: 'PrjMgr',
    data () {
        return {
            prjUrl: "http://www.runoob.com/w3cnote/flex-grammar.html?v=1",
            tools: lang.mgrtools
        }
    },
    methods: {
        onClickRefresh: function() {
            var time = carry.randomInt(0,10000)
            var regObj = new RegExp("(v=).+[0-9]*", "g") 
            this.prjUrl = this.prjUrl.replace(regObj, 'v=' + time)

            //kone point:  vue操作dom 
            console.log(this.$refs.ifr.src)
            // this.$refs.ifr.contentWindow.location.reload(true);
        }
    },
    components: {
        'TabBtn': TabBtn,
        'ToolBar': ToolBar
    }
}
</script>


<style scoped lang="less" rel="stylesheet/less">
 @import "../css/global.less";

@clr:white;
.page-prjmgr {
    width: 100%;
    height: 100%;
    // background: @clr;

    .pn-tools {
        width: 100%;
        height: 1rem;
        ul {
            width:100%;
            height:1rem;
            margin:0;
            padding:0;
            display:flex;
            justify-content: space-around;
            align-items:center;
        }
        li {
            list-style-type:none; 
            float:left;
            height:100%;
            display:flex;
            align-items:center;
        }
    }
    
    .bd {
    }

    .widget-preview {
        width:3.2rem;
        height: 5.5rem;
        background:#131313;

        iframe {
            width:3.1rem;
            height:5rem;
        }
    }
}
</style>