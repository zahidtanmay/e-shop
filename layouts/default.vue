<template>
  <v-app id="keep">

    <Header/>

    <nav-bar></nav-bar>

    <cart-drawer></cart-drawer>

    <v-main>
        <nuxt/>
    <speed-dial></speed-dial>
    </v-main>
  </v-app>
</template>

<script>
  import Header from '~/components/layout/Header.vue'
  import NavBar from '~/components/layout/NavBar.vue'
  import SpeedDial from '~/components/layout/SpeedDial.vue'
  import CartDrawer from '~/components/layout/CartDrawer.vue'

  export default {
    name: 'DefaultLayout',

    props: {
      source: String,
    },

    components: {
      Header,
      NavBar,
      SpeedDial,
      CartDrawer
    },

    data: () => ({

    }),
  }
</script>

<style>
  .v-application { font-family: Poppins, sans-serif !important; }
  .v-btn:focus { outline:0; }
</style>
