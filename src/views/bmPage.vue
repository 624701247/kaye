<template>
  <div>
    <!-- 日历控件 -->
    <bm-calendar key="cc"></bm-calendar>
    <!-- <bm-calendar :calendar="{year:2017,month:1,day:12}" :events="['2017/4/1','2017/4/2','2017/4/3']"></bm-calendar> -->

    <!-- 星期选择控件 ?  -->
    <bm-week></bm-week>

  <!--  -->

    <!-- 空白页(查找不到结果)-->
      <bm-empty-page></bm-empty-page>
      <!-- <empty-page v-if="true"></bm-empty-page> -->
      <!-- <BMEmptyPage></BMEmptyPage> -->

    <!--  -->
    <button @click="tapTest">test</button>
    <bm-region :ranks="3" APP_DOMAIN="//angelapi.bluemoon.com.cn/bluemoon-control/region/getRegionSelect" @output-region="handleRegion" ref="region"></bm-region>
  </div>
</template>

<script>
// import BmEmptyPage from 'bm-vue-component/src/components/emptyPage/emptyPage'

export default {
  data () {
    return {
      searchValue: ''
    }
  },
  components: {
    // BmEmptyPage
  },
  created () {
  },
  methods: {
    tapTest () {
      this.$refs.region.open()
    },
    handleRegion (res) {
      console.log('res', res)
    }
  }
}

</script>
