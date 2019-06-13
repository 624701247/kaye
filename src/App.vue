<template>
  <div id="app">
    <router-view class="page"/>

    <div class="dlgs">
      <rule-dlg />
    </div>
  </div>
</template>

<script>
import RuleDlg from '@/components/RuleDlg'

export default {
  name: 'App',
  components: {
    RuleDlg
  }
}
</script>

<style src="mint-ui/lib/style.css"></style>

<style>
  /* kone point : mint-ui Indicator菊花debug*/
  .mint-indicator-wrapper {
    /* 使用其实不会被其他标签遮挡 */
    z-index: 10;
    /* 其子标签是 display: inline-block; 会有上下间隙的问题，这里消除该间隙用 */
    font-size: 0;
  }
</style>

<!--
kone point : vue style标签、整合less、stylus等！

整合 stylus :
  npm install stylus --save-dev
  npm install stylus-loader --save-dev
  style标签里面 lang="stylus"  搞定！

整合 less : 同理！ less 、less-loader

Add "scoped" attribute to limit CSS to this component only
style标签带上scoped则该份样式会带上哈希值，即该份样式不会影响到其他vue文件中的样式

-->
<style lang="less" rel="stylesheet/less">
  @import "css/main"; //引入外部less

</style>
