<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    right
  >
    <template v-slot:append>
      <v-btn
        fab
        outlined
        color="grey accent-2"
        absolute
        class="cart-drawer-fab"
        @click="setCartDrawer"
      >
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </template>

  </v-navigation-drawer>

</template>

<script>
  export default {
    name: 'CartDrawer',

    computed: {
      drawer: {
        get () {
          return this.$store.state.component.cartDrawer
        },
        set (val) {
          this.$store.commit('component/setCartDrawer', val)
        }
      }
    },

    methods: {
      setCartDrawer () {
        this.$store.commit('component/setCartDrawer', false)
      }
    }
  }
</script>

<style>
  .cart-drawer-fab { top: 50%;left: -15px !important; }
</style>
