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

  async PlaceOrder ({state, rootState}) {

    let checkout = {}

    // let checkoutItems = []
    // const cartItems = rootState.cart.cartItems

    // for (const key in cartItems) {
    //   const item = cartItems[`${key}`]
    //   let cartItem = {}
    //   cartItem.productId = item.id
    //   cartItem.unitPrice = parseInt(item.price)
    //   cartItem.purchasePrice = parseInt(item.price)
    //   cartItem.quantity = parseInt(item.quantity)
    //   cartItem.discount = 0
    //   if (item.customFields.length > 0) {
    //     const id = item.customFields.findIndex(field => parseInt(field.typeId) === 4 )
    //     cartItem.discount = parseInt(item.customFields[id].value)
    //   }
    //   cartItem.vat = 0
    //   cartItem.total = (cartItem.unitPrice * cartItem.quantity) - (cartItem.quantity * cartItem.discount)
    //   console.log(cartItem)
    //   checkoutItems.push(cartItem)
    // }

    checkout.items = rootState.cart.cartItems
    checkout.subTotal = rootState.cart.cartTotal

    let ledgerTotal = 0

    state.ledgers.forEach(item =>  {
      ledgerTotal = ledgerTotal + parseInt(item.value)
    })


    checkout.ledgers = state.ledgers
    checkout.ledgerTotal = ledgerTotal
    checkout.ledgerPaidTotal = 0


    checkout.paymentTypeId = 5
    checkout.checkNumber = ''
    checkout.chequeDate = ''
    checkout.bankId = 1

    checkout.note = ''
    checkout.lessAmount = '0'
    checkout.saleTypesId = '25'
    checkout.salesPersonId = '116'
    checkout.salesDate = '5-5-2020'
    checkout.discountCode = ''


    checkout.discountPercent = 0
    checkout.discountTotal = 0
    checkout.totalVat = 0


    checkout.paidAmount = 0
    checkout.returnAmount = 0
    checkout.total = checkout.subTotal + ledgerTotal
    checkout.dueAmount = checkout.total - checkout.paidAmount

    console.log(checkout)

    try{
      let { data } = await this.$axios.post(`/orders`, JSON.stringify(checkout))
      console.log(data)
    } catch (e) {
      console.log(e)
    }



  }

}
