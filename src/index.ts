import Vue from 'vue'
import app from './app.vue'
import './common.scss'

new Vue({
    // el: '#app',
    render: h => h(app)
}).$mount('#app')