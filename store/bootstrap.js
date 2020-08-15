export const state = () => ({
  categories: [],
  company: {}

})

export const getters = {
  getCategories: state => state.categories,
  getCompanyDetails: state => state.company
}

export const mutations = {
  SET_CATEGORIES: (state, value) => { state.categories = value },
  SET_COMPANY: (state, value) => { state.company = value }
}

export const actions = {

  async fetchLayout (context) {
    await this.$axios.setHeader('X-Company-Id', '1')
    let { data } = await this.$axios.get('/layout')
    context.commit('SET_CATEGORIES', data.data.categories)
    context.commit('SET_COMPANY', data.data.company)
  }
}
