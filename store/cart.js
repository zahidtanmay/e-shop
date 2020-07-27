import  Vue from 'vue'
export const state = () => ({
  cartItems: Object.create(null),
  cartCount: 0,
  cartTotal: 0
})

export const getters = {
  getCartItems: state => state.cartItems,
  getCartCount: state => state.cartCount,
  getCartTotal: state => state.cartTotal,
}

export const mutations = {

  INCREMENT_CART_ITEM: (state, data) => {
    const item = data.item
    item.count = data.count + 1
    Vue.set(state.cartItems, item.id, item)
  },

  DECREMENT_CART_ITEM: (state, data) => {
    const item = data.item
    if (data.count === 1) {
      delete state.cartItems[`${item.id}`]
    } else {
      item.count = data.count - 1
      Vue.set(state.cartItems, item.id, item)
    }
  },

  CALCULATE_CART_COUNT: (state) => {
    state.cartCount = Object.keys(state.cartItems).length
  },

  CALCULATE_CART_TOTAL: (state) => {
    let total = 0
    let key = null
    for (key in state.cartItems) {
      const item = state.cartItems[`${key}`]
      let subTotal = item.count * item.unitPrice
      total += subTotal
    }
    state.cartTotal = total
  }
}

export const actions = {

  async addToCart ({commit, state}, data) {
    await commit('INCREMENT_CART_ITEM', data)
    await commit('CALCULATE_CART_COUNT')
    await commit('CALCULATE_CART_TOTAL')
    return state.cartItems[`${data.item.id}`].count
  },

  async removeFromCart ({commit, state}, data) {
    await commit('DECREMENT_CART_ITEM', data)
    await commit('CALCULATE_CART_COUNT')
    await commit('CALCULATE_CART_TOTAL')
    if (`${data.item.id}` in state.cartItems) {
      return state.cartItems[`${data.item.id}`].count
    } else {
      return 0
    }
  }

}
