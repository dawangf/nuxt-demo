/**
 * author: dawangf.
 * createDate: 2018/7/6.
 * file: index.
 */

import test from './test'

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
