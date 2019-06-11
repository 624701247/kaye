/* 自动获得焦点 */
export const focus = {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind: function (el, binding) {
    if (binding.value && binding.value.bgClr) {
      el.style.backgroundColor = binding.value.bgClr
    }
  },

  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted: function (el) {
    el.focus() // 聚焦元素
  },

  update: function () {},

  componentUpdated: function () {},

  // 只调用一次，指令与元素解绑时调用。
  unbind: function () {}
}

/**  限定只能输入11位数字
 *  kone point :  vue 统一处理， input 只允许 11位， 纯数字
*/
export const tel = {
  bind: function (el) {
    el.setAttribute('maxlength', '11')
    el.setAttribute('type', 'tel')
  },
  update: function (el) {
    el.value = el.value.replace(/[^\d]/g, '')
    // if (el.value.length > 11) {
    //   el.value = el.value.slice(0, 11)
    // }
  }
}
