<template>
  <v-container>

    <v-row>
      <v-col>
        <div class="font-weight-light text-center" style="font-size: 25px;">My Orders</div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col md="8">
        <template v-for="order in orders">
          <single-order :orderDetails="order"/>
        </template>
      </v-col>
    </v-row>

    <order-details-dialog/>

  </v-container>

</template>

<script>
  import SingleOrder from '~/components/orders/Order.vue'
  import OrderDetailsDialog from '~/components/orders/DetailsDialog.vue'

  export default {
    name: 'MyOrders',

    middleware({ store, redirect }) {
    },

    data: () => ({

      orders: [
        {
          id: 5,
          status: 'cancelled',
          amount: 120
        },
        {
          id: 8,
          status: 'pending',
          amount: 450
        }
      ]

    }),

    components: {
      SingleOrder,
      OrderDetailsDialog
    }

  }
</script>

<style>
  .orders-list-text { margin: 0 !important; }
  .orders-list-action { background: #eceaea;}
</style>
