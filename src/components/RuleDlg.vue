<template>
  <dlg-frame :visible="visible" :tapMask="tapMask" :tapContent="tapContent ">
    <div>规则</div>
    <div>{{desc}}</div>
  </dlg-frame>
</template>

<script>
import DlgFrame from './DlgFrame'
import {rule} from '@/dlgMgr'

export default {
  data () {
    return rule.data
  },

  // kone point:  注册局部组件
  components: {
    DlgFrame
    // 'dlg-frame-alias': DlgFrame // 或者这样，给它取个别名
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
