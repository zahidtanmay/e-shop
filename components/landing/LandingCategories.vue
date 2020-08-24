<template>
  <div>
    <div class="headline text-center my-8">
      Our Product categories
    </div>

    <v-row justify="center">
      <v-col
        v-for="category in categories"
        :key="category.name"
        :cols="12"
        md="4"
      >
        <v-card outlined hover ripple nuxt :to="category.slug">
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

      <!--<v-card class="d-flex justify-center" flat tile>-->

        <!--<v-card-->
          <!--v-for="category in categories"-->
          <!--:key="category.name"-->
          <!--class="pa-2 ma-1 text-center"-->
          <!--outlined hover ripple-->
          <!--:to="category.name"-->
        <!--&gt;-->

          <!--<div class="text-center">{{category.name}}</div>-->
        <!--</v-card>-->

      <!--</v-card>-->
    </v-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'LandingCategories',

    computed: {
      ...mapGetters({
        categories: 'bootstrap/getCategories'
      })
    }

  }
</script>
