<template>
  <v-card-text>
    <v-text-field
      outlined
      v-model="name"
      label="Name"
      :rules="[rules.required]"
      validate-on-blur
      persistent-hint
    ></v-text-field>

    <v-text-field
      outlined
      v-model="phone"
      label="Phone"
      :rules="[rules.required]"
      validate-on-blur
      persistent-hint
    ></v-text-field>

    <v-select
      outlined
      :items="areas"
      v-model="area"
      item-text="name"
      item-value="xml"
      label="Area"
      return-object
      :rules="[rules.required]"
      validate-on-blur
      persistent-hint
    ></v-select>

    <v-textarea
      outlined
      name="address"
      label="Address"
      v-model="address"
      rows="3"
      :rules="[rules.required]"
      validate-on-blur
      persistent-hint
    ></v-textarea>
    <span class="caption grey--text text--darken-1">
            This is the address you will get your products
          </span>
  </v-card-text>
</template>

<script>
  export default {
    name: 'AddressStep',
    data: () => ({
      name: '',
      phone: '',
      area: '',
      address: '',
      areas: [],
      items: [],
      rules: {
        required: value => !!value || 'Required.',
      },
    })
  }
</script>
