<template>
  <v-app-bar app clipped-left clipped-right flat class="main-nav-bar">
    <v-app-bar-nav-icon @click="setNavDrawer"></v-app-bar-nav-icon>
    <nuxt-link to="/" class="main-logo black--text">
      <span class="title ml-3 mr-5">E&nbsp;<span class="font-weight-light">Shop</span></span>
    </nuxt-link>

    <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <template v-if="this.$store.state.auth.loggedIn">
      <div>
        <!--{{ this.$store.state.auth.user.name}}-->
        <v-menu offset-y min-width="100" auto>

          <template v-slot:activator="{ on, attrs }">

            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-account</v-icon>
            </v-btn>

          </template>
          <v-list>
            <template v-for="(item, index) in sessions">
              <v-list-item
                :key="index"
                @click="sessionTo(item.link)"
              >
                <v-list-item-title >{{ item.title }}</v-list-item-title>

              </v-list-item>
              <v-divider class="my-0"></v-divider>
            </template>
          </v-list>
        </v-menu>
      </div>
    </template>

    <template v-else>
      <div class="my-2 d-none d-md-flex">
        <v-btn color="error" dark large tile outlined @click="setLoginDialog">Sign In</v-btn>
      </div>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="d-md-none"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>




    <login-dialog></login-dialog>
  </v-app-bar>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LoginDialog from '~/components/login/LoginDialog.vue'

  export default {
    name: 'HeaderBar',

    data: () => ({

      sessions: [
        { 'title': 'Profile', 'link': 'profile' },
        { 'title': 'Orders', 'link': 'orders' },
        { 'title': 'Logout', 'link': 'logout' },
      ]

    }),

    computed: {
      ...mapGetters({
        drawer: 'component/getNavDrawer',
      }),

      loggedIn() {
        return this.$auth.loggedIn
      },

      user() {
        return this.$auth.user
      }
    },

    methods: {

      setNavDrawer() {
        this.$store.commit('component/setNavDrawer', !this.drawer)
      },

      setLoginDialog () {
        this.$store.commit('component/setLoginDialog', true)
      },

      sessionTo (type) {
        switch (type) {
          case 'profile':
            this.$router.push('/profile')
            break
          case 'orders':
            this.$router.push('/orders')
            break
          case 'logout':
            this.$store.dispatch('profile/logout')
            break
          default:
        }
      }
    },

    components: {
      LoginDialog
    }


  }
</script>

<style lang="scss">
  .main-logo { text-decoration: none; }
  .main-nav-bar { background-color: $nav-bar-color !important;border-color: $nav-bar-color !important; }
</style>
