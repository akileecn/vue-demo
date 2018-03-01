// 填充
function fill (target, src) {
  for (let key in target) {
    if (target[key] == null) {
      target[key] = src[key]
    }
  }
  return target
}
function clone (src) {
  let result = {}
  for (let key in src) {
    result[key] = src[key]
  }
  return result
}
const utils = {
  // 填充
  fill,
  clone
}
export default utils
