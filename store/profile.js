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
      let { data } = await this.$axios.post('send-otp', { mobile: `0${number}` })
      this.$toast.success(data.message)
    } catch (e) {
      this.$toast.error('Oops...Something went wrong')
    }
    
  },

  async verify (context, data) {
    await this.$axios.setHeader('X-Company-Id', '1')
    try {
      // this.$auth.loginWith('local', { data: data })
      let { data } = await this.$axios.post('verify-otp', data)
      this.$toast.success(data.message)
    } catch (e) {
      this.$toast.error('Oops...Something went wrong')
    }
  },

}
