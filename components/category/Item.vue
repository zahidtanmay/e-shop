<template>
  <v-col
    :class="[$vuetify.breakpoint.name === 'xs' ? 'cat-s-i' : 'category-single-item']"
  >

    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card flat class="mx-auto" max-width="220px">
          <v-img :src="itemDetails.imageUrl" height="180px" eager></v-img>

          <v-card-text class="text-center">
            <div class="item-name-text mb-4">{{itemDetails.name}}</div>
            <div class="primary--text">{{itemDetails.unit}}</div>
            <div class="primary--text title"><v-icon>mdi-currency-bdt</v-icon> {{itemDetails.price}}</div>
          </v-card-text>

          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358" z-index="0">

              <div class="display-2 text-center" v-if="count > 0">{{count}} added</div>
              <div class="display-2 text-center" v-else>Add to cart</div>

              <div class="text-center">
                <v-btn small depressed color="grey" class="item-overlay-button mt-16" width="100%" v-if="hover" @click="setItemDetails(itemDetails)">
                  view details
                </v-btn>
              </div>

            </v-overlay>
          </v-fade-transition>

        </v-card>
      </template>
    </v-hover>

    <v-row v-if="count > 0">

      <v-col xs="3" class="py-0">
        <v-btn depressed small width="100%" @click="removeFromCart">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-col>

      <v-col xs="5" class="py-0 text-center">{{count}}</v-col>

      <v-col xs="3" class="py-0">
        <v-btn depressed small width="100%" @click="addToCart">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>

    </v-row>

    <v-btn depressed small width="100%" class="mt-1" v-else @click="addToCart">Add to cart</v-btn>

  </v-col>
</template>

<script>

  import { mapGetters } from 'vuex'
  import { mdiCurrencyBdt } from '@mdi/js'

  export default {
    name: 'SingleProductItem',

    props: ['itemDetails'],

    components: {
      mdiCurrencyBdt
    },

    data: () => ({
      count: 0,
    }),

    methods: {

      setItemDetails (item) {
        this.$store.commit('product/SET_ACTIVE_PRODUCT', item)
        this.$store.commit('component/setItemDetailsDialog', true)
      },

      async addToCart () {
        await this.$store.dispatch('cart/addToCart', { item: this.itemDetails, count: this.count, cartPre: this.cartPre })
      },

      async removeFromCart () {
        await this.$store.dispatch('cart/removeFromCart', { item: this.itemDetails, count: this.count, cartPre: this.cartPre })
      },

      itemCountSet (val) {
        if (`${this.itemDetails.id}` in val) {
          const item = val[`${this.itemDetails.id}`]
          this.count = item.count
        } else {
          this.count = 0
        }
      },

    },

    computed: {
      ...mapGetters({
        cartItems: 'cart/getCartItems'
      }),

      cartPre () {
        return this.$route.params.category
      },

    },

    mounted () {
      this.itemCountSet(this.cartItems)
    },

    watch: {
      cartItems: {
        deep: true,
        handler (val) {
          this.itemCountSet(val)
        }

      }

    },


  }

</script>

<style>
  .category-single-item { max-width: 210px !important; }
  .item-name-text { min-height: 32px;
    font-size: .8rem !important;
    font-weight: 400;
    letter-spacing: 0.03125em !important;
    line-height: 1rem;
  }
</style>
