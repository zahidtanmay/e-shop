<template>
  <v-row justify="center">
    <v-col md="8">
      <v-card flat outlined>

        <v-card-title>
          <span class="headline font-weight-light">Info</span>
          <v-spacer></v-spacer>
          <v-btn fab depressed small @click="isEditing = !isEditing">
            <v-icon v-if="isEditing">mdi-close</v-icon>
            <v-icon v-else>mdi-pencil</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>

          <v-text-field
            v-model="name"
            label="Name"
            :rules="[rules.required]"
            validate-on-blur
            persistent-hint
            :disabled="!isEditing"
          ></v-text-field>

          <v-text-field
            v-model="phone"
            label="Phone"
            :rules="[rules.required]"
            validate-on-blur
            persistent-hint
            :disabled="!isEditing"
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Email"
            :rules="[rules.required]"
            validate-on-blur
            persistent-hint
            :disabled="!isEditing"
          ></v-text-field>

        </v-card-text>



        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isEditing" color="success" @click="save">Save</v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'ProfileInfo',
    data: () => ({
      name: '',
      phone: '',
      email: '',
      rules: {
        required: value => !!value || 'Required.',
      },
      hasSaved: false,
      isEditing: null,
      model: null
    }),

    methods: {
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    }
  }
</script>
