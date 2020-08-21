export const state = () => ({
  orders: [],
  acriveOrder: {},
})

export const getters = {
  getOrders: state => state.orders,
  getActiveOrder: state => state.acriveOrder
}

export const mutations = {
  SET_ORDERS: (state, value) => { state.order = value },
  SET_ACTIVE_ORDER: (state, value) => { state.activeOrder = Object.assign({}, value) }
}

export const actions = {

  async fetchOrders (context) {
    let {data} = await this.$axios.get('order?cols=*')
    context.commit('SET_ORDERS', data.data)
  },
}
