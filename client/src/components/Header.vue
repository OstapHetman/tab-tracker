<template>
  <v-layout row>
    <v-flex xs12>
      <v-toolbar fixed class="cyan" dark>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">
            TabTracker
          </router-link>
        </v-toolbar-title>

        <!-- <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Browse</v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat to="/register">
            Sign Up
          </v-btn>
          <v-btn flat to="/login">
            Sign In
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-flex>
  </v-layout>
</template>
