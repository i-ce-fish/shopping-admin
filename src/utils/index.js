/**
 * remove one item from list
 * @param item
 * @returns {string}
 */
export function listRemoveItem(list, item) {
  const index = list.indexOf(item)
  if (index !== -1) {
    list.splice(index, 1)
  }
}

/**
 *
 * 反序列化对象的属性
 * @param obj
 * @param props 属性数组
 */
export function jsonToObj(obj, props) {
  props.forEach((prop) => {
    if (obj[prop]) {
      obj[prop] = JSON.parse(obj[prop])
    }
  })
  return obj
}

/**
 * 序列化对象的属性
 * @param obj
 * @param props 属性数组
 * @returns {*}
 */
export function objToJson(obj, props) {
  // 深拷贝， 直接修改对象会导致y-upload组件报错，expect get array but  string
  const iObj = JSON.parse(JSON.stringify(obj))
  props.forEach((prop) => {
    iObj[prop] = JSON.stringify(iObj[prop])
  })
  return iObj
}

