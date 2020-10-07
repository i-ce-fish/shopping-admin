import permission from './permission'

const install = (Vue) => {
  Vue.directive('permission', permission)
}

if (window.Vue) {
  // eslint-disable-next-line
  window["permission"] = permission
  Vue.use(install) // eslint-disable-line
}

permission.install = install
export default permission
