import { createApp } from 'vue'
import CLoading from './index.vue'
import { addClass, removeClass } from '@/assets/js/dom'

// 类名，用于给元素添加css属性position:relative
const relativeCls = 'g-relative'

const loadingDirective = {
  mounted(el, binding) {
    // 创建应用实例
    const app = createApp(CLoading)
    // 创建根组件实例
    const instance = app.mount(document.createElement('div'))
    // 将根组件实例保存到el的属性上，方便后续函数操作
    el.instance = instance
    const title = binding.arg
    if (typeof title !== 'undefined') {
      // 通过根组件实例获取到组件methods当中的setTitle函数
      instance.setTitle(title)
    }
    // 当loading值为true
    if (binding.value) {
      append(el)
    }
  },

  updated(el, binding) {
    const title = binding.arg
    if (typeof title !== 'undefined') {
      el.instance.setTitle(title)
    }
    binding.value ? append(el) : remove(el)
  }
}

/**
 * 为页面追加loading子元素
 * @param {Element} el
 */
function append(el) {
  // getComputedStyle：获取元素css样式返回对象
  const style = window.getComputedStyle(el)
  // 当元素不是绝对定位、相对定位、固定定位时，添加类名
  if (['relative', 'fixed', 'absolute'].indexOf(style.position) === -1) {
    addClass(el, relativeCls)
  }
  el.appendChild(el.instance.$el)
}

/**
 * 为页面移除loading子元素
 * @param {Element} el
 */
function remove(el) {
  removeClass(el, relativeCls)
  el.removeChild(el.instance.$el)
}

export default loadingDirective
