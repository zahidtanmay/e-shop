<template>

  <v-dialog v-model="dialog" max-width="500">
    <v-card class="text-center">
      <v-card-title>
        <span class="headline font-weight-light">Order Details</span>
        <v-spacer />
        <v-icon aria-label="Close" @click="dialog = false">mdi-close</v-icon>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <p class="text-center font-weight-medium mb-0 mt-2">Delivery Address</p>
        <p class="text-center mb-0">Dhaka, Bangladesh</p>

      </v-card-text>
      <v-divider></v-divider>

      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3" tile>
          <v-img
            class="elevation-6"
            src="https://cdn.chaldal.net/_mpimage/mango-aamropali-net-weight-50-gm-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61314&q=low&v=1&m=400&w=200&webp=1"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Mango Aamropali (Net Weight ± 50 gm)</v-list-item-title>
          <v-list-item-subtitle>Mango Aamropali (Net Weight ± 50 gm)</v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

    </v-card>

  </v-dialog>

</template>

<script>

  export default {

    name: 'OrderDetailsDialog',

    computed: {
      dialog: {
        get () {
          return this.$store.state.component.orderDialog
        },
        set (val) {
          this.$store.commit('component/setOrderDialog', val)
        }
      }
    },

  }
</script>
