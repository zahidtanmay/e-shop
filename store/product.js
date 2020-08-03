export const state = () => ({
  products: [],
})

export const getters = {
  getProducts: state => state.categories,
}

export const mutations = {
  SET_PRODUCTS: (state, value) => { state.categories = value },
}

export const actions = {

  async fetchProduct (context) {
    await this.$axios.setHeader('X-Company-Id', '1')
    let {data} = await this.$axios.get('products?cols=name,id,price,imageUrl,stock,description,unit,categoryId')
    console.log(data)
    context.commit('SET_PRODUCTS', data.data)
  }
}
