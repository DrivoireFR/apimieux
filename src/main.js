import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import Axios from 'axios'

const axios = Axios.create()
axios.defaults.baseURL = 'http://localhost:8080'

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
app.use(store)
