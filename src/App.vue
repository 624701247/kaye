<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import 'css/index.less' //?? 不行哦

export default {
  name: 'App'
}
</script>

<style scoped lang="less" rel="stylesheet/less">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width:100%;

  width: 7.5rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background: #8204b5;
}
</style>
