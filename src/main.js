import { createApp } from 'vue'
import './assets/css/bootstrap.rtl.min.css'
import './assets/fonticon/css/animation.css'
import './assets/fonticon/css/fontello-ie7.css'
import './assets/fonticon/css/fontello.css'
import './assets/css/jquery.custom-scrollbar.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import JQuery from 'jquery'
window.$ = JQuery
import StyleJs from './assets/js/style'
window.SJ = StyleJs
import Swal from 'sweetalert2'
window.Swal = Swal;
import App from './App.vue'
import router from './router/index'


const app = createApp(App)

app.use(router);
app.mount('#app')