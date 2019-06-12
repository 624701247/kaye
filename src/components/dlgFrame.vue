<template>
<!-- kone point : v-if   :控制是否渲染该标签
                  v-show :控制该标签的display是否为none
-->
<div v-show="visible" class="dlg" @click="tapMask">

  <!--
  kone point: 绑定事件,  v-on:xxx 简写 @xxx  例如： v-on:click 或者 @click

  @click.stop ： 表示阻止该点击事件往下层传播
  @click.native ： 组件绑定原声事件

  kone point: 绑定属性，v-bind: 简写 : 。 例如 v-bind:class="{'cls1':true}" 或者 :class="{'cls1':true}"

    -->
  <section class="content" :class="{'content-active':true}" @click.stop="tapContent">
    <!--占位替换：调用该组件标签时，写在其内部的内容 -->
    <slot></slot>
  </section>
</div>
</template>

<script>
export default {
  // kone point ： 自定义组件看这里
  // props 定义组件参数
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    tapMask: Function,
    tapContent: Function
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
  .content {
    width: 6rem;
    height: 6rem;
    background: #ffffff;
    margin: auto;
    border-radius: 0.2rem;
  }
</style>
