import { createApp } from 'vue'
import lazyPlugin from 'vue3-lazy'
import App from './App.vue'
import router from './router'
import store from './store'
import loadingDirective from '@/components/base/c-loading/directive'
import '@/assets/scss/index.scss'

const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(lazyPlugin, {
    loading: require('@/assets/images/default.jpg')
  })
  .directive('loading', loadingDirective)
  .mount('#app')
