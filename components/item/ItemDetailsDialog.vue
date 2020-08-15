<template>
  <v-dialog
    v-model="dialog"
    max-width="800"
  >
    <v-card >
      <v-card-title>
        <v-spacer />
        <v-icon aria-label="Close" @click="dialog = false">mdi-close</v-icon>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col md="6">
            <v-carousel height="450">
              <v-carousel-item
                :src="item.imageUrl"
                reverse-transition="fade-transition"
                transition="fade-transition"
                hide-delimeter
              ></v-carousel-item>
            </v-carousel>
          </v-col>

          <v-col md="6"><v-card-text>
            <div class="headline mb-1 text-center">{{item.name}}</div>
            <div class="mb-4 text-center">{{item.unit}} / <v-icon x-small>mdi-currency-bdt</v-icon>{{item.price}}</div>
            <div class="item-details-description font-weight-thin">{{item.description}}</div>
          </v-card-text>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'ItemDetailsDialog',

    computed: {
      ...mapGetters({
        item: 'product/getActiveProduct'
      }),

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

      }
    }

  }
</script>

<style>
  .item-details-description { color: rgba(0,0,0,1);}
</style>
