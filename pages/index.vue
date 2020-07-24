<template>
  <v-container fluid>

    <div class="headline text-center my-8">
      Our Product categories
    </div>

    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="12"
        md="4"
      >
        <v-card outlined nuxt :to="card.link">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle v-text="card.title" class="text-center"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon v-text="card.icon" :color="card.color"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
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
      cards: [
        { title: 'Foods', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-tree', link: 'category1', color: 'primary'},
        { title: 'Beverage', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', icon: 'mdi-cup', link: 'category2', color: 'secondary'},
        { title: 'Grocery', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-coffee', link: 'category3', color: 'warning'},
        { title: 'Utility', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-fish', link: 'category1', color: 'error'},
        { title: 'Household', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', icon: 'mdi-leaf', link: 'category2', color: 'teal'},
        { title: 'Kitchen', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-broom', link: 'category3', color: 'amber'},
        { title: 'Foods', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-tree', link: 'category1', color: 'primary'},
        { title: 'Beverage', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', icon: 'mdi-cup', link: 'category2', color: 'secondary'},
        { title: 'Grocery', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-coffee', link: 'category3', color: 'warning'},
        { title: 'Utility', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-fish', link: 'category1', color: 'error'},
        { title: 'Household', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', icon: 'mdi-leaf', link: 'category2', color: 'teal'},
        { title: 'Kitchen', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', icon: 'mdi-broom', link: 'category3', color: 'amber'},
      ],
    }),


  }
</script>
