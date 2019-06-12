export const rule = {
  data: {
    visible: false,
    desc: '哈哈哈哈哈'
  },

  show (desc) {
    this.data.visible = true
    if (desc) {
      this.data.desc = desc
    }
  },
  hide () {
    this.data.visible = false
  }
}
