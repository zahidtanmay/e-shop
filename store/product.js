export const state = () => ({
  products: [],
  activeProduct: {},
})

export const getters = {
  getProducts: state => state.products,
  getActiveProduct: state => state.activeProduct
}

export const mutations = {
  SET_PRODUCTS: (state, value) => { state.products = value },
  SET_ACTIVE_PRODUCT: (state, value) => { state.activeProduct = Object.assign({}, value) }
}

export const actions = {

  async fetchProduct (context) {
    let {data} = await this.$axios.get('products?cols=*')
    context.commit('SET_PRODUCTS', data.data)
  },
}
