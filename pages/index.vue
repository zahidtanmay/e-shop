<template>
  <v-container fluid>

    <div class="headline text-center my-8">
      Our Product categories
    </div>

    <v-row dense>
      <v-col
        v-for="category in categories"
        :key="category.name"
        :cols="12"
        md="4"
      >
        <v-card outlined nuxt :to="category.name">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle v-text="category.name" class="text-center"></v-list-item-subtitle>
            </v-list-item-content>
            <!--<v-list-item-icon>-->
              <!--<v-icon v-text="card.icon" :color="card.color"></v-icon>-->
            <!--</v-list-item-icon>-->
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Dashboard',

    head () {
      return {
        title: 'Home',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },

    data: () => ({

    }),

    computed: {
      ...mapGetters({
        categories: 'bootstrap/getCategories'
      })
    }


  }
</script>
