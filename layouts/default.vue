<template>
  <v-app id="keep">

    <Header/>

    <nav-bar></nav-bar>

    <v-main>
        <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '~/components/layout/Header.vue'
  import NavBar from '~/components/layout/NavBar.vue'


  export default {

    props: {
      source: String,
    },

    components: {
      Header,
      NavBar,
    },

    data: () => ({

    }),


  }
</script>
