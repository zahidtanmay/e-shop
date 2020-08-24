<template>

  <div>
    <div class="headline text-center my-12">
      Explore
    </div>
    <v-sheet
      class="mx-auto"
      elevation="0"
      max-width="900"
    >
      <v-slide-group
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="n in 15"
          :key="n"
          v-slot:default="{ active, toggle }"
        >

          <v-card
            outlined
            class="text-center mx-4"
            nuxt
            to="/deals"
            hover
            ripple
            width="200"
            height="300"

          >

            <v-card-title class="text-center" justify="center">
              <span class="headline font-weight-light">Deals</span>
              <v-spacer></v-spacer>

            </v-card-title>

            <v-card-text>
              <v-img src="https://static.carfromjapan.com/d6f08b8d-2977-4fba-8a01-353889bf71c9">

              </v-img>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>

  </div>

</template>
