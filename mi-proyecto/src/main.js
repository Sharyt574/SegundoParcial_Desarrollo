import { createApp } from 'vue'
import App from './views/DashboardView.vue'
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap'

createApp(App).use(router).mount('#app')
//historial app
