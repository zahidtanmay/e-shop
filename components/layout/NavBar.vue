<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    color="grey lighten-4"
    class="main-nav"
    width="220px"
    flat
  >

    <v-list
      dense
      link
      v-for="(link, cat) in navLinks"
      :key="link.text"
      class="main-side-nav-list"
    >
      <template v-if="link.child && link.child.length > 0">

        <v-list-group
          group
          height="30"
          dense
          :key="link.text"
          :value="cat === currentNav.cat"
          :ref="`cat-${cat}`"
          @click.prevent="routeLink(cat, null, null, link.link)"
          :to="link.link"
        >

          <template slot="activator">
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </template>

          <template v-for="(linkChild, scat) in link.child">
            <!--:disabled="scat === currentNav.scat && cat === currentNav.cat"-->
            <template v-if="linkChild.child && linkChild.child.length > 0">
              <v-list-group
                dense
                no-action
                sub-group
                height="30"
                :key="linkChild.text"
                :class="['headline', 'font-weight-thin', scat === currentNav.scat && cat === currentNav.cat ? 'scat-active' : '']"
                :ref="`scat-${cat}-${scat}`"
                :value="scat === currentNav.scat && cat === currentNav.cat"
                :disabled="scat === currentNav.scat && cat === currentNav.cat"
                @click="routeLink(cat, scat, null, linkChild.link)"

              >
                <template slot="activator">
                    <v-list-item-title :to="linkChild.link" :class="[scat === currentNav.scat && cat === currentNav.cat ? 'scat-active-header' : '']">
                      {{linkChild.text}}
                    </v-list-item-title>
                </template>

                <v-list-item
                  v-for="(child, chi) in linkChild.child"
                  :key="child.text"
                  link
                  :to="child.link"
                >
                  <v-list-item-title @click="routeLink(cat, scat, chi)" v-text="child.text"></v-list-item-title>
                </v-list-item>
              </v-list-group>

            </template>

            <template v-else>

              <v-list-item
                :key="linkChild.text"
                link
                :to="linkChild.link"
                class="link-child"
              >
                <v-list-item-title @click="routeLink(cat, scat)" v-text="linkChild.text"></v-list-item-title>
              </v-list-item>
            </template>

          </template>


        </v-list-group>

      </template>

      <template v-else >
        <v-list-item
          link
          :to="link.link"
          :key="link.text"
          @click="routeLink(cat)"
        >
          <v-list-item-title>{{link.text}}</v-list-item-title>
        </v-list-item>
      </template>

    </v-list>


  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavDrawer',

    data: () => ({
      navList: [],
    }),

    computed: {
      ...mapGetters({
        navLinks: 'nav/getNavLinks',
        currentNav: 'nav/getCurrentNav'
      }),

      drawer: {
        get() {
          return this.$store.state.component.navDrawer
        },
        set(val) {
          this.$store.commit('component/setNavDrawer', val)
        }
      }
    },

    methods: {
      routeLink (cat = null, scat = null, chi = null, type='') {
        console.log(cat, scat, this.$refs)

          const currentNav = {cat: cat, scat: scat, chi: chi}
          if (type) {
            this.$router.push(`/${type}`)
          }

          this.$store.commit('nav/setCurrentNav', currentNav)
          localStorage.setItem('currentNav', JSON.stringify(currentNav));


      }
    },

    mounted() {
      // this.navList = this.navLinks
    }

  }

</script>

<style>
  .main-side-nav-list { padding: 0 !important; }
  .main-side-nav-list .v-list-item--dense, .v-list--dense .v-list-item {
    min-height: 30px !important;
  }
  .main-side-nav-list .link-child { padding-left: 40px !important; }
  .link-child-list-group .v-list-group__header { height: 30px !important; }
  .link-child-list-group .v-list-item__icon {
    margin-top: 3px !important;
    margin-bottom: 0 !important;
  }
  .main-side-nav-list .v-list-item__title {
    font-weight: normal !important;
  }
  .main-nav .v-navigation-drawer__content { margin-top: 20px !important; }
  .main-nav .v-list-item--active {
    font-weight: 700 !important;
    color: #d39b11;
  }

  .scat-active .v-list-group__items {
    display: block !important;
  }

  .scat-active-header {
    font-weight: 700 !important;
    color: #d39b11 !important;
  }

  .scat-active .v-list-item .v-list-item__icon {
    color: #d39b11 !important;
  }



</style>
