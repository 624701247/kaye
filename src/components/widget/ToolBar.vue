<template>
<div class="widget-toolbar">
    <div class="logo"></div>
</div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'ToolBar',
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
 @import "../../css/global.less";

@clr:rgba(13,13,13,0.6);
.widget-toolbar {
    width: 7.5rem;
    height: 0.8rem;
    background: @clr;
    .logo {
        .divimg('../assets/logo.png');
        width:0.8rem;
        height:0.8rem;
    }

}
</style>