<template>
  <v-container class="pa-4">
    <v-row>
      <template v-for="(item, i) in items">
        <single-item :key="i" :itemDetails="item"></single-item>
      </template>
    </v-row>
  <item-details-dialog></item-details-dialog>
  </v-container>
</template>

<script>
  import SingleItem from "./Item";
  import ItemDetailsDialog from '../item/ItemDetailsDialog'

  export default {
    name: 'ItemsList',

    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          id: 1,
          title: 'Pineapple',
          description: "Pineapples are one of the most popular tropical fruits in the world.Fresh pineapple is low in calories." +
            " Nonetheless, it is a storehouse for several unique health promoting compounds, minerals and vitamins that are essential for optimum health. ",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.chaldal.net/_mpimage/pineapple-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61358&q=low&v=1&w=600&webp=1',
          available: 5,
          context: 'each',
          unitPrice: 50,
        },
        {
          id: 2,
          title: 'Green Coconut',
          description: "Green coconut or young coconut is a very popular fruit all over the world. Green coconut produces more water than the brown or mature coconut. ",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.chaldal.net/_mpimage/green-coconut-daab-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40755&q=low&v=1&w=600&webp=1',
          available: 5,
          context: 'each',
          unitPrice: 60,
        },

        {
          id: 3,
          title: 'Green Apple',
          description: "Green coconut or young coconut is a very popular fruit all over the world. Green coconut produces more water than the brown or mature coconut. ",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.chaldal.net/_mpimage/green-apple-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D31728&q=low&v=1&w=600&webp=1',
          available: 5,
          context: 'kg',
          unitPrice: 60,
        },

        {
          id: 4,
          title: 'Banana Sagor',
          description: "Green coconut or young coconut is a very popular fruit all over the world. Green coconut produces more water than the brown or mature coconut. ",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.chaldal.net/_mpimage/banana-sagor-12-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D22457&q=low&v=1&w=600&webp=1',
          available: 5,
          context: '12 pcs',
          unitPrice: 119,
        },

        {
          id: 5,
          title: 'Guava Thai',
          description: "Green coconut or young coconut is a very popular fruit all over the world. Green coconut produces more water than the brown or mature coconut. ",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.chaldal.net/_mpimage/guava-thai-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D26172&q=low&v=1&w=600&webp=1',
          available: 5,
          context: 'each',
          unitPrice: 60,
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),

    components: {
      SingleItem,
      ItemDetailsDialog
    }
  }
</script>

<style scoped>
  .item-overlay-button {

  }


</style>
