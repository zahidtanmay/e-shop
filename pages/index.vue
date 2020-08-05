<template>
  <v-container fluid>

    <LandingBanner/>

    <LandingCategories/>

    <LandingExplore/>

  </v-container>
</template>

<script>
  import LandingBanner from '~/components/landing/LandingBanner'
  import LandingCategories from '~/components/landing/LandingCategories'
  import LandingExplore from '~/components/landing/LandingExplore'

  export default {
    name: 'Dashboard',

    components: {
      LandingBanner,
      LandingCategories,
      LandingExplore
    },

    head () {
      return {
        title: 'Home',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },

    data: () => ({

    }),


  }
</script>
