<template>
<div class="widget-toolbar">
    <div class="logo"></div>

    <div v-if="isLogin" class="pn-login">
        <div class="avatar">
            <a href=""></a>
        </div>
        <span class="name"></span>
    </div>

    <!-- kone point: 控制显示隐藏标签 -->
    <div v-if="!isLogin" class="pn-nologin">
        <ul>
            <li>{{txt.login}}</li>
            <li>{{txt.register}}</li>
        </ul>
    </div>
</div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'ToolBar',
    data () {
        return {
            txt: {
                login: lang.login,
                register: lang.register
            },

            isLogin: false
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
@clr:rgba(13,13,13,0.6);
.widget-toolbar {
    width: 7.5rem;
    height: 0.8rem;
    background: @clr;
    display:flex;
    justify-content:space-between;

    .logo {
        .divimg('../assets/logo.png');
        width:0.8rem;
        height:0.8rem;
    }

    .pn-nologin {
        height:0.8rem;
        ul {
            height:0.8rem;
            margin:0;
            padding:0;
        }
        li {
            margin-right: 0.1rem;
            list-style-type:none; //去掉前面的点
            float:left; //默认竖向布局，此句改成横向
            font-size: 0.3rem;
            line-height:0.8rem;
        }
    }

}
</style>