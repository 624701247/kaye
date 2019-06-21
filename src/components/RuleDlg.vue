<template>
  <dlg-frame :visible="visible" :tapMask="tapMask" :tapContent="tapContent ">
    <div>规则</div>
    <div>{{desc}}</div>
    <inp name="inp1" :potVisible="true" />
    <inp name="inp2" :potVisible="false" />
  </dlg-frame>
</template>

<script>
// import Vue from 'vue'
import DlgFrame from './DlgFrame'
import {rule} from '@/dlgMgr'

export default {
  data () {
    return rule.data
  },

  // kone point:  注册局部组件
  components: {
    DlgFrame,
    // 'dlg-frame-alias': DlgFrame // 或者这样，给它取个别名

    inp: {
      template: `<div>
        {{name}}
        <font v-if="potVisible" style="color:red;">*</font>
      </div>`,
      props: ['name', 'potVisible']
    }
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
