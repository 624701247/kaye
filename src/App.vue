<template>
  <div id="app">
    <router-view/>
    <RuleDlg v-show="ruleVisible"/>
  </div>
</template>
<script>
import store from './store'
export default {
  name: 'App',
  data: function () {
    return store.appState
  },
  methods: {
  }
}
</script>

<style src="mint-ui/lib/style.css"></style>

<style>
  /* 修改 mint-ui  菊花z-index */
  .mint-indicator-wrapper {
    z-index: 10;
  }
</style>

<style scoped lang="less" rel="stylesheet/less">
  @import "css/global.less";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width:100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    background: #8204b5;
    position: relative;
  }
  .page {
    position: absolute;
    z-index: @z-page;
    width:100%;
    height: 100%;
    background: #fff;
    font-size: 0.5rem;
    line-height:0.8rem;
  }
  .dlg {
    position: fixed;
    z-index:@z-dlg;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.5);
    display: flex;
  }
  .spinner {
  }
  .weakhint {
  }
  .btn {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
  }

</style>
