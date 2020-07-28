<template>

    <v-container fluid>
      <v-row dense>
        <v-col md="11">

          <banner></banner>

          <bread-crumb></bread-crumb>

          <category-title/>

          <Items/>

        </v-col>

      </v-row>

    </v-container>

</template>

<script>
  import Banner from '~/components/category/Banner.vue'
  import BreadCrumb from '~/components/category/BreadCrumb.vue'
  import Items from '~/components/category/Items.vue'
  import CategoryTitle from '~/components/category/Title.vue'
  export default {
    name: 'CategoryRoot',

    head () {
      return {
        title: this.$route.params.category,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },

    data: () => ({

    }),

    components: {
      Banner,
      BreadCrumb,
      Items,
      CategoryTitle
    },

    mounted() {

    }
  }
</script>
