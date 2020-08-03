<template>
  <v-navigation-drawer v-model="drawer" app clipped right width="300px">
    <v-list two-line subheader>

      <v-row class="cart-drawer-header">
        <v-col>
          <v-icon>shopping_cart</v-icon> {{cartCount}} {{cartCount > 0 ? 'Items' : 'Item'}} added
        </v-col>

        <v-col>
          <div justify="center" align="end" ><v-btn x-small  @click="setCartDrawer" icon><v-icon>mdi-close</v-icon></v-btn></div>
        </v-col>

      </v-row>

      <template v-for="item in cartItems">

        <v-list-item class="grow">

          <v-row align="center" justify="start" class="cart-drawer-item-action-row">
            <v-btn icon x-small @click="addToCart(item)"><v-icon color="warning">mdi-chevron-up</v-icon></v-btn>
            <span class="font-weight-light ma-auto cart-drawer-item-action-count">{{item.count}}</span>
            <v-btn icon x-small @click="removeFromCart(item)"><v-icon color="warning">mdi-chevron-down</v-icon></v-btn>
          </v-row>

          <v-list-item-avatar size="30" tile>
            <v-img :src="item.imageUrl"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle class="cart-drawer-item-content-title">{{item.name}}</v-list-item-subtitle>
            <v-list-item-subtitle class="cart-drawer-item-content-subtitle"><v-icon x-small>mdi-currency-bdt</v-icon>{{item.price}} / {{item.unit}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-row align="center" justify="end" class="cart-drawer-item-right-row">
            <span><v-icon x-small>mdi-currency-bdt</v-icon></span>
            <span class="subheading mr-2 font-weight-light">{{item.price * item.count}}</span>
            <v-btn icon x-small @click="discardFromCart(item)"><v-icon  color="error">mdi-close</v-icon></v-btn>
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
      </template>

    </v-list>


    <template v-slot:append>
      <v-row justify="center" class="ma-5 cart-drawer-place-order-btn" @click="$router.push('/checkout')">
        <v-col md="6" class="text-center white-text cart-drawer-place-order-btn-content1">
          Place Order
        </v-col>
        <v-col md="6" class="cart-drawer-place-order-btn-content2">
          <v-icon color="white">mdi-currency-bdt</v-icon> {{cartTotal}}
        </v-col>
      </v-row>
    </template>


  </v-navigation-drawer>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CartDrawer',

    computed: {

      ...mapGetters({
        cartItems: 'cart/getCartItems',
        cartCount: 'cart/getCartCount',
        cartTotal: 'cart/getCartTotal',
      }),

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
      },

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

<style>
  .cart-drawer-header { background: #eceaea !important; }
  .cart-drawer-item-action-row { max-width: 40px;display: grid; }
  .cart-drawer-item-action-count { font-size: .75rem; }
  .cart-drawer-item-content-title { font-size: .8rem; }
  .cart-drawer-item-content-subtitle { font-size: .75rem; }
  .cart-drawer-item-right-row { max-width: 80px; }
  .cart-drawer-place-order-btn { cursor: pointer; }
  .cart-drawer-place-order-btn-content1 { background: #ff8182;color: white; }
  .cart-drawer-place-order-btn-content2 { background: #e04f54;color: white; }
</style>
