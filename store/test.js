/**
 * author: dawangf.
 * createDate: 2018/7/6.
 * file: test.
 */

export const state = () => ({
  list: 0
})

export const mutations = {
  getList (state) {
    state.list++
    // console.log('ddddddddddddd')
  }
}
