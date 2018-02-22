// 填充
function fill (target, src) {
  Reflect.ownKeys(target).forEach(key => {
    if (target[key] == null) {
      target[key] = src[key]
    }
  })
  return target
}
function clone (src) {
  let result = {}
  Reflect.ownKeys(src).forEach(key => {
    result[key] = src[key]
  })
  return result
}
const utils = {
  // 填充
  fill,
  clone
}
export default utils
