<template>
  <v-app-bar
    app
    clipped-left
    color="amber"
  >
    <v-app-bar-nav-icon @click="setNavDrawer"></v-app-bar-nav-icon>
    <nuxt-link to="/">
      <span class="title ml-3 mr-5">E&nbsp;<span class="font-weight-light">Shop</span></span>
    </nuxt-link>
    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Search"
      prepend-inner-icon="search"
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <div class="my-2">
      <v-btn color="error" dark large tile outlined>Sign In</v-btn>
    </div>

  </v-app-bar>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'HeaderBar',

    data: () => ({

    }),

    computed: {
      ...mapGetters({
        drawer: 'component/getNavDrawer',
      })
    },

    methods: {

      setNavDrawer() {
        this.$store.commit('component/setNavDrawer', !this.drawer)
      }
    }


  }
</script>
