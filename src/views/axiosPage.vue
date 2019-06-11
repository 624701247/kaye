<style scoped lang="less" rel="stylesheet/less">
.page-vuex {
  background: white;
  text-align: left;
}
</style>

<template>
  <div class="page page-axios">

  </div>
</template>

<script>
import accountNet from '@/net/accountNet'
export default {
  name: 'axiosPage',
  created () {
    accountNet.login('kone', '1990').then(() => {
      accountNet.userinfo().then(() => {
        console.log(this.$store.state['user']['empName'])
      })
    })
  }
}
</script>
