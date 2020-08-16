export const state = () => ({
})

export const getters = {

}

export const mutations = {

}

export const actions = {

  async sendOtp (context, number) {
    await this.$axios.setHeader('X-Company-Id', '1')
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
    await this.$axios.setHeader('X-Company-Id', '1')
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
    // await this.$axios.post(`logout?token=${this.$auth.getToken('local')}`)
    await this.$auth.logout()
    this.$router.push('/')
  },

  async updateProfile({commit}, value) {
    // await this.$axios.setHeader('X-Company-Id', '1')
    try {
      const {data} = await this.$axios.put(`customers?token=${this.$auth.getToken('local')}`, JSON.stringify(value))
      return true
    } catch (e) {
      console.log(e, e.response)
      this.$toast.error('Oops...Something went wrong')
      return false
    }
    console.log(value)
  }

}
