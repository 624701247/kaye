<template>
  <div id="app">
    <router-view class="page"/>

    <div class="dlgs">
      <ruleDlg />
    </div>
  </div>
</template>

<script>
import ruleDlg from '@/components/ruleDlg'

export default {
  name: 'App',
  components: {
    ruleDlg
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

<style lang="less" rel="stylesheet/less">
  // kone point : style标签带上scoped则该份样式会带上哈希值，即该份样式不会影响到其他vue文件中的样式
  @import "css/main"; //引入外部less

</style>
