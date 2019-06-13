<template>
  <button :class="{ 'btn':true, 'tabBtn':true, 'tabBtn-active': isActive}" >
    {{text}}
  </button>
</template>

<script>

export default {
  name: 'TabBtn',
  props: {
    text: String,
    isActive: String
  },
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
  @import "../css/global.less";
  .tabBtn {
    background: orange;
    border: 0;
    max-width: 1.5rem;
    min-width:1rem;
    height: 0.5rem;
    font-size: 0.3rem;
    color: white;
  }
  .tabBtn-active {
    background: #CC7229;
  }
</style>
