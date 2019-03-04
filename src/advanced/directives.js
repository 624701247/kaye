/* 自动获得焦点 */
export const focus = {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind: function(el, binding) {
        if(binding.value && binding.value.bgClr) {
            el.style.backgroundColor = binding.value.bgClr
        }
    },

    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function(el) {
        el.focus() // 聚焦元素
    },

    update: function() {},

    componentUpdated: function() {},

    // 只调用一次，指令与元素解绑时调用。
    unbind: function() {}
}
