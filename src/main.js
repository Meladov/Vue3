import { createApp } from 'vue'
import App from './App.vue'

import '../assets/main.scss'
import routers from './routes'


const app =  createApp(App)
app.use(routers)
app.mount('#app')




