<template>
  <v-card flat outlined :key="orderDetails.id" class="mb-4">
    <v-card-text class="py-1 text-center">
      <div><v-chip color="primary" outlined>{{orderDetails.status}}</v-chip></div>
      <p class="font-weight-bold orders-list-text">Order # {{orderDetails.id}}</p>
      <p class="orders-list-text"><v-icon small>mdi-currency-bdt</v-icon>{{orderDetails.amount}}</p>
    </v-card-text>
    <v-card-actions class="orders-list-action py-0">
      <v-spacer></v-spacer>
      <v-btn color="deep-purple lighten-2" text @click="setOrderDetailsDialog(orderDetails.id)">View Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {

    name: 'SingleOrder',

    props: ['orderDetails'],

    methods: {

      setOrderDetailsDialog(id) {
        this.$store.commit('component/setOrderDialog', true)
      }

    }

  }
</script>
