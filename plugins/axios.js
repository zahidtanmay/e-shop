
export default function ({ $axios, redirect }) {

  if (process.client) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
  }

  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onResponse(response => {
    console.log(response, response.request, response.request.responseURL)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    console.log(code)
  })
}
