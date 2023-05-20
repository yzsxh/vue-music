import BScroll from '@better-scroll/core'
import BSlide from '@better-scroll/slide'
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(BSlide)
export default function useSlider(wrapperRef) {
  const slider = ref(null)
  const currentPageIndex = ref(0)
  onMounted(() => {
    const sliderVal = (slider.value = new BScroll(wrapperRef.value, {
      probeType: 2,
      slide: true,
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false
    }))
    sliderVal.on('slideWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })

  onUnmounted(() => {
    slider.value.destroy()
  })

  return {
    slider,
    currentPageIndex
  }
}
