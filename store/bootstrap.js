export const state = () => ({
  categories: [],
  company: {},
  areas: [],

})

export const getters = {
  getCategories: state => state.categories,
  getCompanyDetails: state => state.company,
  getAreas: state => state.areas
}

export const mutations = {
  SET_CATEGORIES: (state, value) => { state.categories = value },
  SET_COMPANY: (state, value) => { state.company = value },
  SET_AREAS: (state, value) => { state.areas = value },

}

export const actions = {

  async fetchLayout (context) {
    let { data } = await this.$axios.get('/layout')
    context.commit('SET_CATEGORIES', data.data.categories)
    context.commit('SET_COMPANY', data.data.company)
  },

  async fetchAreas (context) {
    const token = this.$auth.getToken('local')
    let { data } = await this.$axios.get(`/areas?cols=*&token=${token}`)
    context.commit('SET_AREAS', data.data)
  }

}
