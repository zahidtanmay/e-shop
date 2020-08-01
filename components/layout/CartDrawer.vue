<template>
  <v-navigation-drawer v-model="drawer" app clipped right width="300px">
    <v-list two-line subheader>

      <v-row style="background: #eceaea;">
        <v-col>
          <v-icon>shopping_cart</v-icon> {{cartCount}} {{cartCount > 0 ? 'Items' : 'Item'}} added
        </v-col>

        <v-col>
          <div justify="center" align="end" ><v-btn x-small  @click="setCartDrawer" icon><v-icon>mdi-close</v-icon></v-btn></div>
        </v-col>

      </v-row>

      <template v-for="item in cartItems">

        <v-list-item class="grow">
          <v-row align="center" justify="start" style="max-width: 40px;display: grid;">
            <v-btn icon x-small @click="addToCart(item)"><v-icon color="warning">mdi-chevron-up</v-icon></v-btn>
            <span class="font-weight-light ma-auto" style="font-size: .75rem">{{item.count}}</span>
            <v-btn icon x-small @click="removeFromCart(item)"><v-icon color="warning">mdi-chevron-down</v-icon></v-btn>

          </v-row>

          <v-list-item-avatar color="grey darken-3" size="30" tile>
            <v-img
              class="elevation-6"
              :src="item.img"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle style="font-size: .8rem;">{{item.title}}</v-list-item-subtitle>
            <v-list-item-subtitle style="font-size: .75rem;"><v-icon x-small>mdi-currency-bdt</v-icon>{{item.unitPrice}} / {{item.context}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-row align="center" justify="end" style="max-width: 80px">
            <span><v-icon x-small>mdi-currency-bdt</v-icon></span>
            <span class="subheading mr-2 font-weight-light">{{item.unitPrice * item.count}}</span>
            <v-btn icon x-small @click="discardFromCart(item)"><v-icon  color="error">mdi-close</v-icon></v-btn>
          </v-row>
        </v-list-item>

        <v-divider></v-divider>
      </template>

    </v-list>


    <template v-slot:append>
      <v-row justify="center" class="ma-5" style="cursor: pointer;" @click="$router.push('/checkout')">
        <v-col md="6" style="background: #ff8182;color: white;" class="text-center white-text">
          Place Order
        </v-col>
        <v-col md="6" style="background: #e04f54;color: white;">
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
