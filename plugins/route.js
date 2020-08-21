const route = async function({ app }) {
  // Every time the route changes (fired on initialization too)
  if(!process.server) {
    console.log('route plugin')
    const version = await app.store.dispatch('bootstrap/fetchVersion')
    const persistedVersion = localStorage.getItem('e-shop-version')
    if (!persistedVersion || persistedVersion !== version) {
      app.store.dispatch('bootstrap/fetchLayout')
      app.store.dispatch('bootstrap/fetchCustomFields')
    }
    // app.router.beforeEach((to, from) => {
    //   console.log(to, from)
    // })

    app.router.afterEach((to, from) => {
      if(app.$auth.loggedIn && to.name === 'login')
      {
        console.log('hello before redirect')
        // return app.redirect('/')
      }
      console.log(to, from)
    })
  }
}


export default route
