<template>
  <v-container>

    <v-row>
      <v-col>
        <div class="font-weight-light text-center" style="font-size: 25px;">Your Profile</div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col md="8">
        <v-card flat outlined>

          <v-card-title>
            <span class="headline font-weight-light">Info</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>

            <v-text-field
              v-model="name"
              label="Name"
              :rules="[rules.required]"
              validate-on-blur
              persistent-hint
            ></v-text-field>

            <v-text-field
              v-model="phone"
              label="Phone"
              :rules="[rules.required]"
              validate-on-blur
              persistent-hint
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="Email"
              :rules="[rules.required]"
              validate-on-blur
              persistent-hint
            ></v-text-field>

          </v-card-text>




        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col md="8">
        <v-card outlined>
          <v-card-title>
            <span class="headline font-weight-light">Address Book</span>
            <v-spacer />
            <v-btn depressed @click="setAddressDialog" color=""><v-icon>mdi-plus</v-icon>Add</v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <template v-for="address in addresses">

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{address.area}}</v-list-item-title>
                <v-list-item-subtitle>{{address.address}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn @click="setAddressDialog" depressed color="error">Edit</v-btn>
              </v-list-item-action>
            </v-list-item>

          </template>

        </v-card>
      </v-col>
    </v-row>

    <order-details-dialog/>

    <address-dialog/>

  </v-container>

</template>

<script>
  import AddressDialog from '~/components/address/AddressDialog.vue'

  export default {
    name: 'YourProfile',

    data: () => ({
      name: '',
      phone: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
      },

      addresses: [
        { area: 'Jatrabari', address: 'Dhaka, Bangladesh'},
        { area: 'Banani', address: 'Dhaka, Bangladesh'}
      ]

    }),

    components: {
      AddressDialog,
    },

    methods: {
      setAddressDialog() {
        this.$store.commit('component/setAddressDialog', true)
      }
    }

  }
</script>

<style>
  .orders-list-text { margin: 0 !important; }
  .orders-list-action { background: #eceaea;}
</style>
