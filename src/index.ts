import Vue from 'vue'
import app from './app'

new Vue({
    // el: '#app',
    render: h => h(app)
}).$mount('#app')
console.log('im index');