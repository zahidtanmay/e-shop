<template>
  <v-card id="create">


        <v-btn
          v-model="fab"
          dark
          class="ma-2 main-speed-dial d-inline"
          outlined
          color="teal"
          @click="setCartNav"
          height="80px"
        >
          <div class="d-inline">
            <div>
              <v-icon>shopping_cart</v-icon>
            </div>
            <div>
              <span>2 Items</span>
            </div>
            <div class="grey black--text">
              <span>$ 200</span>
            </div>
          </div>





        </v-btn>

  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),

    computed: {
      ...mapGetters({
        drawer: 'component/getCartDrawer',
      })
    },


    methods: {
      setCartNav () {
        this.$store.commit('component/setCartDrawer', !this.drawer)
      }
    },

  }
</script>

<style>
  /* This is for documentation purposes and will not be needed in your application */
  .main-speed-dial {
    position: fixed;
    top: 50%;
    right: 0;
    padding: 0 !important;
  }

</style>
