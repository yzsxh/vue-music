import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)
export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    const scrollVal = (scroll.value = new BScroll(wrapperRef.value, {
      ...options,
      observeDOM: true
    }))
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })

  return {
    scroll
  }
}
