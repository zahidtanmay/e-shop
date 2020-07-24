<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
    color="lighten-4"
  >

    <v-list dense class="">
      <v-list-item
        link
        nuxt
      >
        <v-list-item-title>Popular</v-list-item-title>
      </v-list-item>

      <v-list-group
        value="true"
      >
        <template v-slot:activator>
          <v-list-item-title>Foods</v-list-item-title>

        </template>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Breakfast</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
          >
            <!--<v-list-item-title v-text="admin[0]"></v-list-item-title>-->
            <nuxt-link :to="admin[0]">{{admin[0]}}</nuxt-link>
          </v-list-item>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Snacks</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <!--<v-list-item-title v-text="crud[0]"></v-list-item-title>-->
            <nuxt-link :to="crud[0]">{{crud[0]}}</nuxt-link>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>


  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'NavDrawer',

    data: () => ({

      admins: [
        ['Local', 'local-snacks'],
        ['Energy', 'energy-snacks'],
      ],

      cruds: [
        ['Noodles', 'noodles'],
        ['Soup', 'soup'],
        ['Biscuits', 'biscuits'],
        ['Sauces', 'sauces'],
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
