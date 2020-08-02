export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  if(!process.server) {
    app.store.dispatch('categories/fetchCategories')

    app.router.afterEach((to, from) => {
      console.log(to, from)
    })
  }
}
