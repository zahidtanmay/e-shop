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

        <v-stepper v-model="e6" vertical alt-labels class="checkout-stepper">
          <v-stepper-step :complete="e6 > 1" step="1" editable>
            <v-card-title class="title">
              <span class="mr-4"><v-icon large>mdi-map-marker</v-icon></span>Delivery Address
            </v-card-title>
          </v-stepper-step>
          <v-divider></v-divider>

          <v-stepper-content step="1" class="step-1">
            <v-row justify="center">
              <v-col md="8" >

                <v-text-field
                  outlined
                  v-model="name"
                  label="Name"
                  :rules="[rules.required]"
                  validate-on-blur
                  persistent-hint
                ></v-text-field>

                <v-text-field
                  outlined
                  v-model="phone"
                  label="Phone"
                  :rules="[rules.required]"
                  validate-on-blur
                  persistent-hint
                ></v-text-field>

                <v-select
                  outlined
                  :items="areas"
                  v-model="area"
                  item-text="name"
                  item-value="xml"
                  label="Area"
                  return-object
                  :rules="[rules.required]"
                  validate-on-blur
                  persistent-hint
                ></v-select>

                <v-textarea
                  outlined
                  name="address"
                  label="Address"
                  v-model="address"
                  rows="3"
                  :rules="[rules.required]"
                  validate-on-blur
                  persistent-hint
                ></v-textarea>
              </v-col>
            </v-row>

            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            <v-card-title class="title">
              <span class="mr-4"><v-icon large>mdi-clock</v-icon></span>Preferred Delivery Timings
            </v-card-title>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
            <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
            <v-btn text>Cancel</v-btn>
          </v-stepper-content>

        </v-stepper>
      </v-col>
    </v-row>

  </v-col>

</template>


<script>
  export default {
    name: 'CheckoutForm',
    data: () => ({
      e6: 1,
      name: '',
      phone: '',
      area: '',
      address: '',
      areas: [],
      rules: {
        required: value => !!value || 'Required.',
      },
    })
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
