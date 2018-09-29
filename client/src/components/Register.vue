<template>
  <v-layout row class="pt-5"> 
    <v-flex xs12 sm6 offset-sm3>
      <v-alert 
      :value="true"
      type="error"
      v-if="error">
        {{ error }}
      </v-alert>
      
      <v-text-field
      type="email"
      v-model="email"
      name="email"
      label="Enter email"
      >
      </v-text-field>

      <v-text-field
      type="password"
      v-model="password"
      name="password"
      label="Enter Password"
      autocomplete="new-password"
      >
      </v-text-field>

      <v-btn class="d-block mx-auto" @click="register" color="success">Singup</v-btn>

    </v-flex>    
  </v-layout>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        });

        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
