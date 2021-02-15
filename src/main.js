import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

require('@/assets/bulma.scss')

createApp(App).use(store).mount('#app')
