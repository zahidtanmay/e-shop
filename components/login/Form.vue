<template>
    <v-container>
      <div class="my-2">
        <v-btn x-large color="teal" dark width="100%">Sign up with facebook</v-btn>
      </div>
      <div class="my-2">
        <v-btn x-large color="primary" dark width="100%">Login With Email</v-btn>
      </div>

      <div>
        <hr style="float: left">
        <div>Login</div>
        <hr style="float: right">
      </div>
      <v-row>
        <v-col cols="12">
          <v-text-field prepend-icon="mdi-cellphone" prefix="+880" required></v-text-field>
        </v-col>
      </v-row>
      <div class="my-2">
        <v-btn x-large color="success" dark>Submit</v-btn>
      </div>
    </v-container>

</template>

<script>
  export default {
    name: 'LoginForm',

    methods: {
    }

  }
</script>
