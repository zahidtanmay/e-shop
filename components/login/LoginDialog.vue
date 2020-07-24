<template>
  <v-dialog
    v-model="dialog"
    max-width="500"
  >
    <v-card class="text-center">
      <v-card-title>
        Dialog Title

        <v-spacer />

        <v-icon
          aria-label="Close"
          @click="dialog = false"
        >
          mdi-close
        </v-icon>
      </v-card-title>

      <v-card-text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="error"
          text
          @click="dialog = false"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'LoginModal',
    computed: {
      dialog: {
        get () {
          return this.$store.state.component.loginDialog
        },
        set (val) {
          this.$store.commit('component/setLoginDialog', val)
        }
      }
    }
  }
</script>
