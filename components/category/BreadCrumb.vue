<template>
  <v-row>
    <v-breadcrumbs :items="breads">

      <template v-slot:item="{item}">
        <v-breadcrumbs-item
          @click="routeLink(item.val, item.href)"
          :class="item.disabled ? 'bread-crumb-link-disabled' : 'bread-crumb-link-active'"
        >
          {{item.text}}
        </v-breadcrumbs-item>
      </template>
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </v-row>

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'CategoryBreadCrumb',

    computed: {
      ...mapGetters({
        currentNav: 'nav/getCurrentNav',
        navLinks: 'nav/getNavLinks',
      }),

      breads () {
        const {cat, scat, chi} = this.currentNav
        let parent = Object.assign({}, this.navLinks[cat])
        let bread = []
        if (scat !=null && chi != null) {
          bread = [
            {
              text: this.navLinks[cat]['text'],
              href: this.navLinks[cat]['link'],
              disabled: false,
              val: { cat: cat, scat: null, chi: null }
            },
            {
              text: this.navLinks[cat]['child'][scat]['text'],
              href: this.navLinks[cat]['child'][scat]['link'],
              disabled: false,
              val: { cat: cat, scat: scat, chi: null }
            },
            {
              text: this.navLinks[cat]['child'][scat]['child'][chi]['text'],
              href: this.navLinks[cat]['child'][scat]['child'][chi]['text'],
              disabled: true,
              val: { cat: cat, scat: scat, chi: chi }
            }

          ]
        } else if (scat != null) {
          bread = [
            {
              text: this.navLinks[cat]['text'],
              href: this.navLinks[cat]['link'],
              disabled: false,
              val: { cat: cat, scat: null, chi: null }
            },
            {
              text: this.navLinks[cat]['child'][scat]['text'],
              href: this.navLinks[cat]['child'][scat]['link'],
              disabled: true,
              val: { cat: cat, scat: scat, chi: null }
            }
          ]
        } else {
          bread = [
            {
              text: parent.text,
              href: parent.link,
              disabled: true,
              val: { cat: cat, scat: null, chi: null }
            }
          ]
        }

        return bread
      },
    },

    data: () => ({
      bread: []
    }),

    methods: {

      routeLink (val, link) {

        const currentNav = val

        this.$router.push(`/${link}`)

        this.$store.commit('nav/setCurrentNav', currentNav)

      }

    },

    async mounted() {

    }

  }
</script>

<style lang="scss">
  .bread-crumb-link-disabled { color: rgba(0, 0, 0, 0.38); }
  .bread-crumb-link-active { color: $nav-active-color; cursor: pointer;}
</style>
