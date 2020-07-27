<template>
  <v-dialog
    v-model="dialog"
    max-width="1000"
  >
    <v-card class="text-center">

      <v-row>
        <v-col md="6">
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.url"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>

        <v-col md="6">
          <v-card-title>
            Onion Imported

            <v-spacer />

            <v-icon
              aria-label="Close"
              @click="dialog = false"
            >
              mdi-close
            </v-icon>
          </v-card-title>
          <div>1 kg</div>
          <div>$ 29</div>

          <v-card-text>

            <div>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>

          </v-card-text>
        </v-col>
      </v-row>

    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    name: 'ItemDetailsDialog',

    computed: {

      dialog: {
        get () {
          return this.$store.state.component.itemDetailsDialog
        },

        set (val) {
          this.$store.commit('component/setItemDetailsDialog', val)
        }
      }
    },

    components: {

    },

    data () {
      return {

          items: [
            {
              'id': 1,
              'url': 'https://cdn.chaldal.net/_mpimage/chicken-eggs-layer-12-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D53198&q=low&v=1&w=600&webp=1'
            },
            {
              'id': 2,
              'url': 'https://cdn.chaldal.net/_mpimage/onion-imported-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D57432&q=good&v=1&w=600&webp=1'
            }
          ]

      }
    }

  }
</script>
