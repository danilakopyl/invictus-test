import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia, setMapStoreSuffix } from 'pinia'
import App from './App.vue'

const app = createApp(App)
setMapStoreSuffix('Store')
app.use(createPinia())

app.mount('#app')
