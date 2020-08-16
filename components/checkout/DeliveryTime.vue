<template>
  <v-card-text>
    <v-select
      v-model="select"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="Select"
      persistent-hint
      return-object
      single-line
    ></v-select>


    <v-select
      v-model="select"
      :items="items"
      item-text="state"
      item-value="abbr"
      label="Select"
      persistent-hint
      return-object
      single-line
    ></v-select>
    <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
  </v-card-text>
</template>

<script>
  export default {
    name: 'DeliveryTime',
    data: () => ({
      select: '',
    })
  }
</script>
