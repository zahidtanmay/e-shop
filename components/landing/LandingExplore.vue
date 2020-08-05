<template>

  <div>
    <div class="headline text-center my-8">
      Explore
    </div>
    <v-row>

      <v-col md="6">
        <v-card flat outlined class="text-center" ripple nuxt to="/deals" hover>

          <v-card-title class="text-center" justify="center">
            <span class="headline font-weight-light">Deals</span>
            <v-spacer></v-spacer>

          </v-card-title>

          <v-card-text>
            <v-img src="https://static.carfromjapan.com/d6f08b8d-2977-4fba-8a01-353889bf71c9">

            </v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card flat outlined class="text-center" ripple nuxt to="/popular" hover>

          <v-card-title>
            <span class="headline font-weight-light">Popular</span>
            <v-spacer></v-spacer>

          </v-card-title>

          <v-card-text>
            <v-img src="https://static.carfromjapan.com/d6f08b8d-2977-4fba-8a01-353889bf71c9">

            </v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>
