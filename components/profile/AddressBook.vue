<template>
  <v-row justify="center">
    <v-col md="8">
      <v-card outlined>
        <v-card-title>
          <span class="headline font-weight-light">Address Book</span>
          <v-spacer />
          <v-btn fab depressed small @click="setAddressDialog" color=""><v-icon>mdi-plus</v-icon></v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <template v-for="address in addresses">

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{address.area}}</v-list-item-title>
              <v-list-item-subtitle>{{address.address}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="setAddressDialog" fab depressed small color="error"><v-icon>mdi-pencil</v-icon></v-btn>
            </v-list-item-action>
          </v-list-item>

        </template>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'ProfileAddressBook',

    data: () => ({
      addresses: [
        { area: 'Jatrabari', address: 'Dhaka, Bangladesh'},
        { area: 'Banani', address: 'Dhaka, Bangladesh'}
      ],
    }),

    methods: {
      setAddressDialog() {
        this.$store.commit('component/setAddressDialog', true)
      },
    }
  }
</script>
