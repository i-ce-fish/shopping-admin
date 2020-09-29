import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

import _ from 'lodash'
// 自定义组件
import YInput from '@/components/y-input/index.vue'
import YSelect from '@/components/y-select/index.vue'
import YSelectInput from '@/components/y-select-input/index.vue'
import YCheckbox from '@/components/y-checkbox/index.vue'
import YDatepicker from '@/components/y-datepicker/index.vue'
import YNumber from '@/components/y-number/index.vue'
import YRadio from '@/components/y-radio/index.vue'
import YSlider from '@/components/y-slider/index.vue'
import YSwitch from '@/components/y-switch/index.vue'
import YTable from '@/components/y-table/index.vue'
import YForm from '@/components/y-form/index.vue'
// todo 去掉没用的upload
import YUpload from '@/components/y-upload/index.vue'
import YUploadImage from '@/components/y-upload-image/index.vue'
import YUploadFile from '@/components/y-upload-file/index.vue'
import YTooltip from '@/components/y-tooltip/index.vue'

// 按钮级权限指令
import permission from '@/directive/permission/index'

// store
import store from './store'
import router from './router'
import App from './App.vue'

// 页面级权限判断
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
// 全局指令---按钮级权限判断
Vue.use(permission)
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
