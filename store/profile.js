export const state = () => ({
  locations: [],
  activeAddress: {}
})

export const getters = {
  getLocations: state => state.locations,
  getActiveAddress: state => state.activeAddress
}

export const mutations = {
  SET_LOCATIONS: (state, value) => { state.locations = [...value] },
  ADD_LOCATION: (state, value) => { state.locations.push(value) },
  UPDATE_LOCATIONS: (state, value) => {
    console.log(value)
    const id = state.locations.findIndex(item => item.id === value.id)
    Object.assign(state.locations[id], {})
    Object.assign(state.locations[id], location)
  },
  SET_ACTIVE_ADDRESS: (state, value) => { state.activeAddress = value },
}

export const actions = {

  async sendOtp (context, number) {
    try {
      let { data } = await this.$axios.post('send-otp', JSON.stringify({ mobile: `880${number}` }))
      this.$toast.success(data.message)
      return true
    } catch (e) {
      this.$toast.error('Oops...Something went wrong')
      return false
    }
  },

  async verifyOtp (context, data) {
    const dt = Object.assign({}, data)
    try {
      const {data} = await this.$auth.loginWith('local', {data: JSON.stringify(dt)})
      await this.$auth.setUser(data.data.user)
      await this.$auth.setToken('local', data.data.token)
      return true
    } catch (e) {
      console.log(e, e.response)
      this.$toast.error('Oops...Something went wrong')
      return false
    }
  },

  async logout({}) {
    await this.$auth.logout()
    this.$router.push('/')
  },

  async updateProfile({commit, rootState}, value) {

    try {
      const {data} = await this.$axios.put(`customer?token=${this.$auth.getToken('local')}`, JSON.stringify(value))
      let user = { ...rootState.auth.user, ...value }
      await this.$auth.setUser(user)
      this.$toast.success('Profile Updated Successfully')
      return true
    } catch (e) {
      console.log(e, e.response)
      this.$toast.error('Oops...Something went wrong')
      return false
    }
  },

  async fetchLocations (context) {
    const token = this.$auth.getToken('local')
    let { data } = await this.$axios.get(`/locations?cols=*&token=${token}`)
    context.commit('SET_LOCATIONS', [])
    context.commit('SET_LOCATIONS', data.data)
  },

  async addLocation (context, location) {
    console.log('location', location)
    const token = this.$auth.getToken('local')
    try {
      let { data } = await this.$axios.post(`/locations?&token=${token}`, JSON.stringify(location))
      this.$toast.success('Location added Successfully')
      context.commit('ADD_LOCATION', location)
      context.commit('component/setAddressDialog', false, { root: true })
    } catch (e) {
      console.log(e, e.response)
      this.$toast.error('Oops...Something went wrong')
    }
  },

  async updateLocations (context, location) {
    console.log(location)
    const token = this.$auth.getToken('local')
    try{
      let { data } = await this.$axios.put(`/locations?&token=${token}`, JSON.stringify(location))
      this.$toast.success('Location Updated Successfully')
      context.commit('UPDATE_LOCATIONS', location)
      context.commit('component/setAddressDialog', false, { root: true })
    } catch (e) {
      console.log(e, e.response)
      this.$toast.error('Oops...Something went wrong')
    }
  }

}
