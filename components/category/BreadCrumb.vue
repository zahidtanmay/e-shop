<template>
  <v-row>
    <v-breadcrumbs :items="breads">
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
            },
            {
              text: this.navLinks[cat]['child'][scat]['text'],
              href: this.navLinks[cat]['child'][scat]['link'],
              disabled: false,
            },
            {
              text: this.navLinks[cat]['child'][scat]['child'][chi]['text'],
              href: this.navLinks[cat]['child'][scat]['child'][chi]['text'],
              disabled: true,
            }

          ]
        } else if (scat != null) {
          bread = [
            {
              text: this.navLinks[cat]['text'],
              href: this.navLinks[cat]['link'],
              disabled: false,
            },
            {
              text: this.navLinks[cat]['child'][scat]['text'],
              href: this.navLinks[cat]['child'][scat]['link'],
              disabled: true,
            }
          ]
        } else {
          bread = [
            {
              text: parent.text,
              href: parent.link,
              disabled: true,
            }
          ]
        }

        return bread
      },
    },

    data: () => ({
      bread: []
    }),





    async mounted() {
      // console.log(this.currentNav, this.navLinks)
      // const {cat, scat, chi} = await this.currentNav
      // let parent = await Object.assign({}, this.navLinks[cat])
      // console.log(this.currentNav, parent.text)
      // let bread = []
      // if (scat !=null && chi != null) {
      //   bread = [
      //     {
      //       text: this.navLinks[cat]['text'],
      //       href: this.navLinks[cat]['link'],
      //       disabled: false,
      //     },
      //     {
      //       text: this.navLinks[cat]['child'][scat]['text'],
      //       href: this.navLinks[cat]['child'][scat]['link'],
      //       disabled: false,
      //     },
      //     {
      //       text: this.navLinks[cat]['child'][scat]['child'][chi]['text'],
      //       href: this.navLinks[cat]['child'][scat]['child'][chi]['text'],
      //       disabled: true,
      //     }
      //
      //   ]
      // } else if (scat != null) {
      //   bread = [
      //     {
      //       text: this.navLinks[cat]['text'],
      //       href: this.navLinks[cat]['link'],
      //       disabled: false,
      //     },
      //     {
      //       text: this.navLinks[cat]['child'][scat]['text'],
      //       href: this.navLinks[cat]['child'][scat]['link'],
      //       disabled: true,
      //     }
      //   ]
      // } else {
      //   bread = [
      //     {
      //       text: parent.text,
      //       href: parent.link,
      //       disabled: true,
      //     }
      //   ]
      // }
      //
      // this.bread = bread
    }

  }
</script>
