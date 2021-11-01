import Vue from 'vue'
import app from './app.vue'
import store from './store/index'
import './common.scss'
import './plugins/icon'
import 'ant-design-vue/dist/antd.css'
import '@icon-park/vue/styles/index.css'

import {
  InputNumber,
  Divider,
  Button,
  Tooltip,
  Popover,
  Slider,
  Select,
  Switch,
  Radio,
  Input,
  Modal,
  Dropdown,
  Menu,
  Checkbox,
  Drawer,
  Spin
} from 'ant-design-vue'

Vue.use(InputNumber)
Vue.use(Divider)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Popover)
Vue.use(Slider)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Input)
Vue.use(Modal)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Checkbox)
Vue.use(Drawer)
Vue.use(Spin)
new Vue({
  // el: '#app',
  store,
  render: h => h(app)
}).$mount('#app')
