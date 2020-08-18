<template>
  <v-dialog
    v-model="dialog"
    width="900"
    height="1000"
  >

    <v-card >
      <v-card-title>
        <v-spacer />
        <v-icon aria-label="Close" @click="dialog = false">mdi-close</v-icon>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col md="6">

            <Zoomer :imgSrc="item.imageUrl" :key="item.name" />

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
  import Zoomer from './Zoomer'

  export default {
    name: 'ItemDetailsDialog',

    components: {
      Zoomer
    },

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
      },

    },

    methods: {
    }

  }
</script>

<style>
  .item-details-description { color: rgba(0,0,0,1);}

</style>
