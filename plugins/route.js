const route = async function({ app }) {
  // Every time the route changes (fired on initialization too)
  if(!process.server) {
    console.log('route plugin')
    app.store.dispatch('bootstrap/fetchLayout')
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
