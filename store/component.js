export const state = () => ({
  navDrawer: true,
  loginDialog: false,
  cartDrawer: false,
  itemDetailsDialog: false,
})

export const getters = {
  getNavDrawer: state => state.navDrawer,
  getCartDrawer: state => state.cartDrawer,
}

export const mutations = {
  setNavDrawer: (state, value) => { state.navDrawer = value },
  setLoginDialog: (state, value) => { state.loginDialog = value },
  setCartDrawer: (state, value) => { state.cartDrawer = value },
  setItemDetailsDialog: (state, value) => { state.itemDetailsDialog = value },
}

export const actions = {

}
