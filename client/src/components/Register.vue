<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <div class="white">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>
              Register
            </v-toolbar-title>
          </v-toolbar>
        </div>  
      </v-flex>
    </v-layout>
    <v-layout row class="mt-5"> 
      <v-flex xs12 sm6 offset-sm3>
        <div class="error" v-html="error"></div>
        
        <v-text-field
        type="email"
        v-model="email"
        name="email"
        solo
        >
        </v-text-field>

        <v-text-field
        type="password"
        v-model="password"
        name="password"
        solo
        >
        </v-text-field>

        <v-btn @click="register" outline color="indigo">Register</v-btn>

      </v-flex>    
    </v-layout>
  </v-container>
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
        await AuthService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
}
</style>
