import store from 'store'

// 缓存数据的key
const WEB_NAME = 'STORE'

export const storage = {
  set setLocalStorageName(val) {
    if (!val) {
      store.remove(WEB_NAME)
    } else {
      store.set(WEB_NAME, val)
    }
  },
  get getLocalStorageName() {
    return store.get(WEB_NAME)
  }
}
