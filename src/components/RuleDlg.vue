<template>
  <dlgFrame :visible="visible" :tapMask="tapMask" :tapContent="tapContent ">
    <div>规则</div>
    <div>{{desc}}</div>
  </dlgFrame>
</template>

<script>
import dlgFrame from './dlgFrame'
import {rule} from '@/dlgMgr'

export default {
  data () {
    return rule.data
  },

  // kone point:  注册局部组件
  components: {
    dlgFrame
    // 'dlg-frame': dlgFrame  或者这样，给它取个别名
  },
  methods: {
    tapMask: function () {
      rule.hide()
    },
    tapContent: function () {
    }
  }
}
</script>
