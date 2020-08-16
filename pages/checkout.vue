<template>
  <v-col
    cols="12"
  >
    <div
      class="font-weight-light mt-1"
      style="font-size: 25px"
    >
      Checkout
    </div>



    <v-row justify="center">
      <v-col md="8">

        <v-card
          flat
          class="mx-auto"
          max-width="500"
        >
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar
              color="primary lighten-2"
              class="subheading white--text"
              size="24"
              v-text="step"
            ></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <Address/>
            </v-window-item>

            <v-window-item :value="2">
              <DeliveryTime/>
            </v-window-item>

            <v-window-item :value="3">
              <OrderConfirm/>
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn
              :disabled="step === 1"
              text
              @click="step--"
            >
              Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="step === 3"
              color="primary"
              depressed
              @click="step++"
            >
              Next
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>

  </v-col>

</template>


<script>
  import Address from '~/components/checkout/Address'
  import DeliveryTime from '~/components/checkout/DeliveryTime'
  import OrderConfirm from '~/components/checkout/OrderConfirm'

  export default {
    name: 'CheckoutForm',

    components: {
      Address,
      DeliveryTime,
      OrderConfirm
    },

    middleware({ store, redirect }) {
      // If the user is not authenticated
      if (!store.state.auth.loggedIn) {
        console.log('checkout')
        return redirect('/login')
      }
    },

    data: () => ({
      step: 1,
      steps: ['Address', 'Select Delivery Date Time', 'Confirm'],
      e6: 1,
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Address'
          case 2: return 'Select Delivery Date Time'
          default: return 'Confirm'
        }
      },
    },
  }
</script>

<style>
  .checkout-stepper {
    box-shadow: none !important;
    border: 1px solid rgba(0, 0, 0, 0.12);
  }
  .step-1 {
    border: 0 !important;
  }
</style>
