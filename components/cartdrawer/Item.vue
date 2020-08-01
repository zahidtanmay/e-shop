<template>
  <v-list-item class="grow">

    <v-row align="center" justify="start" class="cart-drawer-item-action-row">
      <v-btn icon x-small @click="addToCart(item)"><v-icon color="warning">mdi-chevron-up</v-icon></v-btn>
      <span class="font-weight-light ma-auto cart-drawer-item-action-count">{{item.count}}</span>
      <v-btn icon x-small @click="removeFromCart(item)"><v-icon color="warning">mdi-chevron-down</v-icon></v-btn>
    </v-row>

    <v-list-item-avatar size="30" tile>
      <v-img :src="item.img"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-subtitle class="cart-drawer-item-content-title">{{item.title}}</v-list-item-subtitle>
      <v-list-item-subtitle class="cart-drawer-item-content-subtitle"><v-icon x-small>mdi-currency-bdt</v-icon>{{item.unitPrice}} / {{item.context}}</v-list-item-subtitle>
    </v-list-item-content>

    <v-row align="center" justify="end" class="cart-drawer-item-right-row">
      <span><v-icon x-small>mdi-currency-bdt</v-icon></span>
      <span class="subheading mr-2 font-weight-light">{{item.unitPrice * item.count}}</span>
      <v-btn icon x-small @click="discardFromCart(item)"><v-icon  color="error">mdi-close</v-icon></v-btn>
    </v-row>
  </v-list-item>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CartDrawerItem',
    props: ['item'],

    computed: {

      ...mapGetters({
        cartItems: 'cart/getCartItems',
        cartCount: 'cart/getCartCount',
        cartTotal: 'cart/getCartTotal',
      }),
    },

    methods: {

      async addToCart (item) {
        await this.$store.dispatch('cart/addToCart', { item: item, count: item.count })
      },

      async removeFromCart (item) {
        await this.$store.dispatch('cart/removeFromCart', { item: item, count: item.count })
      },

      async discardFromCart(item) {
        await this.$store.dispatch('cart/discardFromCart', item)
      }
    }
  }
</script>
