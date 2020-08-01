<template>

  <v-row class="cart-drawer-header">
    <v-col>
      <v-icon>shopping_cart</v-icon> {{cartCountData}} {{cartCountData > 0 ? 'Items' : 'Item'}} added
    </v-col>

    <v-col>
      <div justify="center" align="end" ><v-btn x-small  @click="setCartDrawer" icon><v-icon>mdi-close</v-icon></v-btn></div>
    </v-col>

  </v-row>

</template>

<script>

  export default {
    name: 'CartDrawerHeader',

    props: ['cartCountData'],

    methods: {

      setCartDrawer () {
        this.$store.commit('component/setCartDrawer', false)
      }

    }
  }

</script>
