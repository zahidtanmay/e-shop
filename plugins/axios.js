import Vue from 'vue'
export default function ({ $axios, redirect }) {
  console.log('axios')
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
