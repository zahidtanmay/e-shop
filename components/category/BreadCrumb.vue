<template>
  <v-row>
    <v-breadcrumbs :items="bread">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
        <v-icon>mdi-settings</v-icon>
      </template>
    </v-breadcrumbs>
  </v-row>

</template>

<script>
  export default {
    name: 'CategoryBreadCrumb',

    data: () => ({
      bread: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    })

  }
</script>
