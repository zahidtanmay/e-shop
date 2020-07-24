<template>
  <v-row>
    <v-col
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex"
    >
      <v-card class="mx-16" flat>
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <!--<v-card-title>{{$route.params.category}}</v-card-title>-->
        </v-img>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    name: 'CategoryBanner',
    data: () => ({
      cards: [
        {title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12},
      ],
    })
  }
</script>
