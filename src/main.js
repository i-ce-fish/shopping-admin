import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import _ from 'lodash'
// 自定义组件
import YInput from '@/components/YInput/index.vue'
import YSelect from '@/components/YSelect/index.vue'
import YSelectInput from '@/components/YSelectInput/index.vue'
import YCheckbox from '@/components/YCheckbox/index.vue'
import YDatepicker from '@/components/YDatepicker/index.vue'
import YNumber from '@/components/YNumber/index.vue'
import YRadio from '@/components/YRadio/index.vue'
import YSlider from '@/components/YSlider/index.vue'
import YSwitch from '@/components/YSwitch/index.vue'
import YTable from '@/components/YTable/index.vue'
import YForm from '@/components/YForm/index.vue'
import YUpload from '@/components/YUpload/index.vue'
import YUploadImage from '@/components/YUploadImage/index.vue'
import YUploadFile from '@/components/YUploadFile/index.vue'
import YTooltip from '@/components/YTooltip/index.vue'

// store
import store from './store'
import router from './router'
import App from './App.vue'

import './permission'

Vue.component('YRadio', YRadio)
Vue.component('YInput', YInput)
Vue.component('YSelect', YSelect)
Vue.component('YSelectInput', YSelectInput)
Vue.component('YCheckbox', YCheckbox)
Vue.component('YDatepicker', YDatepicker)
Vue.component('YNumber', YNumber)
Vue.component('YSlider', YSlider)
Vue.component('YUpload', YUpload)
Vue.component('YSwitch', YSwitch)
Vue.component('YTable', YTable)
Vue.component('YForm', YForm)
Vue.component('YUploadImage', YUploadImage)
Vue.component('YUploadFile', YUploadFile)
Vue.component('YTooltip', YTooltip)

Vue.use(ElementUI)

// 全局lodash
Vue.prototype._ = _

// todo remove
Vue.prototype.test = () => {
  console.log('test')
}
// 全局返回
Vue.prototype.back = () => {
  history.back()
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
