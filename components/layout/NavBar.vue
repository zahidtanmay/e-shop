<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    class="main-nav"
    width="220px"
    flat
  >

    <v-list
      dense
      link
      v-for="(category, cat) in categories"
      :key="category.name"
      class="main-side-nav-list"
    >
      <template v-if="category.subCategories && category.subCategories.length > 0">

        <v-list-group
          group
          dense
          :key="category.name"
          :value="cat === currentNav.cat"
          :ref="`cat-${cat}`"
          @click.prevent="routeLink(cat, null, null, category.name)"
          :to="category.name"
        >

          <template slot="activator">
            <v-list-item-title>{{category.name}}</v-list-item-title>
          </template>

          <template v-for="(subCategory, scat) in category.subCategories">

            <template v-if="subCategory.child && subCategory.child.length > 0">

              <v-list-item
                @click="routeLink(cat, scat)"
                :to="linkChild.link"
                link
                :class="['sub-group-list', scat === currentNav.scat ? 'sub-group-active' : '']"
              >
                <transition transition="scale-transition">
                  <v-list-item-icon v-if="scat === currentNav.scat"><v-icon color="nav-active-color" class="nav-active-icon">mdi-chevron-up</v-icon></v-list-item-icon>
                  <v-list-item-icon v-else><v-icon color="grey lighten-1">mdi-chevron-down</v-icon></v-list-item-icon>
                </transition>

                <v-list-item-title class="sub-group-title">{{linkChild.text}}</v-list-item-title>
              </v-list-item>


              <transition-group transition="expand-transition" class="py-0" group>
                <template v-if="scat === currentNav.scat">
                  <v-list-item
                    v-for="(child, chi) in linkChild.child"
                    :key="child.text"
                    link
                    :to="child.link"
                  >
                    <v-list-item-title @click="routeLink(cat, scat, chi)" v-text="child.text" class="sub-group-child"></v-list-item-title>
                  </v-list-item>
                </template>
              </transition-group>



            </template>

            <template v-else>

              <v-list-item
                :key="subCategory.name"
                link
                :to="subCategory.name"
                class="single-sub-group"
              >
                <v-list-item-title @click="routeLink(cat, scat)" v-text="subCategory.name"></v-list-item-title>
              </v-list-item>
            </template>

          </template>


        </v-list-group>

      </template>

      <template v-else >
        <v-list-item
          link
          :to="category.name"
          :key="category.name"
          @click="routeLink(cat)"
        >
          <v-list-item-title>{{category.name}}</v-list-item-title>
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

    }),

    computed: {
      ...mapGetters({
        navLinks: 'nav/getNavLinks',
        currentNav: 'nav/getCurrentNav',
        categories: 'bootstrap/getCategories'
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

        const currentNav = {cat: cat, scat: scat, chi: chi}
        if (type) {
          this.$router.push(`/${type}`)
        }

        this.$store.commit('nav/setCurrentNav', currentNav)

      }
    },

    mounted() {
      // this.navList = this._.cloneDeep(this.navLinks)
    }

  }

</script>

<style lang="scss">

  .main-nav .v-navigation-drawer__content { margin-top: 12px !important; }

  .main-side-nav-list { padding: 0 !important; }

  .main-side-nav-list .v-list-item__title { font-weight: 200 !important; font-size: .9rem !important; }

  .main-nav .v-list-item--active { font-weight: 700 !important; color: $nav-active-color; }

  .v-list-item--active .v-list-item__title{ font-weight: 400 !important; }

  .sub-group-active .sub-group-title { font-weight: 700 !important; color: $nav-active-color; }

  .sub-group-child { padding-left: 75px; }

  .single-sub-group { padding-left: 70px; }

  .nav-active-icon { color: $nav-active-color !important; }

</style>
