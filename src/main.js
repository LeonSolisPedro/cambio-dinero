import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from "./plugins/bootstrap"


//Global Plugins
const app = createApp(App)
app.use(bootstrap)
app.mount("#app")