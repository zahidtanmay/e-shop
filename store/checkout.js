export const state = () => ({
  ledgers: [],
  checkoutLocation: null,
  deliveryDay: null,
  deliveryTime: null
})

export const getters = {
  getLedgers: state => state.ledgers,
  getCheckoutLocation: state => state.checkoutLocation,
  getDeliveryDay: state => state.deliveryDay,
  getDeliveryTime: state => state.deliveryTime
}

export const mutations = {
  SET_LEDGERS: (state, value) => { state.ledgers = [...value] },
  SET_CHECKOUT_LOCATION: (state, value) => { state.checkoutLocation = value },
  SET_DELIVERY_DAY: (state, value) => { state.deliveryDay = value },
  SET_DELIVERY_TIME: (state, value) => { state.deliveryTime = value }
}

export const actions = {

  async fetchLedgers (context) {
    let { data } = await this.$axios.get(`/ledgers?cols=*`)
    context.commit('SET_LEDGERS', [])
    context.commit('SET_LEDGERS', data.data)
  },

  async PlaceOrder ({rootState}) {
    // let { data } = await this.$axios.post(`/orders`)
    let checkout = {}
    checkout.items = rootState.cart.cartItems
    console.log(checkout)
  }

}
