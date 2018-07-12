import request from '~/service'

export const apiNav = async (store, params) => {
  return await request.get('https://api.myjson.com/bins/11r7f6', params)
}

export const apiNavs = async (store, params) => {
  return await request.get(`https://api.myjson.com/bins/11r7f6`)
}
