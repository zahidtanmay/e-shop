<template>
  <v-container>

    <v-row>
      <v-col>
        <div class="font-weight-light text-center" style="font-size: 25px;">Your Profile</div>
      </v-col>
    </v-row>

    <ProfileInfo/>

    <AddressBook/>

    <address-dialog/>

  </v-container>

</template>

<script>
  import AddressDialog from '~/components/address/AddressDialog.vue'
  import ProfileInfo from '~/components/profile/Info.vue'
  import AddressBook from '~/components/profile/AddressBook.vue'

  export default {
    name: 'YourProfile',

    data: () => ({

    }),

    components: {
      AddressDialog,
      ProfileInfo,
      AddressBook
    },

    methods: {

    }

  }
</script>

<style>
  .orders-list-text { margin: 0 !important; }
  .orders-list-action { background: #eceaea;}
</style>
