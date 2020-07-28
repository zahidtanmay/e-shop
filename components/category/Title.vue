<template>
  <div
    class="font-weight-light mt-1 text-center"
    style="font-size: 25px;background: aliceblue;"
  >
    {{$route.params.category | capitalize}}
  </div>
</template>

<script>
  export default {
    name: 'CategoryPageTitle',

    filters: {
      capitalize: function (value) {
        let str = ''
        value = value.split('-')
        value.map(word => {str = str + ' ' + word.charAt(0).toUpperCase() + word.slice(1)})
        return str.trim()
      }
    }
  }
</script>
