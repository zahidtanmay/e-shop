export default function ({$auth, route, router, redirect, store}) {


  if(!process.server) {
    console.log('route', $auth.loggedIn, route.name, router)

    if($auth.loggedIn && route.name === 'login')
    {
      console.log('hello before redirect')
      store.dispatch('profile/test')
      return redirect('/')

    }

  }
  // console.log('auth', $auth)
  // if (!$auth.loggedIn) {
  //   return
  // }
  //
  // const username = $auth.user.username
}
