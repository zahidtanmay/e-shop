export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  if(!process.server) {
    app.store.dispatch('bootstrap/fetchLayout')

    // app.router.beforeEach((to, from) => {
    //   console.log(to, from)
    // })

    app.router.afterEach((to, from) => {
      // console.log(to, from)
    })
  }
}
