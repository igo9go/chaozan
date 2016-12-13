import Vue from 'vue'
import Vuex from '../../../src'
// 导入各个模块的初始状态和 mutations
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  // 组合各个模块
  modules: {
    cart,
    products
  }
})
