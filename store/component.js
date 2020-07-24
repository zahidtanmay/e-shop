export const state = () => ({
  navDrawer: true
})

export const getters = {
  getNavDrawer: state => state.navDrawer
}

export const mutations = {
  setNavDrawer: (state, value) => { state.navDrawer = value }
}

export const actions = {

}
