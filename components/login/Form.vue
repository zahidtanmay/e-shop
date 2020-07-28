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
      <v-row v-if="val === 0">
        <v-col cols="12">
          <v-text-field prepend-icon="mdi-cellphone" prefix="+880" required></v-text-field>
        </v-col>
      </v-row>

      <v-row v-if="val === 1">
        <v-col cols="12">
          <v-text-field required label="OTP"></v-text-field>
        </v-col>
      </v-row>

      <div class="my-2" @click="val++">
        <v-btn x-large color="success" dark>Submit</v-btn>
      </div>
    </v-container>

</template>

<script>
  export default {
    name: 'LoginForm',

    data: () => ({

      val: 0

    }),

    methods: {
    }

  }
</script>
