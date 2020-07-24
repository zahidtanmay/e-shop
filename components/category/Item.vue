<template>
  <v-col
    :key="i"
    cols="12"
    md="3"
  >

    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          flat
          class="mx-auto"
          max-width="344"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
            height="180px"
          >
          </v-img>



          <v-card-text class="text-center">
            <div class="body-1 mb-4">Fresh Refined Sugar</div>
            <div class="primary--text">1 kg</div>
            <div class="primary--text title">$ 66</div>
          </v-card-text>



          <v-fade-transition>

            <v-overlay
              v-if="hover"
              absolute
              color="#036358"
              @click=""
              z-index="0"
            >
              <div class="display-2 text-center">
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
                >
                  view details
                </v-btn>

              </div>



            </v-overlay>


          </v-fade-transition>


        </v-card>


      </template>
    </v-hover>

    <v-btn
      depressed
      small
      width="100%"
      class="mt-1"
    >
      Add to cart
    </v-btn>

  </v-col>
</template>

<script>
  export default {
    name: 'CartItem'
  }
</script>
