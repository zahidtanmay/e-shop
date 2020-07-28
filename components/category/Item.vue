<template>
  <v-col
    cols="12"
    md="3"
    sm="4"
  >

    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          flat
          class="mx-auto"
          max-width="344"
        >
          <v-img
            :src="itemDetails.img"
            height="180px"
          >
          </v-img>



          <v-card-text class="text-center">
            <div class="body-1 mb-4">{{itemDetails.title}}</div>
            <div class="primary--text">{{itemDetails.context}}</div>
            <div class="primary--text title"><v-icon>mdi-currency-bdt</v-icon> {{itemDetails.unitPrice}}</div>
          </v-card-text>



          <v-fade-transition>

            <v-overlay
              v-if="hover"
              absolute
              color="#036358"
              @click=""
              z-index="0"
            >
              <div class="display-2 text-center" v-if="count > 0">

                {{count}} Added
              </div>
              <div class="display-2 text-center" v-else>
                Add to cart
              </div>



              <div class="text-center">
                <v-btn
                  small
                  depressed
                  color="grey"
                  class="item-overlay-button mt-16"
                  width="100%"
                  v-if="hover"
                  @click="setItemDetails"
                >
                  view details
                </v-btn>

              </div>



            </v-overlay>


          </v-fade-transition>


        </v-card>


      </template>
    </v-hover>

    <v-row v-if="count > 0">
      <v-col
        cols="12"
        sm="3"
        class="py-0"
      >
        <v-btn depressed
               small
               width="100%"
               @click="removeFromCart"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-col>

      <v-col
        cols="12"
        sm="5"
        class="py-0"
      >



        {{count}} added
      </v-col>
      <v-col
        cols="12"
        sm="3"
        class="py-0"
      >
        <v-btn depressed
               small
               width="100%"
               @click="addToCart"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>

      </v-col>
    </v-row>


    <v-btn
      depressed
      small
      width="100%"
      class="mt-1"
      v-else
      @click="addToCart"
    >
      Add to cart
    </v-btn>

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

      setItemDetails () {
        this.$store.commit('component/setItemDetailsDialog', true)
      },

      async addToCart () {
        const r = await this.$store.dispatch('cart/addToCart', { item: this.itemDetails, count: this.count, cartPre: this.cartPre })
        console.log('r a atc', r)
        this.count = r
      },

      async removeFromCart () {
        const r = await this.$store.dispatch('cart/removeFromCart', { item: this.itemDetails, count: this.count, cartPre: this.cartPre })
        console.log('r a rfc', r)
        this.count = r
      }
    },

    computed: {
      ...mapGetters({
        cartItems: 'cart/getCartItems'
      }),

      cartPre () {
        return this.$route.params.category
      },

    },

    watch: {
      cartItems (val) {
        // console.log('mcr', val)
        if (`${this.itemDetails.id}` in val) {
          const item = val[`${this.itemDetails.id}`]
          this.count = item.count
        } else {
          this.count = 0
        }
      }
    },


  }

</script>
