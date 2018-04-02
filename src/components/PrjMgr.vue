<template>
<div class="page-prjmgr">
    <!--<div class="logo"></div>-->
    <ToolBar />
</div>
</template>

<script>
import Vue from 'vue'

import ToolBar from '@/components/widget/ToolBar'

export default {
    name: 'PrjMgr',
    data () {
        return {
        }
    },
    methods: {
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
    .logo {
        .divimg('../assets/logo.png');
    }

}
</style>