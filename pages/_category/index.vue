<template>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{$route.params.category}}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-breadcrumbs :items="bread">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
            <v-icon>mdi-settings</v-icon>
          </template>
        </v-breadcrumbs>
      </v-row>

      <Items/>


    </v-container>

</template>

<script>
  import Items from '~/components/category/Items.vue'
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
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
      ],

      bread: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],


    }),

    components: {
      Items
    },

    mounted() {
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>
  /*.v-card {*/
    /*transition: opacity .4s ease-in-out;*/
  /*}*/

  /*.v-card:not(.on-hover) {*/
    /*opacity: 0.6;*/
  /*}*/

  /*.show-btns {*/
    /*color: rgba(255, 255, 255, 1) !important;*/
  /*}*/
</style>
