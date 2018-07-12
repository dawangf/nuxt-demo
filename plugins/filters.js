/**
 * author: dawangf.
 * createDate: 2018/7/9.
 * file: filters.js.
 */
import Vue from 'vue'
// 时间格式化
export function testFilter (val) {
  if (val === 0) {
    return '成功'
  } else {
    return '失败'
  }
}
let filters = {
  testFilter
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
export default filters
