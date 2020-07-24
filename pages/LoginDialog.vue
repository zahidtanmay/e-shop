<template>

    <v-row
      justify="center"
    >

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          color="success"
          icon="mdi-camera-account"
          title="Login"
          class="py-3 px-5"
        >
          <!--<validation-observer v-slot="{ handleSubmit }">-->
            <!--<form @submit.prevent="handleSubmit(userLogin)">-->

              <!--<validation-provider-->
                <!--v-slot="{ errors }"-->
                <!--name="email"-->
                <!--rules="required|email"-->
              <!--&gt;-->
                <!--<v-text-field-->
                  <!--label="Email"-->
                  <!--v-model="email"-->
                  <!--:error-messages="errors"-->
                  <!--color="secondary"-->
                  <!--type="email"-->
                  <!--autocomplete="new"-->
                <!--/>-->
              <!--</validation-provider>-->

              <!--<validation-provider-->
                <!--v-slot="{ errors }"-->
                <!--name="password"-->
                <!--rules="required|min:6"-->
              <!--&gt;-->

              <!--<v-text-field-->
                <!--label="Password*"-->
                <!--:append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"-->
                <!--:type="show ? 'text' : 'password'"-->
                <!--color="secondary"-->
                <!--:error-messages="errors"-->
                <!--@click:append.prevent="show = !show"-->
                <!--autocomplete="new-password"-->
                <!--v-model="password"-->
              <!--/>-->
              <!--</validation-provider>-->

              <!--<v-card-actions class="pa-0">-->
                <!--<v-spacer />-->

                <!--<div class="pa-3 text-center">-->
                  <!--<v-btn-->
                    <!--color="success"-->
                    <!--default-->
                    <!--type="submit"-->
                  <!--&gt;-->
                    <!--Submit-->
                  <!--</v-btn>-->
                <!--</div>-->
              <!--</v-card-actions>-->
            <!--</form>-->
          <!--</validation-observer>-->
        </base-material-card>

      </v-col>

    </v-row>

</template>

<script>
  import BaseVComponent from '~/components/base/VComponent'
  import BaseMaterialCard from '~/components/base/MaterialCard'

  export default {
    name: 'LogIn',


    data: () => ({
      email: '',
      password: '',
      show: false,
    }),

    methods: {
      async userLogin (scope) {

      },
    },

    components: {
      BaseMaterialCard,
      BaseVComponent
    }
  }
</script>
