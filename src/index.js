import Vue from 'vue'
import App from './app.vue'
import router from './router/router.js'
import store from './store/'

import './assets/styles/global.styl'

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');