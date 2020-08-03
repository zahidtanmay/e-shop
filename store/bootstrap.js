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
  async fetchCategories ({$axios}) {
    console.log('fetch')
    await this.$axios.setHeader('X-Company-Id', '1')
    let r = await this.$axios.get('http://dev.isalebd.com/api/v1/layout')
  }
}
