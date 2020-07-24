<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    color="grey lighten-4"
    class="main-nav"
    width="220px"
  >

    <v-list
      dense
      link
      v-for="link in navLinks"
      :key="link.text"
      class="main-side-nav-list"
    >
      <template v-if="link.child && link.child.length > 0">

        <v-list-group :key="link.text">

          <template v-slot:activator>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </template>

          <template v-for="linkChild in link.child">

            <template v-if="linkChild.child && linkChild.child.length > 0">
              <v-list-group
                dense
                no-action
                sub-group
                height="30"
                :key="linkChild.text"
                class="headline font-weight-thin"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>{{linkChild.text}}</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="child in linkChild.child"
                  :key="child.text"
                  link
                  :to="child.link"
                >
                  <v-list-item-title v-text="child.text"></v-list-item-title>
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
                <v-list-item-title v-text="linkChild.text"></v-list-item-title>
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
        >
          <v-list-item-title>{{link.text}}</v-list-item-title>
        </v-list-item>
      </template>

    </v-list>


  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavDrawer',

    data: () => ({
      navLinks: [
        {
          text: 'Popular',
          link: 'popular',
          child: []
        },

        {
          text: 'Foods',
          link: 'foods',
          child: [
            {
              text: 'Breakfast',
              link: 'breakfast',
              child: [
                {
                  text: 'Local',
                  link: 'local',
                },
                {
                  text: 'Energy',
                  link: 'energy-snacks'
                },
              ]
            },
            {
              text: 'Snacks',
              link: 'snacks',
              child: [
                {
                  text: 'Noodles',
                  link: 'noodles',
                },
                {
                  text: 'Soup',
                  link: 'soup'
                },
                {
                  text: 'Biscuits',
                  link: 'biscuits'
                },
                {
                  text: 'Sauces',
                  link: 'sauces'
                },
              ]
            },
            {
              text: 'Dairy',
              link: 'dairy',
              child: []
            },
          ]
        },

        {
          text: 'Home Appliances',
          link: 'home-appliances',
        }
      ],

    }),

    computed: {
      drawer: {
        get() {
          return this.$store.state.component.navDrawer
        },
        set(val) {
          this.$store.commit('component/setNavDrawer', val)
        }
      }
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

</style>
