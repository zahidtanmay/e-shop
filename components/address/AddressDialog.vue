<template>

  <v-dialog v-model="dialog" max-width="500">
    <v-card class="text-center">
      <v-card-title>
        <span class="headline font-weight-light">Add/Edit Dialog</span>
        <v-spacer />
        <v-icon aria-label="Close" @click="dialog = false">mdi-close</v-icon>
      </v-card-title>

      <v-card-text class="mt-4">
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
      </v-card-text>

      <v-card-action>
        <v-btn color="deep-purple lighten-2" text >Update</v-btn>
        <v-btn color="deep-purple lighten-2" text >Delete</v-btn>
      </v-card-action>

    </v-card>

  </v-dialog>

</template>

<script>

  export default {

    name: 'AddressDialog',

    data: () => ({
      name: '',
      phone: '',
      area: '',
      address: '',
      rules: {
        required: value => !!value || 'Required.',
      },
      areas: [
        { area: 'Jatrabari', address: 'Dhaka, Bangladesh'},
        { area: 'Banani', address: 'Dhaka, Bangladesh'}
      ],
    }),

    computed: {
      dialog: {
        get () {
          return this.$store.state.component.addressDialog
        },
        set (val) {
          this.$store.commit('component/setAddressDialog', val)
        }
      }
    },

  }
</script>
