<template>
  <v-container class="pa-4">
    <v-row class="fill-height">
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
          cols="12"
          md="3"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="400"
            >
              <v-img
                :aspect-ratio="16/9"
                src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    $14.99
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative;"
              >
                <v-btn
                  absolute
                  color="orange"
                  class="white--text"
                  fab
                  small
                  right
                  top
                >
                  <v-icon small>mdi-cart</v-icon>
                </v-btn>
                <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
              </v-card-text>
            </v-card>
          </v-hover>



        </v-col>
      </template>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    data: () => ({
      icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
      items: [
        {
          title: 'New Releases',
          text: "It's New Release Friday",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
        },
        {
          title: 'New Releases',
          text: "It's New Release Friday",
          subtext: 'Newly released songs. Updated daily.',
          img: 'https://cdn.vuetifyjs.com/images/cards/kitchen.png',
        },
        {
          title: 'Rock',
          text: 'Greatest Rock Hits',
          subtext: 'Lose yourself in rock tunes.',
          img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
        },
        {
          title: 'Mellow Moods',
          text: 'Ambient Bass',
          subtext: 'Chill beats to mellow you out.',
          img: 'http://lorempixel.com/output/abstract-q-c-640-480-6.jpg',
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),
  }
</script>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  /*.v-card:not(.on-hover) {*/
    /*opacity: 0.6;*/
  /*}*/

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }

  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }


</style>
