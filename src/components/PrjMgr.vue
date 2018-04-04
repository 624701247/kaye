<template>
<div class="page-prjmgr">
    <ToolBar />

    <div class="bd">
        <div class="widget-preview">
            <div class="top">
                <button v-on:click="onClickRefresh">刷新</button>
            </div>
            <iframe ref="ifr" v-bind:src="prjUrl"
            align="center" width="620" height="1000" marginwidth="0" marginheight="0"></iframe>
        </div>
        <!--frameborder="no" border="0"-->

    </div>
</div>
</template>

<script>
import Vue from 'vue'

import ToolBar from '@/components/widget/ToolBar'

export default {
    name: 'PrjMgr',
    data () {
        return {
            prjUrl: "http://www.runoob.com/w3cnote/flex-grammar.html?v=1" 
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